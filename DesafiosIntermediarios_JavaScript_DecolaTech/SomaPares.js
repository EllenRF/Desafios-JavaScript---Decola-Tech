//O programa deve ler um valor inteiro D indefinidas vezes, ele só irá parar quando o valor de D for igual a 0.
//Para cada D lido, imprima a soma dos 5 pares consecutivos a partir de D, inclusive ele mesmo , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.

let x = parseInt(gets());
while (x !== 0)
{
    if  (x %  2 !== 0)
    {
        x = x + 1;
    }
    let soma =  x + (x+2) + (x+4) + (x+6) + (x+8);
    print(soma);
    x = parseInt(gets());
}
