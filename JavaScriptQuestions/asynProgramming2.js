const promise1 = () => {
  return new Promise((resolve, reject) => reject(4));
};
const promise2 = () => {
  return new Promise((resolve, reject) => reject(2));
};
const promise3 = () => {
  return new Promise((resolve, reject) => resolve(2));
};

Promise.all([promise1(), promise2(), promise3()]).then(
  (data) => {
    console.log(data, "promise all");
  },
  (error) => console.log(error, "error promise all")
);

async function runNTasksConcurrently(tasks) {
  // Create an array of promises by mapping each task function
  const promises = tasks.map((task) => task());

  // Await all promises to complete
  try{
    const results = await Promise.all(promises);
  // Map results to include status and value
  return results.map((value, index) => ({
    status: "fulfilled",
    value: value,
  }));
  }catch(error){
       console.log(error, "promise all custom")
  }
  
}
console.log("custom concurrent",runNTasksConcurrently([promise1,promise2,promise3]));