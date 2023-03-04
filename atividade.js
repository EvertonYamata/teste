import PromptSync from "prompt-sync"
const prompt = PromptSync()
import chalk from "chalk"



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






