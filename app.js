//Require module
const express = require('express');
const mongoose = require('mongoose');
// Express Initialize
const app = express();
mongoose.connect('mongodb://localhost:27017/latesdb' ,
{
  useNewUrlParser:true, 
  useUnifiedTopology:true
}).then(() => {
  console.log("Successfully connected");
})
.catch((err) => {
  console.error("Connection error:", err);
});

const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes.js');
const userdbRouter= require('./routes/v2userRoutes.js')
const departmentRouter = require('./routes/departmentroutes.js');

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

const port = 7000;

app.use("/users", userRouter)
app.use("/v2/users", userdbRouter)
app.use("/department", departmentRouter)


app.listen(port,()=> {
  console.log('listen port ' + port);
})
