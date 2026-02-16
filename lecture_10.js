/**
 * Callback hell occurs when you have multiple nested callbacks, making code hard to read, debug, and maintain.
What is a Callback?
   A callback is a function passed as an argument to another function, to be executed later.

*/
//  Example of Callback Hell:

// Simulating async operations with setTimeout
console.log('Starting tasks...');

setTimeout(function() {
    console.log('Task 1 completed');
    
    setTimeout(function() {
        console.log('Task 2 completed');
        
        setTimeout(function() {
            console.log('Task 3 completed');
            
            setTimeout(function() {
                console.log('Task 4 completed');
                
                setTimeout(function() {
                    console.log('All tasks completed!');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

  // solve Promises
function task(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${name} completed`);
            resolve();
        }, delay);
    });
}

task('Task 1', 1000)
    .then(() => task('Task 2', 1000))
    .then(() => task('Task 3', 1000))
    .then(() => console.log('All tasks completed!'))
    .catch(error => console.error('Error:', error));

//  Async/Await (Best Modern Approach
async function executeTasks() {
    try {
        await task('Task 1', 1000);
        await task('Task 2', 1000);
        await task('Task 3', 1000);
        console.log('All tasks completed!');
    } catch (error) {
        console.error('Error:', error);
    }
}

executeTasks();

// ------------Promises  in  JavaScript----

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    let val = Math.floor(Math.random() * 10 + 1);
    console.log("Async one Completed ");
    if (val > 6) {
      console.log("The Value is greater than 6 ", val);
      resolve();
    }
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed one ");
});

//
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2 ");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async two resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(
    resolve({ username: "muhammad", email: "muhammad@njv.ed.pk" }),
    1000,
  );
});
promiseThree.then(function (user) {
  console.log(user);
});

let promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    // let error = true;
    let error=false
    if (!error) {
      resolve({ username: "muhammad", password: "123*" });
    }else{
        reject('ERROR SOMETHING WENT WRONG')
    }
  }, 1000);
});


let username= promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
console.log(username);

}).
catch(
    function(err){
        console.log(err);        

    })
.finally(()=>console.log('The promise is either resolved or rejected'))

console.log(promisefour);


const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        language: " javaScript",
        course: "paid",
      });
    } else {
      reject("ERROR JS WENT WRONG");
    }
  },1000);
})

async function consumePromise() {
   try {
    const response=  await promiseFive;
    console.log(response)
   } catch (error) {

    console.log(error);
    
    
   }
}

consumePromise()




async function getAllUsers(){
    try{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
     const data=  await response.json()
     console.log(data);
    }catch(error){
        console.log(error);
    }
}
getAllUsers()


 fetch('https://jsonplaceholder.typicode.com/users').then(
    (res)=>{
return res.json()
    }
 ).then(
    (res)=>{
        console.log(res)
    }
 )
 .catch(
    (err)=>{
    console.log('Error',err);
    
 }
 )


