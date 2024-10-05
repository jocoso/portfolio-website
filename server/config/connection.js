require("dotenv").config();
const mongoose = require("mongoose");

mongoose
    .connect(
        process.env.MONGO_URI, // Ensure that your MONGO_URI is properly set in the .env file
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose.connection;
