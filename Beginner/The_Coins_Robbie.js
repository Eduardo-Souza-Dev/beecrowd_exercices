const readline = require('readline');
let arr = [];
let min = 2;
let max = 20;
let Nvalue;
let sumValue;
let arrN = [];

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

    for(i = 1; i < M; i++){
        Vi = Math.floor((Math.random() * (500 - 1 + 1)) + 1);
        M_arr.push(Vi)
    }
    if(arr.length > 0){
      number_Gloria = arr[0];
      Nvalue = arr[0];
      if(number_Gloria > 1 && number_Gloria < M){
        SearchForSalt(M_arr)
      }    

     arr = [];
    
    }

})


function SearchForSalt(arr){
  if(arr[Nvalue] != arr[undefined]){
    arrN.push(arr[Nvalue])
    arr = arr.slice(Nvalue)
    sumValue = arrN.reduce((acumulator, currentValue) => acumulator + currentValue,0) 
    return SearchForSalt(arr)
  }else{
    PrimeNumbers(sumValue) 
    sumValue = 0;
    arrN = [];
    return arr[undefined];
  }

 
}
function BadBoy(){
  console.log("Bad boy! I’ll hit you.")
}

function Aircraft(){
  console.log("You’re a coastal aircraft, Robbie, a large silver aircraft.")
}

function PrimeNumbers(value){
  if(value !== 2 && value % 2 === 0){ 
    return rl.close(BadBoy());
  }else{
    return rl.close(Aircraft());
  }
}

//RUNTIME: 0.639S, FILE SIZE:1.48KB, ANSWER: WRONG ANSWER (25%)