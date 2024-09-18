const { Schema, model } = require("mongoose");

const blogCommentSchema = new Schema({
    commenterName: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        trim: true
    },
    comments: [blogCommentSchema],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    datePublished: {
        type: Date,
        default: Date.now,
    }
});

const Post = model("Post", blogPostSchema);

module.exports = Post;