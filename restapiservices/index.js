const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const students = require("./students.json");
const imarks = require("./imarks.json");
const emarks = require("./emarks.json");
app.get("/students", (req, res) => {
    res.json(students);
});
app.get("/imarks", (req, res) => {
    res.json(imarks);
});
app.get("/emarks", (req, res) => {
    res.json(emarks);
})
app.listen(8080, () => {
    console.log("Server is running on port 8080");
})