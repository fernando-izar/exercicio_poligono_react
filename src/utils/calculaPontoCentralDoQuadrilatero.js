export default function calculaPontoCentralDoQuadrilatero(pontos) {
  const xCentral =
    (pontos[0][0] + pontos[1][0] + pontos[2][0] + pontos[3][0]) / 4;
  const yCentral =
    (pontos[0][1] + pontos[1][1] + pontos[2][1] + pontos[3][1]) / 4;
  return [xCentral, yCentral];
}
