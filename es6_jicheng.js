class Person {
    constructor(name, age) {  /* 类的构造函数,实例化的时候执行，new的时候执行 */
        this.name = name;
        this.age = age;
    }
    // 实例化方法
    SetName(name) {
        this.name = name;
    }
    GetName() {
        console.log(this.name)
    }
    // 实例化方法
    GetInfo(){
        console.log(`姓名：${this.name}，年龄：${this.age}`)
    }
    // 静态方法，只能通过类名来调用，实例不可以调佣
    static work(){
        console.log('es6的静态方法')
    }
}

//Person.work()
//Person.instance = '这是一个实例' //算是类的静态方法

// 单例模式
class Db{
    static GetInstance(){
        if(!this.instance){
            this.instance = new Db()
        }
        return this.instance
    }
    constructor(){
        console.log('实例化出发构造函数')
        this.name = '1'       
    }
    GetName(){
        console.log(this.name)
    }
    connect(){
        console.log('connect db')
    }

    find(){
        console.log('find in db')
    }
}

let mydb1 = Db.GetInstance()
let mydb2 = Db.GetInstance()
mydb1.GetName()
mydb2.GetName()
//es6 继承
class Web extends Person {  //继承了Person ， extends  ， super(name, age)
    constructor(name, age, sex){
        super(name, age)
        this.sex = sex
    }

    print(){
        console.log(this.age)
    }
}

