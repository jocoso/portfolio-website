const { User, Project, Art, Post, Message } = require("../models");
const { GraphQLScalarType, Kind } = require("graphql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Reusable function for error handling
const handleError = (err, entity) => {
    console.error(`Error fetching ${entity}:`, err);
    throw new Error(`Failed to fetch ${entity}`);
};

const resolvers = {
    // Custom Date Scalar Type
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
            if(ast.kind === Kind.INT) {
                return new Date(parseInt(ast.value, 10));
            }
            return null;
        },
    }),

    // Query Resolvers
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

        projects: async() => {
            try {
                const projects = await Project.find();
                console.log("Fetched projects:", projects);
                return projects || [];
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
                const post = await Post.findOne({ _id: postId }).populate("author");
                if(!post || !post.author) {
                    throw new Error("Post not found or author is missing");
                }
                return post;
            } catch (err) {
                handleError(err, "post");
            }
        },
        post: async () => {
            try {
                try{
                    const post = await Post.findOne({ _id: postId }).populate("author");
                    if(!post || !post.author) {
                        throw new Error("Post not found or author is missing");
                    }
                    return post;
                } catch (err) {
                    handleError(err, "post");
                }
            } catch(err) {}
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

    // Mutation Resolvers
    Mutation: {
        login: async (parent, { username, password }) => {
            try {
                // Find the user by username
                const user = await User.findOne({ name: username });

                if (!user) {
                    throw new Error('User not found');
                }

                // Compare the provided password with the stored hashed password
                const valid = await bcrypt.compare(password, user.password);
                if(!valid)
                    throw new Error('Invalid password');

                // Create a JWT token
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '1h', // Token expiry time
                });

                // Return the token and the user
                return {
                    token,
                    user,
                };
            } catch(err) {
                handleError(err, "login")
            }
        },
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
        updateProject: async(parent, { id, input }) => {
            try {
                const updatedProject = await Project.findByIdAndUpdate (
                    id,
                    { $set: input },
                    { new: true, runValidators: true }
                );

                if(!updatedProject) throw new Error("Project not found");

                return updatedProject;
            } catch (err) {
                handleError(err, "update project");
            }
        },
        removeProject: async (parent, { projectId }) => {
            try {
                return await Project.findOneAndDelete({ _id: projectId });
            } catch(err) {
                handleError(err, "remove project");
            }
        },

        addArt: async (parent, { name, image, description }) => {
            try {
                return await Art.create({ name, image, description });
            } catch(err) {
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
            } catch(err) {
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
}

module.exports = resolvers;