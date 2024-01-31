# Express JS Crash Course

## What is Express?
Express is a fast and minimalist web framework for Node.js.

Express is a "server-side" or "back-end" framework. It is not comparable to client-side frameworks like React, Angular & Vue. It can be used in combination with those frameworks to build full-stack applications.

## Why Use Express?
- Makes building web applications with Node.js MUCH easier
- Used for both server-rendered apps as well as API/Microservices
- Extremely light, fast, and free
- By far the most popular Node framework
- Great to use with client-side frameworks as it is all JavaScript

## What to Know First?
- JavaScript Fundamentals (Objects, Arrays, Conditionals, etc.)
- Basic Node.js and NPM

### It may help to learn these first:
- HTTP Status Codes
- JSON
- High Order Array Methods - forEach(), map, filter
- Arrow Functions

## Basic Server Syntax
```javascript
const express = require('express');
// Initialize express
const app = express();

// Create your endpoint/route handlers
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Listen on a port
app.listen(5000);
```

### Basic Route Handling
- Handling requests/routes is simple
- `app.get()`, `app.post()`, `app.put()`, `app.delete()`, etc.
- Access to params, query strings, URL parts, etc.
- Express has a router so we can store routes in separate files and export
- We can parse incoming data with the Body Parser

```javascript
app.get('/', function(req, res){
  // Fetch from database
  // Load pages
  // Return JSON
  // Full access to request & response
});
```

### Express Middelware
Middelware functions are functions that have access to the request and response object. Express has built in middelware but middelware also comes from 3rd party packages as well as custom middelware.

- Execute any code
- Makechanges to the request/response objects
- End response cycle
- Call next middelware in the stack











