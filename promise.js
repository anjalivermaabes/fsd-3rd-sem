Promise((resolve, reject) => {
    const promise1 = new Promise((resolve, reject) => {
        success=false;
        if(success){
            resolve({
                id:2503203100029,
                username: "Archita Tripathi",
            });
        }   else{   
            reject(new Error("data not fetched"));
        }
    });
    // promise2
    // .then((response) => {
    //     console.log(response);
    // })
    // .catch((error) => {
    //     console.log(error.message);
    // });
    const promise2 = new Promise((resolve, reject) => {
        success=false;
        if(success){
            resolve({
                id:250320310,
                username: "Adhya Singh",
            });
        }   else{   
            reject(new Error("data is not available"));
        }
    });
    
    // promise2
    // .then((response) => {
    //     console.log(response);
    // })
    // .catch((error) => {
    //     console.log(error.message);
    // });
    Promise.all([promise1, promise2])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error.message);
    });
})
Promise.race([promise1, promise2])
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error.message);
});
Promise.allSettled([promise1, promise2])
.then((response) => {
    console.log(response);      
})
.catch((error) => {
    console.log(error.message);
})
promise1
.then((response) => {
    console.log(response);
})
.then((response2) => {
    console.log("Promise resolved");
} )
.catch((error) => {
    console.log(error.message);
}   )             
function fetchuserDData() {
    return new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve({       
                id: 101,
                username: "Diya"
            });
        } else {
            reject(new Error("User data not fetched"));
        } 
    });
}
