/*eslint-disable*/
export default function distanciaEntreArestas(aresta1, aresta2) {
  const { ponto1, ponto2 } = aresta1;
  const { ponto1: ponto3, ponto2: ponto4 } = aresta2;
  const estaVertical = ponto1[0] === ponto2[0];
  const distancia = estaVertical
    ? ponto3[0] - ponto1[0]
    : ponto3[1] - ponto1[1];
  return Math.abs(distancia);
}
