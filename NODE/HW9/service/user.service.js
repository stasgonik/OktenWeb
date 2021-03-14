const { queryBuilder: { userFilterObjectBuilder }, utilHelper: { preFindQueryHelper } } = require('../helper');
const { User } = require('../model');
require('../model/Address');
require('../model/House');

module.exports = {
    findUsers: async (query = {}) => {
        const {
            limit, filters, keys, skip, page, sort
        } = preFindQueryHelper(query);

        const filterObject = userFilterObjectBuilder(filters, keys);

        const users = await User.find(filterObject).limit(+limit).skip(skip).sort(sort);
        const count = await User.countDocuments(filterObject);

        return {
            data: users,
            page,
            limit,
            count
        };
    },

    createUser: (user) => User.create(user),

    // Эта функция необходима только для поиска User по email в Middleware,
    // queryBuilder для нее на данном этапе абсолютно не нужен
    findOneUser: (query) => User.findOne(query),

    findUserById: (userId) => User.findById(userId),

    deleteUser: (userId) => User.findByIdAndRemove(userId),

    updateOne: (userId, updateObject) => User.updateOne({ _id: userId }, updateObject, { upsert: true })
};
