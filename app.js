#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("\t\t **************************** "));
console.log(chalk.yellowBright.bold.italic("\t\t ***********TABLE************ "));
console.log(chalk.yellowBright("\t\t **************************** "));
const table = await inquirer.prompt({
    name: "tableno",
    type: "number",
    message: chalk.yellowBright.bold("\n Enter your table number:")
});
for (let i = 1; i <= 10; i++) {
    console.log(chalk.greenBright("\n\t\t\t" + table.tableno + "  X  " + i + "  =  " + (i * table.tableno)));
    //console.log(); //If u have to keep gap between each line of the table so use this empty console
}
console.log(chalk.yellowBright("\n\t\t **************************** "));
console.log(chalk.yellowBright.bold.italic("\t\t ******THANKS FOR USING!***** "));
console.log(chalk.yellowBright("\t\t **************************** "));
