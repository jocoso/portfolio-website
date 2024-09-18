const { Schema, model } = require("mongoose");

const artSchema = new Schema({
    image: {
        type: String,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
    }

});

const Art = model("Art", artSchema);

module.exports = Art;