function debounce(fun,delay){
    var timer;

    return function(){
        var context = this;
        var args = arguments;
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fun.apply(context,args)
        },delay)
    }
}
function eventHandle(){
    console.log("event=======")
}

var handledDebounce = debounce(eventHandle,300);

// document.getElementById("inputId").addEventListener("input",handledDebounce)



// In this example, debounce fun takes two arguments : fun which you want to debounce and 2nd the delay which is time to function excution from last attempt,
// funtion returned by debounce called only once, which always waiting for delay.
// this will reduces successive calls and increase the performace efficiency for smooth user experience


// we can refactor above code with ES6 features also

function debounce(funt,delay){
    let timerId;
    return(...args)=>{
        clearInterval(timerId);
        timerId = setTimeout(()=>{
            funt.apply(...args)
        },delay)

    }
}

function eHandle(){
    console.log("event handled")
}
const eHandled = debounce(eHandle,400)
document.getElementById("inputId").addEventListener('input',eHandled)
