const db = require('../config/connection');
const { User, Project, Art, Post } = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');
const artSeeds = require('./artSeeds.json');
const postSeeds = require('./blogSeeds.json');
const cleanDB = require('./cleanDB');

const collections = [
    // 'user',
    'project',
    'art',
    'post'
]

db.once('open', async() => {
    try {

        for (const collection of collections) {
            console.log(`Cleaning database ${collection}s`);
            await cleanDB(collection, `${collection}s`);
        }

        // console.log('Seeding Users...');
        // await User.create(userSeeds);

        console.log('Seeding Projects...')
        await Project.create(projectSeeds);

        console.log('Seeding Art...');
        await Art.create(artSeeds);

        console.log('Seeding Blog Posts...');
        await Post.create(postSeeds);

        console.log('All done!');
        process.exit(0);
    } catch(err) {
        throw err;
    }
})