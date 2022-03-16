const Router = require('koa-router')
const router = new Router()

const utils = require('../../utils')

// 假设用户访问/manage即可查询数据库cms中user表的数据
router.get('/', async ctx=>{
    let data = await new Promise((resolve, reject)=>{
        //sql查询语句
        var sql = 'select * from user'
        utils.query(sql, (err, data)=>{
            if(err) reject(err)
            resolve(data)
        }) 
    })
    ctx.body = data
})


module.exports = router