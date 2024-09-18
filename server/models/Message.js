const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const Message = model("Message", messageSchema);

module.exports = Message;