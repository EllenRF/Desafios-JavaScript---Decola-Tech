//Um número natural é um inteiro não-negativo (0, 1, 2, 3, 4, 5,...). A sua tarefa neste problema é calcular a soma dos números naturais que estão presentes em um determinado intervalo [A, B] inclusive.
//Por exemplo, a soma dos números naturais no intervalo [2, 5] é 14 = (2+3+4+5).

const A = parseInt(gets());
const B = parseInt(gets());

const total = (B - A + 1) * (A + B) / 2;

console.log(total);