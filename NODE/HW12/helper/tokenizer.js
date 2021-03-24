const jwt = require('jsonwebtoken');

const {
    roleConfig
} = require('../config');

module.exports = (role) => {
    const access_token = jwt.sign({},
        roleConfig[role].access_word, { expiresIn: '20m' });
    const refresh_token = jwt.sign({},
        roleConfig[role].refresh_word, { expiresIn: '2d' });

    return {
        access_token,
        refresh_token
    };
};
