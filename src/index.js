const Koa = require('koa')
const Router = require('koa-router')
const promise = require('bluebird')
const config = require('../config')
const child_process = require('child_process')
const fs =promise.promisifyAll(require('fs'))
const app = new Koa()
const route = new Router()
const exec = promise.promisify(child_process.exec); 
const tools = require('./tools')



route.post('/',async ctx=>{
    const { id } = ctx.query
    const { list } = config
    const el = list.filter(el=>el.id==id)[0] 
    if(!el) return ctx.body='id undefiend'
    const { remoteUrl , savePath }  =el
    await tools.deleteFiles(savePath)
    await fs.mkdirAsync(savePath)
    console.log('begin git clone ' + remoteUrl+'......')
    await exec(`git clone ${remoteUrl}  ${savePath}` ,{windowsHide:true })
    console.log('--clone success--')
    ctx.body='update success'
})

 
route.post('*',async ctx=>{
    ctx.body='webhook Call failed, path error'
    console.log('webhook Call failed, path error')
})

app.use(route.routes())
app.listen(config.port||3456,config.host||tools.getIPAdress())
console.log(`Run At ${config.host||tools.getIPAdress()}:${config.port||3456}`)