const Router = require('koa-router')
const manage = require('./manage')
const web = require('./web')
const errorPage = require('./errorPage')

const router = new Router()

router.get('/', async ctx=>{
    await ctx.render('shouye',{title: 'hello dydxacfun'})
})

router.use('/manage', manage.routes(), manage.allowedMethods())
router.use('/web', web.routes(), web.allowedMethods())
router.use('/404', errorPage.routes(), errorPage.allowedMethods())


module.exports = router