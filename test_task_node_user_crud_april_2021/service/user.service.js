const { User } = require('../database/model');
const { queryBuilder: { userFilterObjectBuilder }, utilHelper: { preFindQueryHelper } } = require('../helper');

module.exports = {
    findUsers: async (query) => {
        const {
            limit, filters, keys, offset, page, sort
        } = preFindQueryHelper(query);

        const filterObject = userFilterObjectBuilder(filters, keys);

        const users = await User.findAll({
            where: filterObject,
            sort,
            offset,
            limit
        });

        const count = await User.count({
            where: filterObject
        });

        return {
            data: users,
            page,
            limit,
            count
        };
    },
    createUser: (user, transaction) => User.create(user, { transaction }),

    findUserById: (userId) => User.findByPk(userId),

    findOneUser: (query, chosenScope = 'defaultScope') => User.scope(chosenScope).findOne({
        where: query
    }),

    deleteUser: async (userId, transaction) => {
        await User.destroy({
            where: {
                id: userId
            },
            transaction
        });
    },

    updateOne: async (userId, updateObject, transaction) => {
        await User.update(updateObject, {
            where: {
                id: userId
            },
            transaction
        });
    }
};
