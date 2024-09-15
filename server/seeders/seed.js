const db = require('../config/connection');
const { User, Project } = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        console.log('Cleaning database...');
        await cleanDB('User', 'Users');
        await cleanDB('Project', 'Projects');

        console.log('Seeding Users...');
        await User.create(userSeeds);

        console.log('Seeding Projects...')
        await Project.create(projectSeeds);

        console.log('All done!');
        process.exit(0);
    } catch(err) {
        throw err;
    }
})