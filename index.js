const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views');

const app = new Koa()
const router = new Router()


env = app.env    // 默认是 NODE_ENV 或 "development"
keys = app.keys  // 签名的 cookie 密钥数组
proxy = app.proxy // 当真正的代理头字段将被信任时
console.log('app.env' ,`${env}`)
console.log('app.keys', `${keys}`)
console.log('app.proxy', `${proxy}`)
app.proxy = true //const app = new Koa({proxy: true})
// koa views  模板引擎配置需要在路由前面
//app.use(views('view',{map:{html:'ejs'}}))  //这种配置方式模板的后缀名是.html
app.use(views('view', { extension: 'ejs' })) //这种配置方式模板的后缀是.ejs

// koa router
app
  .use(router.routes())
  .use(router.allowedMethods());

//
router.get('/', async (ctx, next) => {
        console.log(new Date())
        await ctx.render('shouye',{title: 'hello dydxacfun'})
  })


router.get('/news', async(ctx, next)=>{
    console.log(new Date())
    let arr = ['1', '2','3','4']
    await ctx.render('news',{arr: arr})
})  

app.listen(3000)
console.log('server running on port 3000')
