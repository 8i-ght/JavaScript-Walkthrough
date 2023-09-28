// Synchronous Coding
console.groupCollapsed('Synchronous Coding');
function goToSchool() {
    console.log('THE BUS! Welp, I missed the bus!');
}
function code() {
    console.log('Coded all day successfully!');
}

// Usage:
goToSchool();
code();
// Code everything in a synchronous order where it more or less makes sense
console.groupEnd();

// Callbacks
console.groupCollapsed('Callbacks');
function growCorn() {
    setTimeout(() => {
        console.log('Corn Success');
    }, 3000);
}
function PickApple() {
    console.log('Apple Success');
}

// Usage:
growCorn();
PickApple();
// callbacks is a function that is to execute after another function has finished execution
console.groupEnd();

// Promises
console.groupCollapsed('Promises');
const someAPIRequest = {
    success: Math.random() < 0.5,
    data: 'Here is your data',
};
const getDetails = new Promise((resolve, reject) => {
    if (someAPIRequest.success) {
        resolve(someAPIRequest.data);
    } else {
        reject(new Error('API Request Failed. Try again.'));
    }
});

// Usage: 
getDetails
 .then((done) => {
    console.log('done:', done);
 })
 .catch((err) => {
    console.log('err:', err);
 });
console.groupEnd();

// CALLBACKS, PROMISES, ASYNC REVIEW

/*
The difference between a callback and a promise is that a callback is a function that is waiting to be executed a promise is a function / object that returns a output based on the result of the object

An example of a built-in callback would be the one above "setTimeout" which sets the time before the function executes

Your handle a error in a promise by using the method "catch" which will catch your error and return the output that you want when there's an error

*/