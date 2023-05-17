var mongoose = require('mongoose');
const User = require('./models/user');

exports.get =  (id, callback) => {

    if (!id) {
        return callback(new Error('Invalid user id'));
    }

    User.findById(id, (err, result) => {
        if (err) {
            return callback(err);
        }

        return callback(null, result)
    });
}