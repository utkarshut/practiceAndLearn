const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 6000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 5000);
});
// Usage example
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1"), 1000);
});

Promise.any([promise1, promise2, promise3])
  .then((data) => {
    console.log(data, "promise any"); // This will log 1, since promise1 resolves first
  })
  .catch((error) => {
    console.error(error, "promise any");
  });

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let countError = 0;
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(
        (data) => resolve(data),
        (error) => {
          errors[i] = error;
          countError++;
          if (countError == promises.length) {
            reject(new AggregateError(errors, "All rejected"));
          }
        }
      );
    });
  });
}
promiseAny([promise1, promise2, promise3])
  .then((data) => {
    console.log(data, "Promise Any custom"); // This will log 1, since promise1 resolves first
  })
  .catch((error) => {
    console.error(error);
  });

Promise.allSettled([promise1, promise2, promise3]).then(
  (data) => {
    console.log(data, "ALL SETTLED");
  },
  (error) => console.log(error)
);

function promiseAllSettle(promises) {
  return new Promise((resolve, reject) => {
    const res = [];
    let countRes = 0;
    promises.forEach((eachPromise, index) => {
      Promise.resolve(eachPromise)
        .then(
          (data) => {
            res[index] = { status: "fulfilled", value: data };
          },
          (error) => {
            res[index] = { status: "rejected", reason: error };
          }
        )
        .finally(() => {
          countRes++;
          if (countRes == promises.length) {
            resolve(res);
          }
        });
    });
  });
}
promiseAllSettle([promise1, promise2, promise3]).then(
  (data) => {
    console.log(data, "Custom ALL SETTLED");
  },
  (error) => console.log(error)
);

async function runNTaskInSeries(promises) {
  let res = [];
  for (item of promises) {
    try {
      const data = await item;
      res.push(data);
    } catch (error) {
      res.push(error);
    }
  }
  console.log(res," all task in series completed ")
  return res;
}
runNTaskInSeries([promise1, promise2, promise3]);

Promise.race([promise1,promise2,promise3]).then(data=>{
    console.log(data,"race promise")
})
