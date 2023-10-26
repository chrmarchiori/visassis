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

const getColorName = {
  hsl1,
  hsl2,
  hsl3,
};
