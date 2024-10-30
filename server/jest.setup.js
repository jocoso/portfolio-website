// jest.setup.js

// Example: Setting up a global mock database connection or helper functions
global.mockDb = {
    connect: jest.fn(),
    disconnect: jest.fn(),
};
