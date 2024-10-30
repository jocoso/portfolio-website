const { Schema, model } = require("mongoose");

const artSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        image: {
            type: String,
            required: [true, "Image URL is required"],
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
            maxlength: 500, // Limit the description to 500 characters for consistency
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
    }
);

const Art = model("Art", artSchema);

module.exports = Art;
