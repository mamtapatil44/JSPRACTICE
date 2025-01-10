function outer(){
    let count = 10;
    return{
        get:function(){
            return count;
        },
        set:function(value){
          count=value
        }
    }
}
var tempvalue = outer();
console.log("firstget " ,tempvalue.get())
tempvalue.set(100);
console.log("get 2d " ,tempvalue.get())