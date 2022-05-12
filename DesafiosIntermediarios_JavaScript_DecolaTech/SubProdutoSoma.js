//Dado um número inteiro n, retorne a diferença entre o produto de seus dígitos e a soma de seus dígitos

let lines = gets().split("");
 
function subtractProductAndSum(lines){     
let product = 1;
let sum = 0;
   
for(let digits of lines){
    product *= parseInt(digits);
       sum += parseInt(digits);
}
return(product - sum);
}
print(subtractProductAndSum(lines));