function test1(){
    let a = 1;
    return function(){
        a = 3
        console.log(a)
    }
}

let result = test1()
a = 2
result();