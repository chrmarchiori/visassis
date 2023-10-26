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

const getColorName = {
  hsl1,
};

// const colorIntervals = [
//     { name: "Vermelho", interval: [0, 15] },
//     { name: "Vermelho-Laranja", interval: [15, 30] },
//     { name: "Laranja", interval: [30, 45] },
//     { name: "Laranja-Amarelo", interval: [45, 60] },
//     { name: "Amarelo", interval: [60, 75] },
//     { name: "Amarelo-Verde", interval: [75, 90] },
//     { name: "Verde", interval: [90, 105] },
//     { name: "Verde-Ciano", interval: [105, 120] },
//     { name: "Ciano", interval: [120, 135] },
//     { name: "Ciano-Azul", interval: [135, 150] },
//     { name: "Azul", interval: [150, 165] },
//     { name: "Azul-Roxo", interval: [165, 180] },
//     { name: "Roxo", interval: [180, 195] },
//     { name: "Roxo-Vermelho", interval: [195, 210] },
//     { name: "Vermelho", interval: [210, 225] },
//   ];
