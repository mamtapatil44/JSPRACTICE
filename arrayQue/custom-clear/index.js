if(!Array.prototype.clear){
    Array.prototype.clear = function(){
        this.splice(0,this.length)
    }
}

let list =[1,2,3,4];
list.clear();
console.log("list ",list)

if(!Array.prototype.remove){
    Array.prototype.remove = function(){
        this.splice(0,this.length)
    }
}
let arr = ["a","b" ,"c","d"]
arr.remove()
console.log("arr ",arr)