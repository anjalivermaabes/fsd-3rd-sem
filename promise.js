const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
}); 
