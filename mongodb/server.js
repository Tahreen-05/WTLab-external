const express = require("express");
const mongoose = require("mongoose");
const app = express();
//connecting to mongodb
mongoose
    .connect("mongodb://localhost:27017/mydatabase")
    .then(() => {
        console.log("Mongodb connected successfully");
    })
    .catch((err) => {
        console.error(err);
    })
//defining schema 
const UserSchema = new mongoose.Schema({
    name: String,
    id: Number,
});
//defining model
const User = mongoose.model("Users", UserSchema);
//retrieving all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});