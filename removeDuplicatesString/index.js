function removeDuplicateFromString(input) {
  // remove duplicate and create unique
  const str = input.split("");
  const uniqueChar = {};
  const filteredArray = [];

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (!uniqueChar[char]) {
      uniqueChar[char] = true;
      filteredArray.push(char);
    }
  }
  let newString = filteredArray.join("");
  console.log("newString=====> ", newString);
  return newString;
}

removeDuplicateFromString("programming");

removeDuplicateFromString("Mamta");


function removeSpaceFromString(inputString){
    let result = inputString.replace(/\s+/g, '');
    console.log("input ",inputString)
    console.log("output ",result)
}
removeSpaceFromString("Hi This is Mamta");
removeSpaceFromString("This is js practice code");