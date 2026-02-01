require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

const port = process.env.PORT || 3000;

app.use('/api/auth', authRoute);

app.listen(port, () =>
     console.log(`Server running on port ${port}`)
);
