function getClosestColorName(r, g, b) {
  const colorTable  = [
    { name: "Vermelho", rgb: [255, 0, 0] },
    { name: "Verde", rgb: [0, 255, 0] },
    { name: "Azul", rgb: [0, 0, 255] },
    { name: "Amarelo", rgb: [255, 255, 0] },
    { name: "Roxo", rgb: [128, 0, 128] },
    { name: "Laranja", rgb: [255, 165, 0] },
    { name: "Rosa", rgb: [255, 192, 203] },
    { name: "Marrom", rgb: [165, 42, 42] },
    { name: "Cinza", rgb: [128, 128, 128] },
    { name: "Preto", rgb: [0, 0, 0] },
    { name: "Branco", rgb: [255, 255, 255] },
    { name: "Ciano", rgb: [0, 255, 255] },
    { name: "Magenta", rgb: [255, 0, 255] },
    { name: "Turquesa", rgb: [64, 224, 208] },
    { name: "Dourado", rgb: [255, 215, 0] },
    { name: "Prateado", rgb: [192, 192, 192] },
  ];

  let closestColor = colorTable[0];
  let minDistance = Number.MAX_VALUE;

  for (const color of colorTable) {
    const distance = Math.sqrt(
      Math.pow(r - color.rgb[0], 2) +
      Math.pow(g - color.rgb[1], 2) +
      Math.pow(b - color.rgb[2], 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = color;
    }
  }

  return closestColor.name;
}

class App {
  $camera = document.querySelector("#camera");
  $canvas = document.querySelector("#canvas");
  $takeColorButton = document.querySelector("#takeColor");
  $colorResult = document.querySelector("#color-result");
  $allowCamera = document.querySelector("#allowCamera");

  cameraSettings = {};

  start() {
    const $this = this;

    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: "environment",
        },
        audio: false,
      })
      .then((stream) => {
        $this.cameraSettings = stream.getTracks()[0].getSettings();
        $this.$camera.srcObject = stream;
      });

    // this.$allowCamera.addEventListener("click", async function () {});

    this.$takeColorButton.addEventListener("click", async function () {
      $this.takeColor();
    });
  }

  takeColor() {
    const xStart = this.cameraSettings.width * 0.4;
    const yStart = this.cameraSettings.height * 0.4;

    const imageCropSize = {
      width: this.cameraSettings.width * 0.2,
      height: this.cameraSettings.height * 0.2,
    };

    const context = this.$canvas.getContext("2d");

    context.drawImage(
      this.$camera,
      xStart,
      yStart,
      imageCropSize.width,
      imageCropSize.height,
      0,
      0,
      imageCropSize.width,
      imageCropSize.height
    );

    try {
      const data = context.getImageData(
        0,
        0,
        imageCropSize.width,
        imageCropSize.height
      );
      const averageColor = this.getAverageColor(data);
      
      const rgb = `rgb(${averageColor.r},${averageColor.g},${averageColor.b})`;
        
      document.body.style.backgroundColor = rgb;

      const colorName = getClosestColorName(averageColor.r, averageColor.g, averageColor.b)

      this.say(colorName);
    } catch (e) {
      console.log(e);
    }
  }
  

  getAverageColor(imageData) {
    const blockSize = 5;
    let count = 0;
    const rgb = { r: 0, g: 0, b: 0 };

    let i = 0;
    const length = imageData.data.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += imageData.data[i];
      rgb.g += imageData.data[i + 1];
      rgb.b += imageData.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
  }

  say(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.volume = 1;
    msg.pitch = 1;
    msg.rate = 1;
    msg.lang = "pt-BR";
    msg.voiceURI = "Google UK English Female";
    msg.onboundary = function (event) {
      console.log("Speech reached a boundary:", event.name);
    };
    msg.onpause = function (event) {
      console.log(
        "Speech paused:",
        event.utterance.text.substring(event.charIndex)
      );
    };
    window.speechSynthesis.speak(msg);
  }
}

const app = new App();
app.start();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("sw.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
