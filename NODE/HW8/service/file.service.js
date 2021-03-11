const path = require('path');
const fs = require('fs-extra').promises;
const uuid = require('uuid').v1;

const { itemTypeEnum, statusCodeEnum: statusCode } = require('../constant');
const { ErrorHandler } = require('../helper');
const { errorMessage } = require('../message');

const _fileDirBuilder = (docName, itemType, ownerId, ownerType) => {
    const pathWithoutPublic = path.join(`${ownerType}`, `${ownerId}`, `${itemType}`);
    const fileDir = path.join(process.cwd(), 'public', pathWithoutPublic);
    const fileExtension = path.extname(`${docName}`);
    const fileName = `${uuid()}${fileExtension}`;
    const finalFilePath = path.join(fileDir, fileName);

    const uploadPath = path.join(pathWithoutPublic, fileName);

    return { fileDir, finalFilePath, uploadPath };
};

const _uploadFile = async (file, fileDir, finalFilePath) => {
    await fs.mkdir(fileDir, { recursive: true });
    await file.mv(finalFilePath);
};

const _updateQueryBuild = (uploadPath, itemType) => {
    let updateObject = {};

    if (itemType === itemTypeEnum.AVATAR) {
        updateObject = { $set: { [itemType]: uploadPath } };
        return updateObject;
    }

    if (itemType === itemTypeEnum.DOCUMENT || itemType === itemTypeEnum.PHOTO) {
        updateObject = { $push: { [itemType]: uploadPath } };
        return updateObject;
    }

    throw new ErrorHandler(statusCode.BAD_REQUEST,
        errorMessage.INVALID_FILE_TYPE.customCode,
        errorMessage.INVALID_FILE_TYPE.en);
};

module.exports = {
    uploadFile: async (file, itemType, ownerId, ownerType, ownerService) => {
        const { fileDir, finalFilePath, uploadPath } = _fileDirBuilder(file.name, itemType, ownerId, ownerType);

        await _uploadFile(file, fileDir, finalFilePath);

        const updateObject = _updateQueryBuild(uploadPath, itemType);

        await ownerService.updateOne(ownerId, updateObject);
    },

    deleteUserFiles: async (ownerId, ownerType) => {
        const filePath = path.join(process.cwd(), 'public', `${ownerType}`, `${ownerId}`);

        await fs.rmdir(filePath, { recursive: true });
    }
};
