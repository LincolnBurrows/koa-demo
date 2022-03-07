function test1(){
    let a = 1;
    return function(){
        console.log(a)
    }
}

let result = test1()

result();