// n= height of pyramid
function createPyramid(n) {
  for (let i = 0; i <= n; i++) {
    let stars = 2 * i + 1;
    let spaces = n - i;
    console.log(" ".repeat(spaces) + "*".repeat(stars));
  }
}

createPyramid(5)
