const express = require('express');
const connectDB = require('./config/db');

const app = express();


//connect to database
connectDB();
//


//Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.use(express.json({extented: false}));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));