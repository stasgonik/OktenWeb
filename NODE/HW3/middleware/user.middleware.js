const statusCode = require('../constant/statusCode.enum');
const errorMessage = require('../message/error.message');

module.exports = {
    isIdValid: (req, res, next) => {
        try {
            const userId = +req.params.userId;
            const { preferL = 'en' } = req.body;

            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error(errorMessage.ID_IS_INVALID[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isPasswordValid: (req, res, next) => {
        try {
            const { password, preferL = 'en' } = req.body;

            if (!password) {
                throw new Error(errorMessage.ABSENT_PASSWORD[preferL]);
            }

            if (password.length < 8) {
                throw new Error(errorMessage.TOO_WEAK_PASSWORD[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },
    isUsernameValid: (req, res, next) => {
        try {
            const { username, preferL = 'en' } = req.body;

            if (!username) {
                throw new Error(errorMessage.ABSENT_USERNAME[preferL]);
            }

            if (username.length < 6) {
                throw new Error(errorMessage.TOO_SHORT_NAME[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    }
};
