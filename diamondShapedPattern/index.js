// 1st approch using loops

function createDaimondParrtern(number) {
  console.log("number  ", number);
  let result = "";
  // for upper part
  for (let i = 1; i < number; i++) {
    // for spaces
    for (let j = 1; j < number - i; j++) {
      result += " ";
    }
    // asc order
    for (let j = 1; j <= i; j++) {
      result += ` ${j}`;
    }
    // dsc order
    for (let j = i - 1; j >= i; j--) {
      console.log("3rd loop");
      result += ` ${j}`;
    }

    result += "\n";
  }

  //   lower part

  for (let i = number - 2; i >= 1; i--) {
    for (let j = 1; j < number - i; j++) {
      result += " ";
    }

    for (let j = 1; j <= i; j++) {
      result += ` ${j}`;
    }

    for (let j = i - 1; j >= i; j--) {
      result += ` ${j}`;
    }

    result += "\n";
  }

  console.log(result);
}

createDaimondParrtern(4);

function createDiamondStars(n) {
  if (n % 2 === 0) {
    console.log("please enter odd number");
    return;
  }

  let mid = Math.floor(n / 2);
  // upper part
  for (let i = 0; i <= mid; i++) {
    let spaces = mid - i;
    let stars = 2 * i + 1;
    console.log(" ".repeat(spaces) + "*".repeat(stars));
  }
  //  lower part
  for (let i = mid - 1; i >= 0; i--) {
    let spaces = mid - i;
    let stars = 2 * i + 1;
    console.log(" ".repeat(spaces) + "*".repeat(stars));
  }
}
createDiamondStars(7);
