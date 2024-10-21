let numA = 0
let numB = 1
let numC = 0
let fibonacci = ""
for (let contador = 1; contador <= 13; contador++){
    numC = numA+numB
    fibonacci += " "+numC
    numA = numB
    numB = numC
  
}
console.log(fibonacci);