const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            maxlength: 200, // Limit title length to 200 characters
        },
        images: [
            {
                type: String,
                trim: true
            },
        ],
        content: {
            type: String,
            required: [true, "Content is required"],
            trim: true,
            maxlength: 5000, // Limit content length to 5000 characters
        },
        websiteLink: {
            type: String,
            trim: true,
            maxlength: 1000,
        },
        githubLink: {
            type: String,
            required: [true, "Github Link is required."],
            trim: true,
            maxlength: 1000,
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const Project = model("Project", projectSchema);

module.exports = Project;
