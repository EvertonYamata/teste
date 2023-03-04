import PromptSync from "prompt-sync"
const prompt = PromptSync()
import chalk from "chalk"

/*const nome = prompt("digite seu nome: ")

console.log(chalk.red(`ola ${nome}!`))

/*const temp = Number(prompt("digite a temperatura: "))

if(temp > 38){
    console.log("febre")
}
else if(temp < 26){
    console.log("foi de comes e bebes")
}

else{
    console.log("nao ta com febre")
}

let salario = Number(prompt("digite seu salario: "))

const aumento = Number(prompt("digite a porcentagem de aumento: "))

let novosalario = salario*(1+(aumento/100))

console.log(novosalario)

const idade = Number(prompt("digite o seu ano de nascimento: "))
const ano = new Date()
let verificaco = ano.getFullYear() - idade

console.log(verificaco)

if(verificaco < 18){
    console.log("nao pode dirigir")
}
else{
    console.log("pode dirigir")
}*/

const n1 = Number(prompt("digite o primeiro valor: "))
console.log(chalk.blue(n1))

const n2 = Number(prompt("digite o segundo valor: "))
console.log(chalk.magenta(n2))

const n3 = Number(prompt("digite o terceiro valor: "))
console.log(chalk.red(n3))

const n4 = Number(prompt("digite o quarto valor: "))
console.log(chalk.yellow(n4))

const n5 = Number(prompt("digite o ultimo valor: "))
console.log(chalk.gray(n5))

let media = (n1+n2+n3+n4+n5)/5

console.log(chalk.bgBlue(`a media é ${media}`))






