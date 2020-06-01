const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());
const routers = require("./routes/index");
app.use("/api/v1", routers);

const port =  5000;
app.listen(port, () => console.log('App is listening on port ' + port));
// app.listen(port);