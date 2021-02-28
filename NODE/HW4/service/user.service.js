const errorMessage = require('../message/error.message');
const User = require('../dataBase/model/User');
require('../dataBase/model/House');
require('../dataBase/model/Address');

module.exports = {
    findUsers: async (query, preferL) => {
        if (!query) {
            return User.find();
        }

        const find = await User.find(query);

        if (!find) {
            throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
        }

        return find;
    },

    createUser: (user) => {
        User.create(user);
    },

    findUserById: async (userId, preferL) => {
        const user = await User.findById(userId);

        if (!user) {
            throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
        }

        return user;
    },

    deleteUser: (userId) => {
        User.findByIdAndRemove(userId);
    },
};
