const {
    constant: {
        DOC_MAX_SIZE,
        DOCS_MIMETYPES,
        PHOTO_MAX_SIZE,
        PHOTOS_MIMETYPES
    },
    statusCodeEnum: statusCode
} = require('../constant');
const { ErrorHandler } = require('../helper');
const { errorMessage } = require('../message');

module.exports = {
    checkFiles: (req, res, next) => {
        try {
            const { files } = req;

            if (!files) {
                return next();
            }

            const docs = [];
            const photos = [];

            const allFiles = Object.values(files);

            for (let i = 0; i < allFiles.length; i++) {
                const { name, size, mimetype } = allFiles[i];

                if (PHOTOS_MIMETYPES.includes(mimetype)) {
                    if (PHOTO_MAX_SIZE < size) {
                        throw new ErrorHandler(statusCode.BAD_REQUEST,
                            errorMessage.TOO_BIG_FILE.customCode,
                            `${name}${errorMessage.TOO_BIG_FILE.en}`);
                    }

                    photos.push(allFiles[i]);
                } else if (DOCS_MIMETYPES.includes(mimetype)) {
                    if (DOC_MAX_SIZE < size) {
                        throw new ErrorHandler(statusCode.BAD_REQUEST,
                            errorMessage.TOO_BIG_FILE.customCode,
                            `${name}${errorMessage.TOO_BIG_FILE.en}`);
                    }

                    docs.push(allFiles[i]);
                } else {
                    throw new ErrorHandler(statusCode.BAD_REQUEST,
                        errorMessage.INVALID_FILE_TYPE.customCode,
                        errorMessage.INVALID_FILE_TYPE.en);
                }
            }

            req.docs = docs;
            req.photos = photos;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkAvatar: (req, res, next) => {
        try {
            const { files } = req;

            if (!files) {
                return next();
            }

            if (req.photos.length > 1) {
                throw new ErrorHandler(statusCode.BAD_REQUEST,
                    errorMessage.ONLY_ONE_PHOTO_TO_AVATAR.customCode,
                    errorMessage.ONLY_ONE_PHOTO_TO_AVATAR.en);
            }

            [req.avatar] = req.photos;

            next();
        } catch (e) {
            next(e);
        }
    }
};
