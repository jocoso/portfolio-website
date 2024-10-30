const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
            trim: true,
            maxlength: 100, // Limiting subject length
        },
        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true,
            maxlength: 1000, // Limiting message length
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt`
    }
);

const Message = model("Message", messageSchema);

module.exports = Message;
