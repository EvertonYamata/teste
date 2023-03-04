import PromptSync from "prompt-sync"
const prompt = PromptSync()

/*const nome = prompt("digite seu nome: ")

console.log(`ola ${nome}!`)

const temp = Number(prompt("digite a temperatura: "))

if(temp > 38){
    console.log("febre")
}
else if(temp < 26){
    console.log("foi de comes e bebes")
}

else{
    console.log("nao ta com febre")
}*/
/*
let salario = Number(prompt("digite seu salario: "))

const aumento = Number(prompt("digite a porcentagem de aumento: "))

let novosalario = salario*(1+(aumento/100))

console.log(novosalario)*/

const idade = Number(prompt("digite o seu ano de nascimento: "))
const ano = new Date()
let verificaco = ano.getFullYear() - idade

console.log(verificaco)

/*if(verificaco < 18){
    console.log("nao pode dirigir")
}
else{
    console.log("pode dirigir")
}*/







