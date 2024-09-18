const { User, Project, Art, Post, Message } = require("../models");
const { GraphQLScalarType, Kind } = require("graphql");

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
                console.error("Error fetching users:", err);
                throw new Error("Failed to fetch users");
            }
        },
        user: async (parent, { userId }) => {
            try {
                return await User.findOne({ _id: userId });
            } catch (err) {
                console.error("Error fetching user:", err);
                throw new Error("Failed to fetch user");
            }
        },

        projects: async () => {
            try {
                return await Project.find();
            } catch (err) {
                console.error("Error fetching projects:", err);
                throw new Error("Failed to fetch projects");
            }
        },
        project: async (parent, { projectId }) => {
            try {
                return await Project.findOne({ _id: projectId });
            } catch (err) {
                console.error("Error fetching project:", err);
                throw new Error("Failed to fetch project");
            }
        },

        arts: async () => {
            try {
                return await Art.find();
            } catch (err) {
                console.error("Error fetching art:", err);
                throw new Error("Failed to fetch art pieces");
            }
        },
        art: async (parent, { artId }) => {
            try {
                return await Art.findOne({ _id: artId });
            } catch (err) {
                console.error("Error fetching art:", err);
                throw new Error("Failed to fetch art piece");
            }
        },

        posts: async () => {
            try {
                const posts = await Post.find().populate("author");
                
                console.log("Posts fetched", posts)

                return posts.filter(
                    (post) => post.author !== null && post.author !== undefined
                );
            } catch (err) {
                console.error("Error fetching posts:", err);
                throw new Error("Failed to fetch posts");
            }
        },
        post: async (parent, { postId }) => {
            try {
                const post = await Post.findOne({ _id: postId }).populate("author")
                
                console.log(post);
                
                if(!post || !post.author)
                    throw new Error("Post not found or author is missing");
                return post;
            } catch (err) {
                console.error("Error fetching post:", err);
                throw new Error("Failed to fetch post");
            }
        },

        messages: async () => {
            try {
                return await Message.find();
            } catch (err) {
                console.error("Error fetching messages:", err);
                throw new Error("Failed to fetch messages");
            }
        },
        message: async (parent, { postId }) => {
            try {
                return await Message.findOne({ _id: messageId });
            } catch (err) {
                console.error("Error fetching message:", err);
                throw new Error("Failed to fetch message");
            }
        },
    },

    Mutation: {
        addUser: async (parent, { name, password }) => {
            try {
                return await User.create({ name, password });
            } catch (err) {
                console.error("Error adding user:", err);
                throw new Error("Failed to add user");
            }
        },
        removeUser: async (parent, { userId }) => {
            try {
                return await User.findOneAndDelete({ _id: userId });
            } catch (err) {
                console.error("Error removing user:", err);
                throw new Error("Failed to remove user");
            }
        },

        addProject: async (parent, { title, images, content }) => {
            try {
                const newProject = new Project({ title, images, content });
                return await newProject.save();
            } catch (err) {
                console.error("Error adding project:", err);
                throw new Error("Failed to add project");
            }
        },
        removeProject: async (parent, { projectId }) => {
            try {
                return await Project.findOneAndDelete({ _id: projectId });
            } catch (err) {
                console.error("Error removing project:", err);
                throw new Error("Failed to remove project");
            }
        },

        addArt: async (parent, { image, description }) => {
            try {
                return await Art.create({ image, description });
            } catch (err) {
                console.error("Error adding art:", err);
                throw new Error("Failed to add art");
            }
        },
        removeArt: async (parent, { artId }) => {
            try {
                return await Art.findOneAndDelete({ _id: artId });
            } catch (err) {
                console.error("Error removing art:", err);
                throw new Error("Failed to remove art");
            }
        },

        addPost: async (
            parent,
            { title, content, comments, author, datePublished }
        ) => {
            // Added async here
            try {
                console.log({ title, content, comments, author, datePublished})
                return await Post.create({
                    title,
                    content,
                    comments,
                    author,
                    datePublished,
                });
            } catch (err) {
                console.error("Error adding post:", err);
                throw new Error("Failed to add post");
            }
        },
        removePost: async (parent, { postId }) => {
            try {
                return await Post.findOneAndDelete({ _id: postId });
            } catch (err) {
                console.error("Error removing post:", err);
                throw new Error("Failed to remove post");
            }
        },

        addMessage: async (parent, { name, email, subject, message }) => {
            // Added async here
            try {
                return await Message.create({ name, email, subject, message });
            } catch (err) {
                console.error("Error adding message:", err);
                throw new Error("Failed to add message");
            }
        },
        removeMessage: async (parent, { messageId }) => {
            try {
                return await Message.findOneAndDelete({ _id: messageId });
            } catch (err) {
                console.error("Error removing post:", err);
                throw new Error("Failed to remove post");
            }
        },
    },
};

module.exports = resolvers;
