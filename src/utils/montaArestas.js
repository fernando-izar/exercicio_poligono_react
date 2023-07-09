export default function montaArestas(pontos) {
  const arestas = [];
  for (let i = 0; i < pontos.length; i++) {
    let indexPolFechado = (i + 1) % pontos.length;
    arestas.push({
      ponto1: pontos[i],
      ponto2: pontos[indexPolFechado],
    });
  }
  return arestas;
}
