// 1. VARIÁVEIS, CONSTANTES E TIPOS

// let x const

let idade = 25;
const nome = "Paulo"; // const não pode ser reatribuído

idade = 26; // funciona, let permite reatribuir
console.log("Idade:", idade);
console.log("Nome:", nome);

// nome = "Outro"; // isso daria erro: Assignment to constant variable.

// --------------------------------------------
// Tipos primitivos
// --------------------------------------------
const valorDiaria = 150.5;   // number (não existe int/double separado como em Java)
const nomeLoja = "Loja Centro"; // string
const ativa = true;           // boolean
let observacao;                // undefined (declarada, mas sem valor ainda)
const semDono = null;          // null (vazio "intencional")

console.log("\n--- Tipos ---");
console.log(typeof valorDiaria); // "number"
console.log(typeof nomeLoja);    // "string"
console.log(typeof ativa);       // "boolean"
console.log(typeof observacao);  // "undefined"
console.log(typeof semDono);     // "object" (pegadinha histórica do JS)


// --------------------------------------------
// Tipagem dinâmica (diferente de Java)
// --------------------------------------------
let valor = 10;
console.log("\n--- Tipagem dinâmica ---");
console.log(typeof valor); // "number"

valor = "dez";
console.log(typeof valor); // "number" virou "string" — JS não reclama


// --------------------------------------------
// Comparação: == vs ===
// --------------------------------------------
console.log("\n--- Comparação ---");
console.log(5 == "5");   // true  → só compara valor, converte tipo (evitar)
console.log(5 === "5");  // false → compara valor E tipo (usar sempre esse)


// --------------------------------------------
// Template literals (concatenar strings)
// --------------------------------------------
const valorFormatado = `A ${nomeLoja} custa R$ ${valorDiaria} por dia.`;
console.log("\n--- Template literal ---");
console.log(valorFormatado);


