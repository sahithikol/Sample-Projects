function merge(p1Result, p2Result) {
  if (typeof p1Result === Number && typeof p2Result === Number) {
    return p1Result + p2Result;
  }
}
function mergePromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then(([result1, result2]) => {
    if (typeof result1 === "number" && typeof result2 === "number") {
      return result1 + result2;
    }
  });
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, 2)
);
mergePromises(promise1, promise2)
  .then((val) => {
    console.log(val);
  })