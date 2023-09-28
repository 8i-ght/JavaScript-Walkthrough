// ASYNC FUNCTION ALWAYS RETURN A PROMISE
// Making an API Request Using Promises - Old Way (Promises)
function getAllCommentsUsingPromises() {
    const data = fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => console.log('PROMISES:', json))
        .catch((err) => console.log('err:', err));
}

getAllCommentsUsingPromises();
// Uses a function with a variable containing the syntax to request an API

// Making an API Request Using Promises - New Way (ASYNC/AWAIT)
async function getAllCommentsUsingAsyncAwait() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/comments');
        const res = await data.json();
        console.log('ASYNC/AWAIT:', res);
    } catch (err) {
        console.log('err:', err);
    }
}

getAllCommentsUsingAsyncAwait();

// ASYNC / AWAIT REVIEW
/*
The best / most common way to handle errors in async-await is by using try-catch blocks kinda how you handle errors in synchronous code

The async code will log the same result as the promise the async-await code just makes the code execute more synchronously 
*/