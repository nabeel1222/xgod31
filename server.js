const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 PASTE HERE (this part)
mongoose.connect("mongodb://xgod:burhan31@ac-juij2kq-shard-00-00.s1m08ga.mongodb.net:27017,ac-juij2kq-shard-00-01.s1m08ga.mongodb.net:27017,ac-juij2kq-shard-00-02.s1m08ga.mongodb.net:27017/test?ssl=true&replicaSet=atlas-vqifyu-shard-0&authSource=admin")
  .then(() => console.log("DB Connected ✅"))
  .catch(err => console.log("DB Error ❌:", err));

const UserSchema = new mongoose.Schema({
  name: String
});

const User = mongoose.model("User", UserSchema);

app.post("/add", async (req, res) => {
  const newUser = new User({ name: req.body.name });
  await newUser.save();
  res.send("Saved");
});

app.get("/data", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running");
});