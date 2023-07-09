export default function pontoEstaDentroDoPoligono(ponto, poligono) {
  let intersecoes = 0;
  let x = ponto[0];
  let y = ponto[1];
  const n = poligono.length;

  for (let i = 0; i < n - 1; i++) {
    let aresta = {
      ponto1: {
        x: poligono[i][0],
        y: poligono[i][1],
      },
      ponto2: {
        x: poligono[i + 1][0],
        y: poligono[i + 1][1],
      },
    };
    let x1 = aresta.ponto1.x;
    let x2 = aresta.ponto2.x;
    let y1 = aresta.ponto1.y;
    let y2 = aresta.ponto2.y;

    if (y < y1 != y < y2 && x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1) {
      intersecoes++;
    }
  }
  return intersecoes % 2 == 1;
}
