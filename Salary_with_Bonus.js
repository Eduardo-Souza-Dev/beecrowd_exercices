const readline = require('readline');
let arr = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (value) =>{
    arr.push(parseFloat(value))
    let money;
    if(arr.length > 0){
      money = arr[0];
      if(money > 0 && money < 1000000.00){
        CalcNotas(money)
      }    

     arr = [];
    
    }

})

function CalcNotas(A){
  let rest;
  let result;
  let grades;
  let coins;
  parseFloat(A)

  if(A > 0 && A < 1000000.00){

    
    if(A >= 100.00){
      result = Math.floor((A / 100.00))
      rest = A % 100.00
      grades =+ result + " nota(s) de R$ 100.00"+ "\n"
    }else{
      grades =+ 0 + " nota(s) de R$ 100.00"+ "\n"
    }

    if(A >= 50 || rest >= 50){
      if(rest == undefined){
        rest = A
      }
      result = Math.floor((rest / 50.00))
      rest = rest % 50.00
      grades += result + " nota(s) de R$ 50.00"+ "\n"
    }
    else{
      grades += "0 nota(s) de R$ 50.00"+ "\n"
    }

    if(A >= 20 || rest >= 20){
      if(rest == undefined){
        rest = A
      }
        result = Math.floor((rest / 20.00))
        rest = rest % 20.00
        grades += result + " nota(s) de R$ 20.00"+ "\n"
    }
    else{
      grades += 0 + " nota(s) de R$ 20.00"+ "\n"
    }

    if(A >= 10 || rest >= 10){
      if(rest == undefined){
        rest = A
      }
      result = Math.floor((rest / 10.00))
      rest = rest % 10.00
      grades += result + " nota(s) de R$ 10.00"+ "\n"
    }else{
      grades += 0 + " nota(s) de R$ 10.00"+ "\n"
    }

    if(A >= 5 || rest >= 5){
      if(rest == undefined){
        rest = A
      }
      result = Math.floor((rest / 5.00))
      rest = rest % 5.00
      grades += result + " nota(s) de R$ 5.00"+ "\n"
    }else{
      grades += 0 + " nota(s) de R$ 5.00"+ "\n"
    }

    if(A >= 2 || rest >= 2){
      if(rest == undefined){
        rest = A
      }
     
      result = Math.floor((rest / 2.00))
      rest = rest % 2.00
      grades += result + " nota(s) de R$ 2.00"
    }else{
      grades += 0 + " nota(s) de R$ 2.00"
    }

  
  if(A < 2 || rest < 2){
    if(rest == undefined){
      rest = A
    }
   
    let fixedRest = rest.toFixed(2)
    if(fixedRest >= 1.00){
       if(rest == undefined){
        rest = fixedRest
      }
      result = Math.floor((fixedRest / 1.00))
      rest = (fixedRest % 1.00).toFixed(2)
      coins =+ result + " moeda(s) de R$ 1.00"+ "\n"
    }else{
      coins =+ 0 + " moeda(s) de R$ 1.00"+ "\n"
    }

    if(fixedRest >= 0.50 || rest >= 0.50){
      if(rest == undefined){
        rest = fixedRest
      }
      result = Math.floor((rest / 0.50))
      rest = (rest % 0.50).toFixed(2)
      coins += result + " moeda(s) de R$ 0.50"+ "\n"
    }else{
      coins += 0 + " moeda(s) de R$ 0.50"+ "\n"
    }

    if(fixedRest >= 0.25 || rest >= 0.25){
      if(rest == undefined){
        rest = fixedRest
      }
      result = Math.floor((rest / 0.25))
      rest = rest % 0.25
      coins += result + " moeda(s) de R$ 0.25"+ "\n"
    }else{
      coins += 0 + " moeda(s) de R$ 0.25"+ "\n"
    }

    if(fixedRest >= 0.10 || rest >= 0.10){
      if(rest == undefined){
        rest = fixedRest
      }
      result = Math.floor((rest / 0.10))
      rest = (rest % 0.10).toFixed(2)
      coins += result + " moeda(s) de R$ 0.10"+ "\n"
    }else{
      coins += 0 + " moeda(s) de R$ 0.10"+ "\n"
    }

    if(fixedRest >= 0.05 || rest >= 0.05){
      if(rest == undefined){
        rest = fixedRest
      }
      result = Math.floor((rest / 0.05))
      rest = (rest % 0.05).toFixed(2)
      coins += result + " moeda(s) de R$ 0.05"+ "\n"
    }else{
      coins += 0 + " moeda(s) de R$ 0.05"+ "\n"
    }

    if(fixedRest >= 0.04 || rest >= 0.04){
      if(rest == undefined){
        rest = fixedRest
      }
     
      result = Math.round((rest / 0.01))
      rest = rest % 0.01
      coins += result + " moeda(s) de R$ 0.01"
    }else{
      coins += 0 + " moeda(s) de R$ 0.01"
    }

   
    

  } 

}
  console.log("NOTAS:")
  console.log(grades)
  console.log("MOEDAS:")
  console.log(coins)

  
}