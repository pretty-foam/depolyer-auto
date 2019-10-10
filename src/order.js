#! /usr/bin/env node 
const child_process = require('child_process')
const promise = require('bluebird')
const exec = promise.promisify(child_process.exec); 
const fs = require('fs')
let config = null
const list = process.argv
const command ={
    start:async ()=>{
        const config = require('../config.json')
        if(JSON.stringify(config)=='{}'){
               return console.log('Error: Please add configuration file')
        }
        await exec(`pm2 start "${__dirname}/index.js" --name="atd-deployer" `)
        console.log('atd already success running!')
        console.log('Stop Command:  atd stop')
        console.log('Restart Command:  atd restart')
        console.log('View the Process comamnd:  pm2 list')
    },
    stop:async()=>{
        const config = require('../config.json')
           if(JSON.stringify(config)=='{}'){
               return console.log('Error: Please add configuration file')
           }
        await exec('pm2 stop atd-deployer')
        console.log('atd already stop running')
    },
    restart:async()=>{
        const config = require('../config.json')
           if(JSON.stringify(config)=='{}'){
               return console.log('Error: Please add configuration file')
        }
        await exec('pm2 restart atd-deployer')
        console.log('atd restart success!')
    },
    add:async()=>{
        if(process.argv.length!==4)return command.error()
        let configPath = list[3]
        let currentPath = process.cwd()
        if(!configPath.includes(currentPath)){
            configPath = currentPath+'/'+configPath
        }
        fs.writeFileSync(__dirname+'/../config.json',JSON.stringify(require(configPath)))
        console.log('add config success')
    },
    error:()=>{
        console.log('Error:  Command Not Exsit')
    }
}
for(let i of list){
       if(command[i]) return  command[i]()
}
command.error()
