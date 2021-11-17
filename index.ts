function desconto (valor: number, porcentagem:  string) { 
      return  valor % porcentagem;
} 
let valor = +prompt('Digite um valor:' + valor);
let porcentagem = +prompt('Digite um valor em porcentagem:' + porcentagem);
console.log("valor e a porcentagem com desconto:" + valor % porcentagem);


