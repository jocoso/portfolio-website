const { User, Project, Art, Post, Message } = require("../models");
const { GraphQLScalarType, Kind } = require("graphql");

// Reusable function for error handling
const handleError = (err, entity) => {
    console.error(`Error fetching ${entity}:`, err);
    throw new Error(`Failed to fetch ${entity}`);
};

const resolvers = {
    Date: new GraphQLScalarType({
        name: "Date",
        description: "Custom Date scalar type",
        parseValue(value) {
            return new Date(value);
        },
        serialize(value) {
            return value.getTime();
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(parseInt(ast.value, 10));
            }
            return null;
        },
    }),

    Query: {
        users: async () => {
            try {
                return await User.find();
            } catch (err) {
                handleError(err, "users");
            }
        },
        user: async (parent, { userId }) => {
            try {
                return await User.findOne({ _id: userId });
            } catch (err) {
                handleError(err, "user");
            }
        },

        projects: async () => {
            try {
                return await Project.find();
            } catch (err) {
                handleError(err, "projects");
            }
        },
        project: async (parent, { projectId }) => {
            try {
                return await Project.findOne({ _id: projectId });
            } catch (err) {
                handleError(err, "project");
            }
        },

        arts: async () => {
            try {
                return await Art.find();
            } catch (err) {
                handleError(err, "arts");
            }
        },
        art: async (parent, { artId }) => {
            try {
                return await Art.findOne({ _id: artId });
            } catch (err) {
                handleError(err, "art");
            }
        },

        posts: async () => {
            try {
                const posts = await Post.find().populate("author");
                return posts.filter((post) => post.author);
            } catch (err) {
                handleError(err, "posts");
            }
        },
        post: async (parent, { postId }) => {
            try {
                const post = await Post.findOne({ _id: postId }).populate("author");
                if (!post || !post.author) {
                    throw new Error("Post not found or author is missing");
                }
                return post;
            } catch (err) {
                handleError(err, "post");
            }
        },

        messages: async () => {
            try {
                return await Message.find();
            } catch (err) {
                handleError(err, "messages");
            }
        },
        message: async (parent, { messageId }) => {
            try {
                return await Message.findOne({ _id: messageId });
            } catch (err) {
                handleError(err, "message");
            }
        },
    },

    Mutation: {
        addUser: async (parent, { name, password }) => {
            try {
                return await User.create({ name, password });
            } catch (err) {
                handleError(err, "add user");
            }
        },
        removeUser: async (parent, { userId }) => {
            try {
                return await User.findOneAndDelete({ _id: userId });
            } catch (err) {
                handleError(err, "remove user");
            }
        },

        addProject: async (parent, { title, images, content }) => {
            try {
                return await Project.create({ title, images, content });
            } catch (err) {
                handleError(err, "add project");
            }
        },
        removeProject: async (parent, { projectId }) => {
            try {
                return await Project.findOneAndDelete({ _id: projectId });
            } catch (err) {
                handleError(err, "remove project");
            }
        },

        addArt: async (parent, { name, image, description }) => {
            try {
                return await Art.create({ name, image, description });
            } catch (err) {
                handleError(err, "add art");
            }
        },
        removeArt: async (parent, { artId }) => {
            try {
                return await Art.findOneAndDelete({ _id: artId });
            } catch (err) {
                handleError(err, "remove art");
            }
        },

        addPost: async (parent, { title, content, comments, author, datePublished }) => {
            try {
                return await Post.create({ title, content, comments, author, datePublished });
            } catch (err) {
                handleError(err, "add post");
            }
        },
        removePost: async (parent, { postId }) => {
            try {
                return await Post.findOneAndDelete({ _id: postId });
            } catch (err) {
                handleError(err, "remove post");
            }
        },

        addMessage: async (parent, { name, email, subject, message }) => {
            try {
                return await Message.create({ name, email, subject, message });
            } catch (err) {
                handleError(err, "add message");
            }
        },
        removeMessage: async (parent, { messageId }) => {
            try {
                return await Message.findOneAndDelete({ _id: messageId });
            } catch (err) {
                handleError(err, "remove message");
            }
        },
    },
};

module.exports = resolvers;
