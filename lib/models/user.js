const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new Schema({
    _id: {
        type: ObjectId,
        auto: true
    },
    firstName: {
        type: String,
        minlength: 2,
        maxlength: 256,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 256,
        trim: true,
        required: true
    },
    email: {
        type: String,
        minlength: 2,
        maxlength: 256,
        unique: [true, 'User already exists.'],
        required: [true, 'Email address is required.'],
    },
    password: {
        type: String,
        required: true,
    }
}, {collection: 'Users', timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

module.exports = mongoose.model('Users', UserSchema);
