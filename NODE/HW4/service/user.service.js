const User = require('../dataBase/model/User');
require('../dataBase/model/House');
require('../dataBase/model/Address');

module.exports = {
    findUsers: (query) => User.find(query),

    createUser: (user) => User.create(user),

    findUserById: (userId) => User.findById(userId),

    deleteUser: (userId) => User.findByIdAndRemove(userId),
};
