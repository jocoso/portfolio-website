// Import needed modules
const request = require('supertest');
const mongoose = require('mongoose');

beforeAll(async ()=> {
    
})

// Mock Data Source
const mockDeleteItemById = jest.fn();

// Mock Item API Data Source
const mockItemAPI = {
    deleteItemById: mockDeleteItemById,
};

// Set up Apollo Server for testing
const server = 'http://localhost:3001';

describe("deleteProject Mutation", () => {
    it("deletes an item in projects successfully", async () => {
        const PROJECT_ID = "671a88204da73420288f39ba";
        // Mock the behaviour of deleteItemById to return a thruty value
        mockDeleteItemById.mockResolvedValue(true);

        // The mutation query
        const DELETE_ITEM = `
            mutation Mutation($id: ID!) {
                removeProject(_id: $id)
            }
        `;

        // Execute the mutation
        const res = await request(server)
            .post('/graphql')
            .send({
                query: DELETE_ITEM,
                variables: { id: PROJECT_ID },
            })
            .set('Accept', 'application/json');


        // Assertions
        expect(res.body.data.removeProject).toBe(true);
    });

    it('fails to delete an item if not found', async () => {
        // Mock the behaviour of deleteItemById to return a falsy value
        mockDeleteItemById.mockResolvedValue(false);

        // The mutation query
        const DELETE_ITEM = `
            mutation Mutation($id: ID!) {
                removeProject(_id: $id)
            }
        `;

        // Generates a valid ObjectId that is unlikely to exists in the database
        const fakeId = new mongoose.Types.ObjectId().toString();

        const res = await request(server)
            .post('/graphql')
            .send({
                query: DELETE_ITEM,
                variables: { id: fakeId },
            })
            .set('Accept', 'application/json')

        // Assertions
        expect(res.body.data.removeProject).toBe(false);
    });
});


