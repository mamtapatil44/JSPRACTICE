var jsondata = [
  { id: 1, name: "apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carret", category: "Vegetable" },
  { id: 4, name: "Orange", category: "Fruit" },
  { id: 5, name: "spinach", category: "Vegetable" },
  { id: 6, name: "fenugreek", category: "Vegetable" },
  { id: 7, name: "Berry", category: "Fruit" },
];
// 1st approach
function searchInput(input, data) {
  const searchedData = [];
  // using forloop
  for (var i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase().includes(input.toLowerCase())) {
      searchedData.push(data[i]);
    }
  }
  localStorage.setItem("searchResults", JSON.stringify(searchedData));
}
function searchInputData() {
  const input = document.getElementById("search-input").value.trim();
  searchInput(input, jsondata);
}

// 2nd  approach
function searchInput(input, data) {
  let searchedData = [];
  // using filter
  searchedData = data.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );
  console.log("searchedData ===", searchedData);
  localStorage.setItem("searchResults", JSON.stringify(searchedData));
}
