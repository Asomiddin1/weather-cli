import getArgs from './helpers/helper.js'
import {printEror , printHelp, printSucces} from './services/log.services.js'


const startCli = ()=>{
    const args = getArgs(process.argv)
    if(args.s){
        
    }else if (args.h){
        printHelp()
    }else if(args.t){
        //token
    }
    
    console.log(args);
}

startCli()