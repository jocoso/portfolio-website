const { Schema, model } = require("mongoose");

const blogCommentSchema = new Schema({
    commenterName: {
        type: String,
        required: [true, "Commenter name is required"],
        trim: true,
    },
    content: {
        type: String,
        trim: true,
        maxlength: 500, // Limit content length to 500 characters
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const blogPostSchema = new Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            maxlength: 200, // Limit title length to 200 characters
        },
        content: {
            type: String,
            trim: true,
            maxlength: 5000, // Limit content length to 5000 characters
        },
        comments: {
            type: [blogCommentSchema],
            default: [], // Default to an empty array if no comments are provided
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Author is required"],
        },
        datePublished: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const Post = model("Post", blogPostSchema);

module.exports = Post;
