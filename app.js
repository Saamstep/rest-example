const express = require("express");
const app = express();
app.use(express.json());
const PORT = 8000;

const HELLO = {
  day: new Date().toGMTString(),
  pel: {
    color: "blue",
    website: "pacificesports.org",
  },
};

const USERS = require("./users.json");

app.get("/hello", (req, res, next) => {
  res.status(200).send(HELLO);
});

app.get("/users/all", (req, res, next) => {
  res.status(200).send(USERS);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
