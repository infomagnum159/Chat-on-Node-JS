const express = require("express");
const router = express.Router();
const db = require("../fileDB");


router.get("/", (req, res) => {
    const messages = db.getMessages();

    res.send(messages.slice(-30));

});

router.post("/", (req, res) => {
    if (!req.body.message || !req.body.author) {
        return res.status(400).send({"error": "Author and message must be present in the request"});
    }
    const message = db.addMessage(req.body);
    res.send(message);
});

module.exports = router;