const readline = require('readline');
let arr = [];
let min = 2;
let max = 20;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (N) =>{
    arr.push(parseInt(N))
    let M = Math.floor((Math.random() * (max - min + 1)) + min);
    let Vi;
    let number_Gloria;
    let M_arr = [];
    console.log(M)

    for(i = 1; i < M; i++){
        Vi = Math.floor((Math.random() * (500 - 1 + 1)) + 1);
        M_arr.push(Vi)
    }
    if(arr.length > 0){
      number_Gloria = arr[0];
      if(number_Gloria > 1 && number_Gloria < M){
        The_Coins_Of_Robbie(number_Gloria,M_arr)
      }    

     arr = [];
    
    }

})

function The_Coins_Of_Robbie(N,arr){
console.log("Arr before the slice " + arr)
let arrJumpN = arr.slice(N)
console.log("Value off N " + N)
console.log(arrJumpN)
let value;

//Vou chamar uma função recursiva para retornar os valores do saldo


//Pegando númereos primos
if(value % 2 == 0 || value % 3 == 0){
  //Se for divisivel por dois ou por três significa que não é primo
}else{
  //Faz o calculo do valor e retorna as conversas exigidas no exercício
}


}