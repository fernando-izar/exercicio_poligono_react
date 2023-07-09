export default function arestasTemProjecao(aresta1, aresta2) {
  const { ponto1, ponto2 } = aresta1;
  const { ponto1: ponto3, ponto2: ponto4 } = aresta2;
  const estaVertical = ponto1[0] === ponto2[0];
  const coord1 = estaVertical ? ponto1[1] : ponto1[0];
  const coord2 = estaVertical ? ponto2[1] : ponto2[0];
  const coord3 = estaVertical ? ponto3[1] : ponto3[0];
  const coord4 = estaVertical ? ponto4[1] : ponto4[0];

  return (coord1 <= coord4 && coord2 > coord4) ||
    (coord1 > coord4 && coord1 < coord3) ||
    (coord1 >= coord4 && coord2 < coord4) ||
    (coord1 < coord4 && coord1 > coord3)
    ? true
    : false;
}
