function Cat() {
}
Cat.eat = function() {
  console.log('静态方法')
}
Cat.prototype.eat = function() {
 console.log('原型方法')
}
let cat = new Cat()
Cat.eat()  //静态方法
Cat.prototype.eat()  //原型方法,不用prototype就是打印静态方法
 
cat.eat()  //原型方法