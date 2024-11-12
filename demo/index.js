function recurtionFactorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * recurtionFactorial((n - 1));
  }
}


const result = recurtionFactorial(5);
console.log("result==> ",result)



String.prototype.getInfo = function(){
    return{
        text :this.toString(),
        type: typeof this.toString(),
        UC :this.toString().toUpperCase(),
        array:this.toString().split('')
    }
}
let text ="mamta";
console.log("getInfo " ,text.getInfo())

// -----------------------------

function MyClass(name){
    this.name= name;

}
MyClass.prototype.printName = function(){
    return this.name
}

function MyClass2(name){
    this.name = name
}


MyClass2.prototype = Object.create(MyClass.prototype)
let myclass2 = new MyClass2("mamta");

console.log("myclass2 ",myclass2.printName());

class Human{
    getProntName(){
        
    }
}

class Human2 extends Human{

 constructor(){
    super()
 }


}

let human2 = new Human2();

console.log("human2 ",human2)