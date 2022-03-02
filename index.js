const Koa = require('koa')

const app = new Koa()
env = app.env
keys = app.keys
proxy = app.proxy
console.log('app.env' ,`${env}`)
console.log('app.keys', `${keys}`)
console.log('app.proxy', `${proxy}`)

//logger
app.use(async (ctx, next)=>{
    console.log(1)
    await next()
    console.log(5)
    const rt = ctx.response.get('X-Response-Time')
    console.log(`${ctx.method} ${ctx.url} - ${rt} `)
})

//X-Response-time
app.use(async (ctx, next)=>{
    const start = Date.now()
    console.log(2)
    await next()
    console.log(4)
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
})

//response
app.use(async ctx =>{
    console.log(3)
    ctx.body = 'hello world'
})

app.listen(3000)
console.log('server running on port 3000')
