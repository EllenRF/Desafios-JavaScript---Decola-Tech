//Dado um inteiro num, retorne o número de etapas para reduzi-lo a zero .
//Em uma etapa, se o número atual for par, você deve dividi-lo por 2, caso contrário, você deve subtrair 1 dele.

let num = parseInt(gets());
    var count = 0;
    while(num > 0){
        (num % 2  == 0) ? num= num / 2 : num= num - 1;
        count++;
    }
print(count);