// uma fabrica deseja calcular suaproducao diaria. Oprograma
//deve solicitar o nome do produto, a quantidade produzida
//por hora e a quantidade de horas trabalhadas. Ao final deve
//calcular e exibir a producao total.
const entrada = require('readline-sync')

const produto = entrada.question("Qual o nome do produto: ");
const qtdPorHora = entrada.questionInt("Quantas pecas sao produzida por hora? ");
const horas = entrada.questionInt("Quantas horas trabalhadas? ");

const prodDiaria = qtdPorHora * horas

console.log("==== RELATORIO DE PRODUCAO ===");
console.log(`produto: ${produto}`);
console.log(`Pecas produzidas por horas: ${qtdPorHora}`);
console.log(`Pecas produzidas no dia: ${prodDiaria}`);