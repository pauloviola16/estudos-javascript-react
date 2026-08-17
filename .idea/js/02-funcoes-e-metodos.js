// ============================================
// 2. FUNÇÕES, CONDICIONAIS, LOOPS E MÉTODOS DE ARRAY
// Rode com: node 02-funcoes-e-metodos.js
// ============================================

// --------------------------------------------
// Condicionais
// --------------------------------------------
function classificarValor(valorDiaria) {
    if (valorDiaria >= 200) {
        return "cara";
    } else if (valorDiaria >= 100) {
        return "média";
    } else {
        return "barata";
    }
}

console.log("--- Condicionais ---");
console.log(classificarValor(250)); // "cara"
console.log(classificarValor(150)); // "média"
console.log(classificarValor(80));  // "barata"


// --------------------------------------------
// Funções: declaração normal x arrow function
// --------------------------------------------
function calcularTotal(valorDiaria, dias) {
    return valorDiaria * dias;
}

const calcularTotalArrow = (valorDiaria, dias) => valorDiaria * dias;

console.log("\n--- Funções ---");
console.log("function:", calcularTotal(150.5, 5));
console.log("arrow:", calcularTotalArrow(150.5, 5));


// --------------------------------------------
// Loops
// --------------------------------------------
const lojas = [
    { nome: "Loja Centro", valorDiaria: 150.5 },
    { nome: "Loja Norte", valorDiaria: 200 },
    { nome: "Loja Sul", valorDiaria: 120 }
];

console.log("\n--- Loops ---");

for (let i = 0; i < lojas.length; i++) {
    console.log(`[for] ${lojas[i].nome}`);
}

for (const loja of lojas) {
    console.log(`[for...of] ${loja.nome}`);
}

lojas.forEach(loja => console.log(`[forEach] ${loja.nome}`));


// --------------------------------------------
// Métodos de array: filter, map, reduce
// (essenciais pra quando você for manipular listas vindas da API em React)
// --------------------------------------------
console.log("\n--- filter / map / reduce ---");

// filter: mantém só os itens que passam na condição
const lojasCaras = lojas.filter(loja => loja.valorDiaria > 130);
console.log("Lojas caras:", lojasCaras.map(l => l.nome));

// map: transforma cada item da lista em outra coisa
const nomes = lojas.map(loja => loja.nome);
console.log("Nomes:", nomes);

// reduce: "reduz" a lista inteira a um único valor (soma, no caso)
const somaTotal = lojas.reduce((acumulador, loja) => acumulador + loja.valorDiaria, 0);
console.log("Soma das diárias:", somaTotal);


// ============================================
// DESAFIO:
// Escreva uma função "lojaMaisCara(lojas)" que usa reduce
// pra retornar o NOME da loja com maior valorDiaria.
// ============================================