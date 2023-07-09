export default function moveParaPrimeiroQuadrante(pontos) {
  let xMenor = 0;
  let yMenor = 0;
  for (let i = 0; i < pontos.length; i++) {
    const [x, y] = pontos[i];
    if (x < xMenor) {
      xMenor = x;
    }
    if (y < yMenor) {
      yMenor = y;
    }
  }
  const pontosMovidos = pontos.map((ponto) => {
    ponto[0] = ponto[0] - xMenor;
    ponto[1] = ponto[1] - yMenor;
    return ponto;
  });
  return pontosMovidos;
}
