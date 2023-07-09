export default function verificaSeEstaPrimeiroQuadrante(pontos) {
  const pontosNoPrimeiroQuadrante = pontos.filter(
    (ponto) => ponto[0] >= 0 && ponto[1] >= 0
  );
  return pontosNoPrimeiroQuadrante.length === pontos.length;
}
