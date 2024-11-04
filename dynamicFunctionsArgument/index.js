
const dynFunctions = (...args)=>{
    for(const arg of args){
        console.log("arg  " ,arg)
    }

}
dynFunctions(1,"Mamta",true,["a","b","c"],10,{name:"hi"})