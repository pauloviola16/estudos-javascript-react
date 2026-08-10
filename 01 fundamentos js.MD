# Fundamentos de JavaScript — comparando com Java

Anotações de estudo dos fundamentos de JavaScript, usando Java como ponto de referência (já que é minha stack principal).

---

## 1. Declaração de variáveis

Em Java, o tipo é fixo na declaração. Em JS, o tipo é dinâmico — a variável pode mudar de tipo em tempo de execução.

```java
// Java
int idade = 25;
String nome = "Paulo";
final double PI = 3.14; // constante
```

```javascript
// JavaScript
let idade = 25;
let nome = "Paulo";
const PI = 3.14; // constante (não pode ser reatribuída)

idade = "vinte e cinco"; // funciona! JS não reclama do tipo trocado
```

**Diferenças-chave:**
- `let` ≈ variável comum (pode reatribuir), `const` ≈ `final` do Java (não pode reatribuir).
- Evite `var` — é a forma antiga, com escopo de função em vez de bloco, e causa bugs. Use sempre `let`/`const`.
- Não existe declaração de tipo explícita (`int`, `String`, `double`) — o motor do JS infere o tipo sozinho.

---

## 2. Tipos primitivos

| Java | JavaScript |
|---|---|
| `int`, `long`, `double`, `float` | `number` (um único tipo pra tudo que é número) |
| `String` | `string` |
| `boolean` | `boolean` |
| `char` | não existe — tudo é `string`, mesmo de 1 caractere |
| `null` | `null` **e** `undefined` (dois "vazios" diferentes) |

```javascript
typeof 42;        // "number"
typeof "Paulo";    // "string"
typeof true;       // "boolean"
typeof undefined;  // "undefined" — variável declarada mas sem valor
typeof null;       // "object" (isso é uma pegadinha histórica do JS)
```

**Ponto de atenção:** em Java você nunca esquece se uma variável foi inicializada, porque o compilador barra. Em JS, uma variável declarada sem valor vira `undefined` silenciosamente — atenção redobrada aqui.

---

## 3. Operadores de comparação

Essa é a maior pegadinha pra quem vem de Java.

```java
// Java — não existe ambiguidade, tipos precisam bater
int a = 5;
String b = "5";
// a == b nem compila
```

```javascript
// JavaScript
5 == "5";   // true  → compara só o VALOR, converte tipo antes (coerção)
5 === "5";  // false → compara valor E tipo, sem conversão

null == undefined;  // true
null === undefined; // false
```

**Regra prática:** sempre usar `===` e `!==`, quase nunca `==`/`!=`. Em Java isso nem existe como escolha porque o compilador já força a tipagem — em JS é você quem precisa se disciplinar.

---

## 4. Estruturas condicionais

Sintaxe quase idêntica ao Java — aqui a transição é tranquila.

```java
// Java
if (idade >= 18) {
    System.out.println("Maior de idade");
} else if (idade >= 12) {
    System.out.println("Adolescente");
} else {
    System.out.println("Criança");
}
```

```javascript
// JavaScript
if (idade >= 18) {
    console.log("Maior de idade");
} else if (idade >= 12) {
    console.log("Adolescente");
} else {
    console.log("Criança");
}
```

Diferença real: JS trata como "falsy" (equivalente a `false`) valores como `0`, `""`, `null`, `undefined`, `NaN`. Em Java, um `if` só aceita `boolean` — não existe essa conversão implícita.

```javascript
if (0) { ... }        // nunca entra, 0 é falsy
if ("") { ... }        // nunca entra, string vazia é falsy
if ("0") { ... }        // ENTRA — string "0" é truthy (não está vazia)
```

---

## 5. Loops

```java
// Java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

List<String> lojas = List.of("Loja A", "Loja B");
for (String loja : lojas) {
    System.out.println(loja);
}
```

```javascript
// JavaScript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const lojas = ["Loja A", "Loja B"];
for (const loja of lojas) {
    console.log(loja);
}

// forma bem comum em JS, equivalente a um "for each" funcional
lojas.forEach(loja => console.log(loja));
```

`for...of` em JS é o equivalente direto ao `for-each` do Java. O `forEach` com arrow function é mais idiomático em JS — vale se acostumar com esse estilo, porque aparece bastante em código React depois.

---

## 6. Funções

```java
// Java — método sempre dentro de uma classe
public int somar(int a, int b) {
    return a + b;
}
```

```javascript
// JavaScript — função "solta", não precisa de classe
function somar(a, b) {
    return a + b;
}

// forma moderna (arrow function) — a mais usada hoje em dia
const somar = (a, b) => a + b;

// com mais de uma linha, precisa de chaves e return explícito
const somarELogar = (a, b) => {
    const resultado = a + b;
    console.log(resultado);
    return resultado;
};
```

**Diferenças-chave:**
- Java exige que toda função viva dentro de uma classe. JS não — função é um "cidadão de primeira classe", pode existir solta, ser passada como argumento, ser retornada por outra função.
- Não existe tipagem de parâmetro nem de retorno (a não ser que você use TypeScript, que é outra etapa).
- Arrow function (`=>`) é a sintaxe mais comum no ecossistema React — vale já ir se acostumando com essa forma em vez da `function` tradicional.

---

## 7. Template literals (strings)

```java
// Java — concatenação ou String.format
String mensagem = "Olá, " + nome + "! Você tem " + idade + " anos.";
String mensagem2 = String.format("Olá, %s! Você tem %d anos.", nome, idade);
```

```javascript
// JavaScript — template literal com crase (`) e ${}
const mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;
```

Mais legível que concatenação com `+`, e sem precisar de método tipo `String.format`.

---

## Resumo rápido

| Conceito | Java | JavaScript |
|---|---|---|
| Tipagem | Estática, forte | Dinâmica |
| Onde vive uma função | Sempre em classe | Pode ser solta |
| Comparação de igualdade | `==` compara valor (tipos já batem) | `===` (correto) vs `==` (evitar) |
| Constante | `final` | `const` |
| Estrutura de repetição | `for`, `for-each` | `for`, `for...of`, `forEach` |
| Concatenação de string | `+` ou `String.format` | Template literal `` `${}` `` |

Próximo passo: assincronismo (`Promise`, `async/await`) e `fetch`, pra já ir preparando terreno pra consumir a API do motoboy-management-system em React.
