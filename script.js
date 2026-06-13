JavaScript
// Lista de dicas ambientais
const listaDeDicas = [
    "Feche a torneira enquanto escova os dentes.",
    "Separe o lixo reciclável do lixo orgânico.",
    "Apague as luzes ao sair de um cômodo.",
    "Aproveite a água da chuva para regar as plantas.",
    "Evite usar sacolas plásticas no mercado."
];

// Capturando os elementos do HTML
const botao = document.getElementById("botao-dica");
const mensagem = document.getElementById("mensagem");

// Criando a ação de clique no botão
botao.addEventListener("click", function() {
    // Sorteia um número aleatório com base na quantidade de dicas
    let numeroSorteado = Math.floor(Math.random() * listaDeDicas.length);
    
    // Troca o texto na tela
    mensagem.textContent = listaDeDicas[numeroSorteado];
});