const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("congratulation my first chat Server is running!");
});

module.exports = router;
