function assert(condicao, mensagem) {
 if (!condicao) {
 throw new Error(mensagem);
 }
}
function rodarTestes() {
 console.log("Iniciando testes...");

 // Testes para somar
 assert(somar(2, 3) === 5, "Erro: 2 + 3 deve ser 5");
 assert(somar(-1, 1) === 0, "Erro: -1 + 1 deve ser 0");

 // Testes para subtrair
 assert(subtrair(5, 3) === 2, "Erro: 5 - 3 deve ser 2");
 assert(subtrair(3, 5) === -2, "Erro: 3 - 5 deve ser -2");

 // Testes para multiplicar
 assert(multiplicar(2, 3) === 6, "Erro: 2 * 3 deve ser 6");
 assert(multiplicar(-2, 3) === -6, "Erro: -2 * 3 deve ser -6");

 // Testes para dividir
 assert(dividir(6, 2) === 3, "Erro: 6 / 2 deve ser 3");
try {
 dividir(5, 0);
 assert(false, "Erro: Divisão por zero deve lançar exceção");
 } catch (error) {
 assert(error.message === "Divisão por zero não permitida",
 "Erro: Mensagem de divisão por zero incorreta");
 }

 console.log("Todos os testes passaram!");
}
try {
 rodarTestes();
} catch (error) {
 console.error("Teste falhou:", error.message);
 process.exit(1);
}
try {
 dividir(5, 0);
 assert(false, "Erro: Divisão por zero deve lançar exceção");
 } catch (error) {
 assert(error.message === "Divisão por zero não permitida",
 "Erro: Mensagem de divisão por zero incorreta");
 }

 console.log("Todos os testes passaram!");
}
try {
 rodarTestes();
} catch (error) {
 console.error("Teste falhou:", error.message);
 process.exit(1);
}
