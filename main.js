// Solicita um número do usuário
let numero = parseFloat(prompt("Digite um número para encontrar a raiz quadrada:"));

try {
  if (isNaN(numero)) {
    throw new Error("Você deve fornecer um número válido.");
  }

  if (numero < 0) {
    throw new Error("Não é possível encontrar a raiz quadrada de um número negativo.");
  }

  let raizQuadrada = Math.sqrt(numero);
  alert("A raiz quadrada de " + numero + " é: " + raizQuadrada);
} catch (error) {
  alert("Ocorreu um erro: " + error.message);
} finally {
  alert("Execução concluída.");
}
