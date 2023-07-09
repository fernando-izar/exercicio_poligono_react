import montaArestas from "./montaArestas";
import arestasTemProjecao from "./arestasTemProjecao";
import calculaPontoCentralDoQuadrilatero from "./calculaPontoCentralDoQuadrilatero";
import pontoEstaDentroDoPoligono from "./pontoEstaDentroDoPoligono";
import distanciaEntreArestas from "./distanciaEntreArestas";

export default function calculaMenorDistancia(pontos) {
  const arestas = montaArestas(pontos);
  let menorDistancia = Infinity;
  for (let i = 0; i <= arestas.length; i++) {
    for (let j = i + 2; j < arestas.length; j = j + 2) {
      const temProjecao = arestasTemProjecao(arestas[i], arestas[j]);
      if (temProjecao) {
        const pontoCentral = calculaPontoCentralDoQuadrilatero([
          arestas[i].ponto1,
          arestas[i].ponto2,
          arestas[j].ponto1,
          arestas[j].ponto2,
        ]);

        if (pontoEstaDentroDoPoligono(pontoCentral, pontos)) {
          const distancia = distanciaEntreArestas(arestas[i], arestas[j]);
          if (distancia < menorDistancia) {
            menorDistancia = distancia;
          }
        }
      }
    }
  }
  return menorDistancia;
}
