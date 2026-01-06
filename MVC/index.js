var express = require("express");
var ejs = require("ejs");
var app = express();
var data = [
    { id: 1, code: "CSE401", sub: "DAA", imarks: 28, emarks: "S" },
    { id: 2, code: "CSE402", sub: "DBMS", imarks: 30, emarks: "A" },
    { id: 3, code: "CSE403", sub: "CN", imarks: 25, emarks: "B" },
    { id: 4, code: "CSE404", sub: "OS", imarks: 27, emarks: "A" },
    { id: 5, code: "CSE405", sub: "SE", imarks: 29, emarks: "S" }
];
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.get("/", (req, res) => {
    res.render("memo", { data });

})
app.listen(3000, () => {
    console.log("server started at port 3000");
});