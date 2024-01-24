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

function The_Coins_Of_Robbie(N,arr_coin){
console.log("Arr before the slice " + arr_coin)
let arrJumpN = arr_coin.slice(N)
// console.log("Value off N " + N)
// console.log(arrJumpN)
let arrN = [];

//Vou chamar uma função recursiva para retornar os valores do saldo


function SearchForSalt(arr){
  let arrPure = arr
for(let keys of arr){
  if(arr[keys] != undefined){
    let arrSaltValue = arr.slice(N);
    arrN.push(arrSaltValue)
    // arr.shift();
    SearchForSalt(arrSaltValue)
  }else{
    return null
  }
  // console.log("Valor de values " + values)
}

console.log(arrN)

}

SearchForSalt(arr_coin)

console.log("Valor do array de arrN " + arrN)

// //Pegando númereos primos
// if(value % 2 == 0 || value % 3 == 0){
//   //Se for divisivel por dois ou por três significa que não é primo
// }else{
//   //Faz o calculo do valor e retorna as conversas exigidas no exercício
// }


}

//AINDA NÃO FOI FEITO O TESTE