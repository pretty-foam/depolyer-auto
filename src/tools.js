const promise = require('bluebird')
const fs = promise.promisifyAll(require('fs'))
const os = require('os')

/**tool*/
class Tools{
    /**Delete directories and files */
    async  deleteFiles(savePath){
        try{
            if(!fs.existsSync(savePath)){
                return ;       
            }
            const files =await fs.readdirAsync(savePath)
            await promise.map(files,async file=>{
                let currentPath = savePath+'/'+file
                let stat = await fs.statAsync(currentPath)
                if(stat.isDirectory()){
                await this.deleteFiles(currentPath)
                }else{
                    await fs.unlinkAsync(currentPath)
                }
            })
            await fs.rmdirAsync(savePath)
        }catch(err){
            console.log('-----Please try again-----')
            throw err
        }
    }
    /**Get local IP */
    getIPAdress(){
    const interfaces = os.networkInterfaces()
    for(let devName in interfaces){
        let iface = interfaces[devName]
        for(let i = 0; i < iface.length; i++){
            let alias = iface[i]
            if(alias.family === 'IPv4' && 
                alias.address !== '127.0.0.1' &&
                !alias.internal){
                    return alias.address
                }
        }
    }
    }
}

module.exports = new Tools()