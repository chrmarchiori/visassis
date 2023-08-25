function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);

  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.floor(h * 360),
    s: Math.floor(s * 100),
    l: Math.floor(l * 100),
  };
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
          facingMode: {
            exact: "environment",
          },
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
      const hsl = rgbToHsl(averageColor.r, averageColor.g, averageColor.b);

      document.body.style.backgroundColor = rgb;

      console.log(hsl);

      this.say("cor");
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
