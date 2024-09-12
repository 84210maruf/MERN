console.log("|||::::::::START HARE PART 03:::::::|||");

const promise1 = Promise.resolve(`Promise 1 resolve`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolve`)
    }, 3000);
});

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));

console.log(`Last line`);