const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt'); // For hashing passwords

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        trim: true,
        maxlength: 50, // Limit the name to 50 characters
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minlength: 8, // Require a minimum of 8 characters for security
    }
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

// Pre-save hook to hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        return next(err);
    }
});

// Method to compare passwords during login
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
