const express = require("express");
const app = express();

// DEBUG: check what require() returns
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");

console.log("loginRoute =", loginRoute);
console.log("signupRoute =", signupRoute);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.use("/Login", loginRoute);
app.use("/Signup", signupRoute);

app.get("/display/:username/:password", (req, res) => {
    res.send(
        `Username: ${req.params.username}<br>Password: ${req.params.password}`
    );
});

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
