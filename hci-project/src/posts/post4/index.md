---
slug: promises-in-js
title: Promises in JavaScript
date: 2020-11-18
author: SA
image: './images/promises.jpeg'
published: true
---

## Promises in JavaScript

![promises-in-js](./images/promises.jpeg)

### What is a Promise?

A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked. If you need lazy, check out observables or tasks.
Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

### Example

#### Promise:
```
let promise = new Promise((resolve, reject) => {
    const x = 2;
    const y = 2
    if(x === y) { 
        resolve(); 
    } else { 
        reject(); 
    } 
})
```

#### Usage:
```
promise
    .then(() => console.log('Success'))
    .catch(() => console.log('Error')) 
```

### Check out also
* [Eric Elliot: Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
* [neerajnegi174: JavaScript Promises](https://www.geeksforgeeks.org/javascript-promises/)