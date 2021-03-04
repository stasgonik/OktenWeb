const { User } = require('../model');
require('../model/House');
require('../model/Address');

module.exports = {
    findUsers: (query) => User.find(query),

    createUser: (user) => User.create(user),

    findUserById: (userId) => User.findById(userId),

    deleteUser: (userId) => User.findByIdAndRemove(userId),
};
