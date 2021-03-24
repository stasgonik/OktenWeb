const { Op } = require('sequelize');

const { authService } = require('../service');

module.exports = async () => {
    await authService.deleteTokens({
        updatedAt: {
            [Op.lte]: new Date(new Date() - 48 * 60 * 60 * 1000)
        }
    });
};
