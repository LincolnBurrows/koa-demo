const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

env = app.env    // 默认是 NODE_ENV 或 "development"
keys = app.keys  // 签名的 cookie 密钥数组
proxy = app.proxy // 当真正的代理头字段将被信任时
console.log('app.env' ,`${env}`)
console.log('app.keys', `${keys}`)
console.log('app.proxy', `${proxy}`)
app.proxy = true //const app = new Koa({proxy: true})

// koa router
app
  .use(router.routes())
  .use(router.allowedMethods());


router.get('/', (ctx,next) => {
        next()
        ctx.body = 'hello zhangsan'
  })


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
    console.log(ctx.request.method)
})

app.listen(3000)
console.log('server running on port 3000')
