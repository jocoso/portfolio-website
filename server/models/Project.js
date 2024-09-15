const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    images: [
        {
            type: String,
            trim: true,
        },
    ],
    content: {
        type: String,
        required: true,
    },
});

const Project = model("Project", projectSchema);

module.exports = Project;