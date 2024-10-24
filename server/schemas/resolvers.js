const { User, Project, Art, Post, Message } = require("../models");
const { GraphQLScalarType, Kind } = require("graphql");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Reusable function for error handling
const handleError = (err = null, entity = null) => {
    console.error(`Error fetching ${entity}:`, err);
    throw new Error(`Failed to fetch ${entity}`);
};

const ALERT = (err, message) => {
    const shout = "ALERT!\n";
    // Returns an error message iff an error exists
    // Returns an extra message iff an extra message exits
    // Put all together in the format `\tERROR: ${err}\n\tMSG: ${message}`
    //
    // variable 1 = if err <exists>
    //                  return "ERR <and Whatever error here>";
    //              otherwise
    //                  return <nothing>
    // variable 2 = if message <exists>
    //                  return "MSG <and whatever error here"
    //              otherwise
    //                  return <nothing>
    //
    // print shout + variable 1 + variable 2
    const error = err ? `\n\tERR: \n ${err}` : "";
    const msg = message ? `\n\tMSG: ${message}` : "";

    console.error(shout + error + msg);
};

const resolvers = {
    // Custom Date Scalar Type
    Date: new GraphQLScalarType({
        name: "Date",
        description: "Custom Date scalar type",
        parseValue(value) {
            return new Date(value); // For client inputs
        },
        serialize(value) {
            return value.toISOString(); // For server output
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
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

        projects: async () => {
            try {
                const projects = await Project.find();
                console.log("Fetched projects:", projects);
                return projects || [];
            } catch (err) {
                handleError(err, "projects");
            }
        },
        project: async (parent, { _id }) => {
            try {
                return await Project.findOne({ _id });
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

        // Post stuff.
        posts: async () => {
            try {
                const posts = await Post.find({})
                    .populate({
                        path: "author", // The path should match the field name in the schema
                        model: "User", // Ensure this matches the name of the User model
                        select: "name", // Select the fields you want to populate
                    })
                    .exec();

                return posts.length ? posts : [];
            } catch (err) {
                handleError(err, "posts");
            }
        },
        post: async () => {
            try {
                const post = await Post.findOne({ _id }).populate("author");
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

    // Mutation Resolvers
    Mutation: {
        login: async (parent, { username, password }) => {
            try {
                // Find the user by username
                const user = await User.findOne({ name: username });

                if (!user) {
                    throw new Error("User not found");
                }

                // Compare the provided password with the stored hashed password
                const valid = await bcrypt.compare(password, user.password);
                if (!valid) throw new Error("Invalid password");

                // Create a JWT token
                const token = jwt.sign(
                    { userId: user._id },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h", // Token expiry time
                    }
                );

                // Return the token and the user
                return {
                    token,
                    user,
                };
            } catch (err) {
                handleError(err, "login");
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
        updateProject: async (parent, { _id, input }) => {
            try {
                const updatedProject = await Project.findByIdAndUpdate(
                    _id,
                    { $set: input },
                    { new: true, runValidators: true }
                );

                if (!updatedProject) throw new Error("Project not found");

                return updatedProject;
            } catch (err) {
                handleError(err, "update project");
            }
        },
        removeProject: async (parent, { _id }) => {
            try {

                if (!mongoose.Types.ObjectId.isValid(_id)) {
                    console.error(`Invalid ObjectId: ${_id}`);
                    return false;
                }

                const deletedProject = await Project.findOneAndDelete({ _id });
                return !!deletedProject;
            } catch (err) {
                handleError(err, "remove project");
                return false;
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

        addPost: async (parent, { input }) => {
            try {
                const { author, content, title, datePublished } = input;

                // Check if author exists
                const user = await User.findById(author);
                if (!user) throw new Error("Author unknown");
                else console.log(user);

                const newPost = new Post({
                    author: user,
                    content,
                    title,
                    datePublished: datePublished || new Date().toISOString(),
                });

                await newPost.save(); // Save post to db.

                return newPost; // Return newly created post.
            } catch (err) {
                handleError(err, "add post");
            }
        },
        removePost: async (parent, { _id }) => {
            try {
                return await Post.findOneAndDelete({ _id });
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
