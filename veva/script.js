class A{
    field1 = "dsd";

    method1 = function(){
        console.log("hell");
    };
}


let list = [new A(),new A(),new A()]

list[0].method1()

console.log(list);