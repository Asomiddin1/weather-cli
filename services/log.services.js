import chalk from "chalk";

const printEror = (error)=>{
    console.log(chalk.red('Error') + ' ' + error);
}
const printSucces =(message)=>{
    console.log(chalk.green('Success') + ' ' + message);
}
const printHelp =(message)=>{
    console.log(`
${chalk.gray(`Help`)} 
-s [CITY] for saved city
-h for help 
-t [API_TOKEN] for saved token`);
}

export {
 printEror,
 printSucces,
 printHelp
}