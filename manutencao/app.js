// ☐ Solicitar nome da máquina, valor das peças, horas e meses desde a última manutenção.
// ☐ Chamar as funções pelo objeto importado e exibir relatório final completo.

const entrada = require('readline-sync');
const funcoes = require('./funcoesManuntemcao');

const maquina = entrada.question("Digiteo nome da maquina: ");
const valorPecas = entradaquestionFloat("Digite o valor das pecas R$: ");
const Horas = entrada.questionInt("Quantas horas trabalhadas: ");
const meses = entrada.questionInt("Quantos meses desde a Ultima manutencao: ")

const maoObra = funcoes.