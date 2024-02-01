const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// In order to initialize middleware  
//  app.use(logger);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API Routes
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5001;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
