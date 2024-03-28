const getArgs = require('./helpers/helper')

const startCli = ()=>{
    const args = getArgs(process.argv)
    console.log(args);
}

startCli()