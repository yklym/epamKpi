const express = require("express");
const cors = require("cors");
const path = require("path");
const {port} = require("./config");
// const

const app = express();
const routers = require("./routes/index");
app.use(cors());
app.use("/api/v1", routers);

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log("App is listening on port " + port));
