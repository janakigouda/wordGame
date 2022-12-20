const express = require("express");
const connect = require("./src/config/db");
require("dotenv").config();
const cors = require("cors");
const usersRoute = require("./src/users/user.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/users", usersRoute);

app.get("/getRandomWord", (req, res) => {
  try {
    let length = Math.floor(Math.random() * 10) + 1;
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    res.send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/", (req, res) => res.send("hello"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await connect();
  console.log("server started on port 8080");
});
