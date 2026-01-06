const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("SIGNUP PAGE");
});
module.exports = router;
