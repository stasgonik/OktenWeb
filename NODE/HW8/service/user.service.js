const { User } = require('../model');
require('../model/Address');
require('../model/House');

module.exports = {
    findUsers: (query) => User.find(query),

    createUser: (user) => User.create(user),

    findOneUser: (query) => User.findOne(query),

    findUserById: (userId) => User.findById(userId),

    deleteUser: (userId) => User.findByIdAndRemove(userId),

    updateOne: (userId, updateObject) => User.updateOne({ _id: userId }, updateObject, { upsert: true })
};
