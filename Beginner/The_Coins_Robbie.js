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
    let M = Math.floor((Math.random() * (max - min + 1)) + min)
    let Vi;
    let number_Gloria;
    let M_arr = [];
    console.log(M)

    for(i = 1; i < M_arr.length; i++){
        M_arr.push(i)
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
console.log("Aqui o valor do array " + arr)
}