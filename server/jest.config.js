module.exports = {
    testEnvironment: "node", // Specify Node.js as the test environment
    transform: {
        "^.+\\.js$": "babel-jest", // Use babel-jest for JavaScript files
    },
    moduleFileExtensions: ["js", "json"],
    testMatch: ["**/tests/**/*.spec.[jt]s?(x)", "**/__tests__/*.[jt]s?(x)"],
    transformIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
