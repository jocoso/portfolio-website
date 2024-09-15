const { User, Project } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (user, { userId }) => {
            return await User.findOne({ _id: userId });
        },

        projects: async () => {
            try {
                const projects = await Project.find();
                return projects;
            } catch(err) {
                console.error('Error fetching projects:', err);
                throw new Error('Failed to fetch projects')
            }
        },
        project: async(project, { projectId }) => {
            return await Project.findOne({ _id: projectId });
        }
    },

    Mutation: {
        addUser: async (parent, { name, password }) => {
            return User.create({ name, password });
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },

        addProject: async (parent, { title, images, content }) => {
            const newProject = new Project({ title, images, content });

            return await newProject.save();
        },
        removeProject: async (parent, { projectId }) => {
            return await Project.findOneAndDelete({ _id: projectId });
        }

    },
};

module.exports = resolvers;