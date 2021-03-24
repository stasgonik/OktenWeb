const { roleEnum } = require('../constant');

module.exports = {
    [roleEnum.user]: {
        access_word: process.env.JWT_SECRET || 'surpriseMotherfucker',
        refresh_word: process.env.JWT_REFRESH || 'dexterIsConfused',
    },

    [roleEnum.admin]: {
        access_word: process.env.JWT_SECRET_ADMIN || 'bla-bla',
        refresh_word: process.env.JWT_REFRESH_ADMIN || 'bla-bla-bla',
    }
};
