console.log("start mamta");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("data== ", data);
  });

console.log("end");
// ----------------------------------------------------------
function mockSendMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = { message: "Data fetched successfully" };
      resolve(res);
    }, 1000);
  });
}

async function getData() {
  return new Promise((resolve, reject) => {
    const data = mockSendMessage();
    data
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function main() {
  try {
    const data = await getData();
    console.log("data in main======>   ", data);
  } catch (err) {
    console.log("err in catch====> ", err);
  }
}

console.log("Test")
main();
