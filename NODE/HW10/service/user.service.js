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
    createUser: (user) => User.create(user),

    findUserById: (userId) => User.findByPk(userId),

    findOneUser: (query) => User.findOne({
        where: query
    }),

    deleteUser: async (userId) => {
        await User.destroy({
            where: {
                id: userId
            }
        });
    },

    updateOne: async (userId, updateObject) => {
        await User.findOne({
            where: { id: userId }
        })
            .then((record) => {
                record.update(updateObject);
            });
    },
};
