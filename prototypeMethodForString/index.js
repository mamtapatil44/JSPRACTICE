// 1st approach

function customMethod(){
    return "Hello " + this + "!. This is custome method"
}

// used prototype keyword to add custome function
String.prototype.customMethod = customMethod;

var myName = "Mamta";

console.log(myName.customMethod());


// 2nd Approach
function addCustomeMethod(){
    return "Hello " + this.toString() +  " !" ;
}

function addPropertyToCustomeMethod (targatePrototye){
    Object.defineProperty(targatePrototye,"myName",{
        value: addCustomeMethod,
        writable:true,
        configurable:true
    })
}

addPropertyToCustomeMethod(String.prototype)

const myString = "Mamta";
const result = myString.myName();
console.log("result=====> ",result)