function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let facValue = factorial(4);
console.log("facValue===>   ", facValue);

let student = {
  name: "Mamta",
  address: {
    street: "Wakad road",
    city: "Pune",
    contact: {
      personal: "890789876",
      office: "9999999999",
    },
  },
};

function printNestedOnject(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      console.log(key + ": {");
      printNestedOnject(obj[key]);
      console.log(" }");
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

printNestedOnject(student)
