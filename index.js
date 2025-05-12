const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("users server is running");
});

const users = [
  { id: 1, name: "shabana", email: "shabana@gmail.com" },
  { id: 2, name: "shabnoor", email: "shabnoor@gmail.com" },
  { id: 3, name: "sabila", email: "sabila@gmail.com" },
];
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("users post method");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;

  //   add data to the database
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`user server is running on port: ${port}`);
});
