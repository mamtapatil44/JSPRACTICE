function arrangeTheWords(string) {
    const words = string.split(" ");
    // sorting should be acsnding(i.e i,m,n)
    words.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log("words   ",words)
    return words.join(" ");

}


const result = arrangeTheWords("My name is Mamta and i am software develpoer");
console.log("result== ",result)