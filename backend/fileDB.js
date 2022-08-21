const fs = require("fs");
const {nanoid} = require("nanoid")

const fileName = "./messages.json";
let data = [];

module.exports = {
    init() {
        try{
            data = JSON.parse(fs.readFileSync(fileName));
        } catch (e) {
            data = [];
        }
    },
    getMessages() {
        return data;
    },
    addMessage(message) {
        message.datetime = new Date().toISOString();
        message.id = nanoid();
        data.push(message);
        this.save();
        return message
    },
    save() {
        fs.writeFileSync(fileName, JSON.stringify(data));
    }
};