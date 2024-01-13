const express = require('express');
const cors = require('cors');
require('./config/connect');

const app = express();
app.use(cors());
app.use(express.json());
const userRoute = require('./routes/user');
app.use('/user', userRoute);
const taskRoute = require('./routes/task');
app.use('/task', taskRoute);
app.use('/uploads',express.static('./uploads'))
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});