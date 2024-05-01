// getData function to API CALL TO FETCH the data ,but now we are printing console log
let counter = 0;
let getData = () => {
  console.log("data fetched successfully... ", counter++);
};

// debounce actual calculate time diffrence between two kEy stroke and if it is more than whatever delay provided 
// by us then only fetch api call functionality done , in short it provides delay between api calls 

let debounce = (fn, delay) => {
  let timer;
  return function (){
  let context = this ;
  let args = arguments;
  clearInterval(timer);

  timer = setTimeout(() => {
    fn.apply(context, args);
  }, delay);
}
};

let searchProducts = debounce(getData ,700)
