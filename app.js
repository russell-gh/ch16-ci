const express = require("express");
const app = express();
const cors = require("cors");
const exec = require("child_process").exec;

app.use(express.json());

app.post("/", (req, res) => {
  console.log("New request", req.body);

  exec("git pull", (e, std, steE) => {
    console.log(e, std, steE);
  });
});

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
