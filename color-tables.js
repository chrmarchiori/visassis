function RGBtoHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // Monochromatic
  } else {
    const d = max - min;
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

  // Convert hue to degrees
  h = Math.round(h * 360);
  // Convert saturation and lightness to percentages
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
}

function hsl1(h, s, l) {
  const hue = h;
  const saturation = s;
  const lightness = l;

  const colorTable = [
    { name: "Vermelho", hsl: { h: 0, s: 100, l: 50 } },
    { name: "Amarelo", hsl: { h: 60, s: 100, l: 50 } },
    { name: "Verde", hsl: { h: 120, s: 100, l: 50 } },
    { name: "Ciano", hsl: { h: 180, s: 100, l: 50 } },
    { name: "Azul", hsl: { h: 240, s: 100, l: 50 } },
    { name: "Roxo", hsl: { h: 300, s: 100, l: 50 } },
    { name: "Cinza", hsl: { h: 0, s: 0, l: 50 } },
    { name: "Branco", hsl: { h: 0, s: 0, l: 100 } },
    { name: "Preto", hsl: { h: 0, s: 0, l: 0 } },
    { name: "Marrom", hsl: { h: 30, s: 60, l: 30 } },
    { name: "Rosa", hsl: { h: 330, s: 100, l: 80 } },
    { name: "Laranja", hsl: { h: 30, s: 100, l: 50 } },
    { name: "Violeta", hsl: { h: 270, s: 100, l: 50 } },
    { name: "Azul Claro", hsl: { h: 210, s: 100, l: 75 } },
    { name: "Verde Claro", hsl: { h: 90, s: 100, l: 75 } },
    { name: "Turquesa", hsl: { h: 180, s: 100, l: 60 } },
    { name: "Dourado", hsl: { h: 45, s: 80, l: 60 } },
    { name: "Prata", hsl: { h: 0, s: 0, l: 75 } },
    { name: "Lavanda", hsl: { h: 270, s: 50, l: 70 } },
    { name: "Verde Oliva", hsl: { h: 90, s: 50, l: 30 } },
    { name: "Magenta", hsl: { h: 300, s: 100, l: 50 } },
    // Adicione mais cores conforme necessário
  ];

  let closestColor = null;
  let minDifference = Infinity;

  for (const color of colorTable) {
    const colorHSL = color.hsl;
    const difference = Math.sqrt(Math.pow(hue - colorHSL.h, 2));

    if (difference < minDifference) {
      minDifference = difference;
      closestColor = color.name;
    }
  }

  if (s < 15) {
    closestColor = "Cinza";
  }

  if (l < 10) {
    closestColor = "Preto";
  }

  if (l > 90) {
    closestColor = "Branco";
  }

  console.log(h, s, l);

  return closestColor;
}

function hsl2(h, s, l) {
  const hue = h;
  const saturation = s;
  const lightness = l;

  const colorTable = [
    { name: "Vermelho", hsl: { h: 0, s: 100, l: 50 } },
    { name: "Amarelo", hsl: { h: 60, s: 100, l: 50 } },
    { name: "Verde", hsl: { h: 120, s: 100, l: 50 } },
    { name: "Ciano", hsl: { h: 180, s: 100, l: 50 } },
    { name: "Azul", hsl: { h: 240, s: 100, l: 50 } },
    { name: "Roxo", hsl: { h: 300, s: 100, l: 50 } },
    { name: "Cinza", hsl: { h: 0, s: 0, l: 50 } },
    { name: "Branco", hsl: { h: 0, s: 0, l: 100 } },
    { name: "Preto", hsl: { h: 0, s: 0, l: 0 } },
    { name: "Marrom", hsl: { h: 30, s: 60, l: 30 } },
    { name: "Rosa", hsl: { h: 330, s: 100, l: 80 } },
    { name: "Laranja", hsl: { h: 30, s: 100, l: 50 } },
    { name: "Violeta", hsl: { h: 270, s: 100, l: 50 } },
    { name: "Azul Claro", hsl: { h: 210, s: 100, l: 75 } },
    { name: "Verde Claro", hsl: { h: 90, s: 100, l: 75 } },
    { name: "Turquesa", hsl: { h: 180, s: 100, l: 60 } },
    { name: "Dourado", hsl: { h: 45, s: 80, l: 60 } },
    { name: "Prata", hsl: { h: 0, s: 0, l: 75 } },
    { name: "Lavanda", hsl: { h: 270, s: 50, l: 70 } },
    { name: "Verde Oliva", hsl: { h: 90, s: 50, l: 30 } },
    { name: "Magenta", hsl: { h: 300, s: 100, l: 50 } },
    // Adicione mais cores conforme necessário
  ];

  let closestColor = null;
  let minDifference = Infinity;

  for (const color of colorTable) {
    const colorHSL = color.hsl;
    const difference = Math.sqrt(Math.pow(hue - colorHSL.h, 2));

    if (difference < minDifference) {
      minDifference = difference;
      closestColor = color.name;
    }
  }

  console.log(h, s, l);

  return closestColor;
}

function hsl3(h, s, l) {
  const hue = h;
  const saturation = s;
  const lightness = l;

  // const colorTable = [
  //   { name: "Vermelho", hsl: { h: 0, s: 100, l: 50 } },
  //   { name: "Laranja", hsl: { h: 30, s: 100, l: 50 } },
  //   { name: "Amarelo", hsl: { h: 60, s: 100, l: 50 } },
  //   { name: "Verde Oliva", hsl: { h: 90, s: 50, l: 30 } },
  //   { name: "Verde", hsl: { h: 120, s: 100, l: 50 } },
  //   { name: "Ciano", hsl: { h: 180, s: 100, l: 50 } },
  //   { name: "Azul", hsl: { h: 240, s: 100, l: 50 } },
  //   { name: "Violeta", hsl: { h: 270, s: 100, l: 50 } },
  //   { name: "Roxo", hsl: { h: 300, s: 100, l: 50 } },
  //   { name: "Rosa", hsl: { h: 330, s: 100, l: 80 } },
  //   { name: "Vermelho", hsl: { h: 360, s: 100, l: 50 } },
  // ];

  const colorTable = [
    { name: "Vermelho", hue: 0 },
    { name: "Vermelho Alaranjado", hue: 30 },
    { name: "Laranja", hue: 60 },
    { name: "Amarelo Alaranjado", hue: 90 },
    { name: "Amarelo", hue: 120 },
    { name: "Amarelo Esverdeado", hue: 150 },
    { name: "Verde", hue: 180 },
    { name: "Verde Azulado", hue: 210 },
    { name: "Ciano", hue: 240 },
    { name: "Azul", hue: 270 },
    { name: "Azul Arroxeado", hue: 300 },
    { name: "Violeta", hue: 330 },
    { name: "Vermelho", hue: 360 },
  ];

  let colorName = null;
  let minDifference = Infinity;

  for (const color of colorTable) {
    const difference = Math.sqrt(Math.pow(hue - color.hue, 2));

    if (difference < minDifference) {
      minDifference = difference;
      colorName = color.name;
    }
  }

  if (saturation < 25) {
    colorName += " Acinzentado";
  }

  if (saturation < 10) {
    colorName = "Cinza";
  }

  if (lightness > 70) {
    colorName += " Claro";
  }

  if (lightness < 30) {
    colorName += " Escuro";
  }

  if (lightness < 10) {
    colorName = "Preto";
  }

  if (lightness > 90) {
    colorName = "Branco";
  }

  return colorName;
}

function rgb1(r, g, b) {
  const colorTable = [
    // Tons De Cinza – Gray Colors
    // { name: "Cinza", value: { r: 0, g: 0, b: 0 } },
    // { name: "Cinza", value: { r: 28, g: 28, b: 28 } },
    // { name: "Cinza", value: { r: 54, g: 54, b: 54 } },
    // { name: "Cinza", value: { r: 79, g: 79, b: 79 } },
    // { name: "Cinza", value: { r: 105, g: 105, b: 105 } },
    // { name: "Cinza", value: { r: 128, g: 128, b: 128 } },
    // { name: "Cinza", value: { r: 169, g: 169, b: 169 } },
    // { name: "Cinza", value: { r: 192, g: 192, b: 192 } },
    // { name: "Cinza", value: { r: 211, g: 211, b: 211 } },
    // { name: "Cinza", value: { r: 220, g: 220, b: 220 } },

    // Tons De Azul – Blue Colors
    { name: "Azul", value: { r: 106, g: 90, b: 205 } },
    { name: "Azul", value: { r: 131, g: 111, b: 255 } },
    { name: "Azul", value: { r: 105, g: 89, b: 205 } },
    { name: "Azul", value: { r: 72, g: 61, b: 139 } },
    { name: "Azul", value: { r: 25, g: 25, b: 112 } },
    { name: "Azul", value: { r: 0, g: 0, b: 128 } },
    { name: "Azul", value: { r: 0, g: 0, b: 139 } },
    { name: "Azul", value: { r: 0, g: 0, b: 205 } },
    { name: "Azul", value: { r: 0, g: 0, b: 255 } },
    { name: "Azul", value: { r: 100, g: 149, b: 237 } },
    { name: "Azul", value: { r: 65, g: 105, b: 225 } },
    { name: "Azul", value: { r: 30, g: 144, b: 255 } },
    { name: "Azul", value: { r: 0, g: 191, b: 255 } },
    { name: "Azul", value: { r: 135, g: 206, b: 250 } },
    { name: "Azul", value: { r: 135, g: 206, b: 235 } },
    { name: "Azul", value: { r: 173, g: 216, b: 230 } },
    { name: "Azul", value: { r: 70, g: 130, b: 180 } },
    { name: "Azul", value: { r: 176, g: 196, b: 222 } },
    { name: "Azul", value: { r: 112, g: 128, b: 144 } },
    { name: "Azul", value: { r: 119, g: 136, b: 153 } },

    // Tons De Ciano – Cyan Colors
    { name: "Ciano", value: { r: 0, g: 255, b: 255 } },
    { name: "Ciano", value: { r: 0, g: 206, b: 209 } },
    { name: "Ciano", value: { r: 64, g: 224, b: 208 } },
    { name: "Ciano", value: { r: 72, g: 209, b: 204 } },
    { name: "Ciano", value: { r: 32, g: 178, b: 170 } },
    { name: "Ciano", value: { r: 0, g: 139, b: 139 } },
    { name: "Ciano", value: { r: 0, g: 128, b: 128 } },
    { name: "Ciano", value: { r: 127, g: 255, b: 212 } },
    { name: "Ciano", value: { r: 102, g: 205, b: 170 } },
    { name: "Ciano", value: { r: 95, g: 158, b: 160 } },

    // Tons De Verde – Green Colors
    { name: "Verde", value: { r: 47, g: 79, b: 79 } },
    { name: "Verde", value: { r: 0, g: 250, b: 154 } },
    { name: "Verde", value: { r: 0, g: 255, b: 127 } },
    { name: "Verde", value: { r: 152, g: 251, b: 152 } },
    { name: "Verde", value: { r: 144, g: 238, b: 144 } },
    { name: "Verde", value: { r: 143, g: 188, b: 143 } },
    { name: "Verde", value: { r: 60, g: 179, b: 113 } },
    { name: "Verde", value: { r: 46, g: 139, b: 87 } },
    { name: "Verde", value: { r: 0, g: 100, b: 0 } },
    { name: "Verde", value: { r: 0, g: 128, b: 0 } },
    { name: "Verde", value: { r: 34, g: 139, b: 34 } },
    { name: "Verde", value: { r: 50, g: 205, b: 50 } },
    { name: "Verde", value: { r: 0, g: 255, b: 0 } },
    { name: "Verde", value: { r: 124, g: 252, b: 0 } },
    { name: "Verde", value: { r: 127, g: 255, b: 0 } },
    { name: "Verde", value: { r: 173, g: 255, b: 47 } },
    { name: "Verde", value: { r: 154, g: 205, b: 50 } },
    { name: "Verde", value: { r: 107, g: 142, b: 35 } },
    { name: "Verde", value: { r: 85, g: 107, b: 47 } },
    { name: "Verde", value: { r: 128, g: 128, b: 0 } },

    // Tons De Marrom – Brown Colors
    { name: "Marrom", value: { r: 189, g: 183, b: 107 } },
    { name: "Marrom", value: { r: 218, g: 165, b: 32 } },
    { name: "Marrom", value: { r: 184, g: 134, b: 11 } },
    { name: "Marrom", value: { r: 139, g: 69, b: 19 } },
    { name: "Marrom", value: { r: 160, g: 82, b: 45 } },
    { name: "Marrom", value: { r: 188, g: 143, b: 143 } },
    { name: "Marrom", value: { r: 205, g: 133, b: 63 } },
    { name: "Marrom", value: { r: 210, g: 105, b: 30 } },
    { name: "Marrom", value: { r: 244, g: 164, b: 96 } },
    { name: "Marrom", value: { r: 255, g: 222, b: 173 } },
    { name: "Marrom", value: { r: 245, g: 222, b: 179 } },
    { name: "Marrom", value: { r: 222, g: 184, b: 135 } },
    { name: "Marrom", value: { r: 210, g: 180, b: 140 } },

    // Tons De Roxo – Purple Colors
    { name: "Roxo", value: { r: 123, g: 104, b: 238 } },
    { name: "Roxo", value: { r: 147, g: 112, b: 219 } },
    { name: "Roxo", value: { r: 138, g: 43, b: 226 } },
    { name: "Roxo", value: { r: 75, g: 0, b: 130 } },
    { name: "Roxo", value: { r: 148, g: 0, b: 211 } },
    { name: "Roxo", value: { r: 153, g: 50, b: 204 } },
    { name: "Roxo", value: { r: 186, g: 85, b: 211 } },
    { name: "Roxo", value: { r: 128, g: 0, b: 128 } },
    { name: "Roxo", value: { r: 139, g: 0, b: 139 } },
    { name: "Roxo", value: { r: 255, g: 0, b: 255 } },
    { name: "Roxo", value: { r: 238, g: 130, b: 238 } },
    { name: "Roxo", value: { r: 218, g: 112, b: 214 } },
    { name: "Roxo", value: { r: 221, g: 160, b: 221 } },

    // Tons De Rosa – Pink Colors
    { name: "Rosa", value: { r: 199, g: 21, b: 133 } },
    { name: "Rosa", value: { r: 255, g: 20, b: 147 } },
    { name: "Rosa", value: { r: 255, g: 105, b: 180 } },
    { name: "Rosa", value: { r: 219, g: 112, b: 147 } },
    { name: "Rosa", value: { r: 255, g: 182, b: 193 } },
    { name: "Rosa", value: { r: 255, g: 192, b: 203 } },
    { name: "Rosa", value: { r: 240, g: 128, b: 128 } },
    { name: "Rosa", value: { r: 205, g: 92, b: 92 } },
    { name: "Rosa", value: { r: 220, g: 20, b: 60 } },

    // Tons De Vermelho – Red Colors
    { name: "Vermelho", value: { r: 128, g: 0, b: 0 } },
    { name: "Vermelho", value: { r: 139, g: 0, b: 0 } },
    { name: "Vermelho", value: { r: 178, g: 34, b: 34 } },
    { name: "Vermelho", value: { r: 165, g: 42, b: 42 } },
    { name: "Vermelho", value: { r: 250, g: 128, b: 114 } },
    { name: "Vermelho", value: { r: 233, g: 150, b: 122 } },
    { name: "Vermelho", value: { r: 255, g: 160, b: 122 } },
    { name: "Vermelho", value: { r: 255, g: 127, b: 80 } },
    { name: "Vermelho", value: { r: 255, g: 99, b: 71 } },
    { name: "Vermelho", value: { r: 255, g: 0, b: 0 } },

    // Tons De Laranja – Orange Colors
    { name: "Laranja", value: { r: 255, g: 69, b: 0 } },
    { name: "Laranja", value: { r: 255, g: 140, b: 0 } },
    { name: "Laranja", value: { r: 255, g: 165, b: 0 } },

    // Tons De Amarelo – Yellow Colors
    { name: "Amarelo", value: { r: 255, g: 215, b: 0 } },
    { name: "Amarelo", value: { r: 255, g: 255, b: 0 } },
    { name: "Amarelo", value: { r: 240, g: 230, b: 140 } },
  ];

  let closestColor = null;
  let minDifference = Infinity;

  for (const color of colorTable) {
    const difference =
      Math.pow(r - color.value.r, 2) * 0.3 +
      Math.pow(g - color.value.g, 2) * 0.59 +
      Math.pow(b - color.value.b, 2) * 0.11;

    console.log(difference);

    if (difference < minDifference) {
      minDifference = difference;
      closestColor = color.name;
    }
  }

  return closestColor;
}

function rgb2(r, g, b) {
  const colorTable = [
    { name: "Branco", value: { r: 100, g: 100, b: 100 } },
    { name: "Prata", value: { r: 75, g: 75, b: 75 } },
    { name: "Cinza", value: { r: 50, g: 50, b: 50 } },
    { name: "Cinza Escuro", value: { r: 25, g: 25, b: 25 } },
    { name: "Preto", value: { r: 0, g: 0, b: 0 } },

    // Tons de vermelho - r
    { name: "Vermelho", value: { r: 100, g: 0, b: 0 } },
    { name: "Vermelho", value: { r: 75, g: 0, b: 0 } },
    { name: "Marrom", value: { r: 50, g: 0, b: 0 } },
    { name: "Marrom", value: { r: 25, g: 0, b: 0 } },

    // Tons de verde - g
    { name: "Verde", value: { r: 0, g: 100, b: 0 } },
    { name: "Verde", value: { r: 0, g: 75, b: 0 } },
    { name: "Verde Escuro", value: { r: 0, g: 50, b: 0 } },
    { name: "Verde Escuro", value: { r: 0, g: 25, b: 0 } },

    // Tons de azul - b
    { name: "Azul", value: { r: 0, g: 0, b: 100 } },
    { name: "Azul", value: { r: 0, g: 0, b: 75 } },
    { name: "Azul Escuro", value: { r: 0, g: 0, b: 50 } },
    { name: "Azul Escuro", value: { r: 0, g: 0, b: 25 } },

    // Tons r/g
    { name: "Amarelo", value: { r: 100, g: 100, b: 0 } },
    { name: "Amarelo", value: { r: 100, g: 75, b: 0 } },
    { name: "Laranja", value: { r: 100, g: 50, b: 0 } },
    { name: "Laranja", value: { r: 100, g: 25, b: 0 } },

    // Tons r/g
    { name: "Verde Lima", value: { r: 75, g: 100, b: 0 } },
    { name: "Amarelo Escuro", value: { r: 75, g: 75, b: 0 } },
    { name: "Laranja Escuro", value: { r: 75, g: 50, b: 0 } },
    { name: "Laranja Escuro", value: { r: 75, g: 25, b: 0 } },

    // Tons r/g
    { name: "Verde Claro", value: { r: 50, g: 100, b: 0 } },
    { name: "Verde Escuro", value: { r: 50, g: 75, b: 0 } },
    { name: "Amarelo Escuro", value: { r: 50, g: 50, b: 0 } },
    { name: "Marrom", value: { r: 50, g: 25, b: 0 } },

    // Tons r/g
    { name: "Verde Claro", value: { r: 25, g: 100, b: 0 } },
    { name: "Verde", value: { r: 25, g: 75, b: 0 } },
    { name: "Verde Escuro", value: { r: 25, g: 50, b: 0 } },
    { name: "Amarelo Escuro", value: { r: 25, g: 25, b: 0 } },

    // Tons r/b
    { name: "Rosa", value: { r: 100, g: 0, b: 100 } },
    { name: "Rosa", value: { r: 100, g: 0, b: 75 } },
    { name: "Rosa", value: { r: 100, g: 0, b: 50 } },
    { name: "Rosa Avermelhado", value: { r: 100, g: 0, b: 25 } },

    { name: "Roxo", value: { r: 75, g: 0, b: 100 } },
    { name: "Roxo", value: { r: 75, g: 0, b: 75 } },
    { name: "Rosa Escuro", value: { r: 75, g: 0, b: 50 } },
    { name: "Rosa Avermelhado", value: { r: 75, g: 0, b: 25 } },

    { name: "Roxo", value: { r: 50, g: 0, b: 100 } },
    { name: "Roxo", value: { r: 50, g: 0, b: 75 } },
    { name: "Rosa Escuro", value: { r: 50, g: 0, b: 50 } },
    { name: "Rosa Escuro", value: { r: 50, g: 0, b: 25 } },

    { name: "Azul", value: { r: 25, g: 0, b: 100 } },
    { name: "Azul Arrocheado", value: { r: 25, g: 0, b: 75 } },
    { name: "Roxo Escuro", value: { r: 25, g: 0, b: 50 } },
    { name: "Roxo Escuro", value: { r: 25, g: 0, b: 25 } },

    // Tons g/b
    { name: "Azul Claro", value: { r: 0, g: 100, b: 100 } },
    { name: "Azul Claro", value: { r: 0, g: 100, b: 75 } },
    { name: "Verde Claro", value: { r: 0, g: 100, b: 50 } },
    { name: "Verde Claro", value: { r: 0, g: 100, b: 25 } },

    { name: "Azul Claro", value: { r: 0, g: 75, b: 100 } },
    { name: "Azul Claro", value: { r: 0, g: 75, b: 75 } },
    { name: "Azul Esverdeado", value: { r: 0, g: 75, b: 50 } },
    { name: "Verde", value: { r: 0, g: 75, b: 25 } },

    { name: "Azul", value: { r: 0, g: 50, b: 100 } },
    { name: "Azul", value: { r: 0, g: 50, b: 75 } },
    { name: "Azul", value: { r: 0, g: 50, b: 50 } },
    { name: "Verde Escuro", value: { r: 0, g: 50, b: 25 } },

    { name: "Azul", value: { r: 0, g: 25, b: 100 } },
    { name: "Azul", value: { r: 0, g: 25, b: 75 } },
    { name: "Azul", value: { r: 0, g: 25, b: 50 } },
    { name: "Azul Escuro", value: { r: 0, g: 25, b: 25 } },

    // r/g/b
    { name: "Amarelo Claro", value: { r: 100, g: 100, b: 50 } },
    { name: "Roxo Claro", value: { r: 100, g: 50, b: 100 } },
    { name: "Verde Claro", value: { r: 100, g: 50, b: 50 } },
    { name: "Azul Claro", value: { r: 50, g: 100, b: 100 } },
    { name: "Roxo Claro", value: { r: 50, g: 50, b: 100 } },
  ];

  let parsedInput = {
    r: (r / 255) * 100,
    g: (g / 255) * 100,
    b: (b / 255) * 100,
  };

  console.log(r, g, b);
  console.log(parsedInput);

  parsedInput = {
    r: roundColor(parsedInput.r),
    g: roundColor(parsedInput.g),
    b: roundColor(parsedInput.b),
  };
  console.log(parsedInput);

  parsedInput = excludeDoubleChannels(parsedInput);

  console.log(parsedInput);
  console.log("------");

  let closestColor = null;
  let minDifference = Infinity;

  for (const color of colorTable) {
    // const colorR = color.value.r / 100;
    // const colorG = color.value.g / 100;
    // const colorB = color.value.b / 100;

    const parsedColor = {
      r: roundColor(color.value.r),
      g: roundColor(color.value.g),
      b: roundColor(color.value.b),
    };

    const difference = Math.sqrt(
      Math.pow(parsedInput.r - parsedColor.r, 2) +
        Math.pow(parsedInput.g - parsedColor.g, 2) +
        Math.pow(parsedInput.b - parsedColor.b, 2)
    );

    if (difference < minDifference) {
      minDifference = difference;
      closestColor = color.name;
    }
  }

  return closestColor;
}

function roundColor(v) {
  if (v > 87.5) {
    return 1;
  }
  if (v < 87.5 && v > 62.5) {
    return 0.75;
  }
  if (v < 62.5 && v > 37.5) {
    return 0.5;
  }
  if (v < 37.5 && v > 13.5) {
    return 0.25;
  }
  if (v < 13.5) {
    return 0;
  }
}

function excludeDoubleChannels(values) {
  if (values.r == values.g && values.r != values.b) {
    if (values.r <= values.b) {
      return {
        r: 0,
        g: 0,
        b: values.b,
      };
    } else {
      return {
        r: values.r,
        g: values.g,
        b: 0,
      };
    }
  }
  if (values.r == values.b && values.r != values.g) {
    if (values.r <= values.g) {
      return {
        r: 0,
        g: values.g,
        b: 0,
      };
    } else {
      return {
        r: values.r,
        g: 0,
        b: values.b,
      };
    }
  }
  if (values.g == values.b && values.g != values.r) {
    if (values.g <= values.r) {
      return {
        r: values.r,
        g: 0,
        b: 0,
      };
    } else {
      return {
        r: 0,
        g: values.g,
        b: values.b,
      };
    }
  }

  return values;
}

const getColorName = {
  hsl1,
  hsl2,
  hsl3,
  rgb1,
  rgb2,
};
