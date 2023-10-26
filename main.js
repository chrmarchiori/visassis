const $camera = document.querySelector("#camera");
const $canvas = document.querySelector("#canvas");
const $takeColorButton = document.querySelector("#takeColor");
const $colorResult = document.querySelector("#color-result");
const $allowCamera = document.querySelector("#allowCamera");
const $errorSection = document.querySelector("#error-popup");
const $indicator = document.querySelector("#indicator");

// Error showing
function addError(text) {
  const currentErrors = $errorSection.innerHTML;
  const newErrors = currentErrors + `<p>${text}</p>`;

  $errorSection.innerHTML = newErrors;
}

function overrideError(text) {
  const $errorSection = document.querySelector("#error-popup");

  $errorSection.innerHTML = `<p>${text}</p>`;
}

window.onerror = (text) => {
  addError(`Global - ${text}`);
};

class App {
  cameraSettings = {};

  start() {
    const $this = this;

    const constraints = {
      video: {
        facingMode: "environment",
      },
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      $this.cameraSettings = stream.getTracks()[0].getSettings();
      $camera.srcObject = stream;

      $indicator.style.width = `${60}px`;
      $indicator.style.height = `${60}px`;
    });

    $takeColorButton.addEventListener("click", async function () {
      const image = $this.takePhoto();
      if (image) {
        const color = $this.getAverageColor(image);
        const averageColorHSL = RGBtoHSL(color.r, color.g, color.b);

        const rgb = `rgb(${color.r},${color.g},${color.b})`;
        const hsl = `hsl(${averageColorHSL.h},${averageColorHSL.s}%,${averageColorHSL.l}%)`;

        console.log(rgb, hsl);
        overrideError(hsl);

        document.body.style.backgroundColor = rgb;

        const colorName = getColorName.hsl3(
          averageColorHSL.h,
          averageColorHSL.s,
          averageColorHSL.l
        );

        $this.say(colorName);
      }
    });
  }

  takePhoto() {
    const xStart = this.cameraSettings.height * 0.5 - 40;
    const yStart = this.cameraSettings.width * 0.5 - 40;

    const imageCropSize = {
      width: 80,
      height: 80,
    };

    $canvas.width = imageCropSize.width;
    $canvas.height = imageCropSize.height;

    const context = $canvas.getContext("2d");

    context.drawImage(
      $camera,
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
      return context.getImageData(
        0,
        0,
        imageCropSize.width,
        imageCropSize.height
      );
    } catch (e) {
      return null;
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
