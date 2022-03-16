
// 生产环境域名 http://xxx.com
// 开发环境域名 http://localhost
const host = "http://localhost";

const port = 9000;

// 创建mysql连接池
const mysql = require('mysql')
const pool = mysql.createPool({
    host:"localhost",
    port: 3306,
    database:'cms',
    user:'root',
    password:'123456'
})
// 数据库进行增删改查操作的基础
const query = (sql,callback)=>{
    pool.getConnction(function(err, connection){
        connection.query(sql, function(err, rows){
            callback(err, rows)
            connection.release()
        })
    })
}

module.exports = {
    host,
    port,
    query
}