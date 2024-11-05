const breeds = [
  {
    breed: "bulldog",
    names: ["cyde", "fido"],
  },
  {
    breed: "poddle",
    names: ["carl", "greg"],
  },
];

function getDogs(startingChar) {
 // flatMap() is used because it flattens the nested arrays (names) into a single array.
  const dogNames = breeds.flatMap((breed) =>
    breed.names.filter((name) => name.startsWith(startingChar))
  );
  return dogNames;
}

const result = getDogs("c");
console.log("result===> ",result)
