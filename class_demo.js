class Runoob{
    constructor(name, url, year){
        this.name = name
        this.url = url
        this.year = year
    }
    age(){
        let date = new Date()
        console.log(date.getFullYear() - this.year); 
    }
    static name(){
        console.log('类 静态方法')
    }
}



let site = new Runoob('菜鸟教程','https://www.runoob.com',2018)
site.age()
Runoob.prototype.age()
Runoob.name()
