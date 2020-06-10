// 1. Create a npm project and install Express.js (Nodemon if you want)
// 2. Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console and resturn one response
// 3. Handle requests to "/" and "/users" such that each request only has one handler/middleware that does something with it (e.g. send dummy response)

// identifying using the express
const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('First Middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Second Middleware');
//   res.send('<p>Assignment solved (almost!)</p>');
// });

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>The Middleware that handles just /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The Middleware that handles just /</p>');
});

// Simple way to connect with server by stating this only 
app.listen(3000);
