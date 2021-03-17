const path = require('path');
const fs = require('fs-extra').promises;

const {
    queryBuilder: { fileCreateObjectBuilder, fileUpdateObjectBuilder },
    utilHelper: { fileDirBuilder }
} = require('../helper');

const _uploadFile = async (file, fileDir, finalFilePath) => {
    await fs.mkdir(fileDir, { recursive: true });
    await file.mv(finalFilePath);
};

const _removeFile = async (ownerId, ownerType) => {
    const filePath = path.join(process.cwd(), 'public', `${ownerType}`, `${ownerId}`);

    await fs.rmdir(filePath, { recursive: true });
};

module.exports = {
    uploadFileOwn: async (file, itemType, ownerId, ownerType, ownerService) => {
        const { fileDir, finalFilePath, uploadPath } = fileDirBuilder(file.name, itemType, ownerId, ownerType);

        await _uploadFile(file, fileDir, finalFilePath);

        const updateObject = fileUpdateObjectBuilder(uploadPath, itemType);

        await ownerService.updateOne(ownerId, updateObject);
    },

    uploadFileSeparate: async (file, itemType, ownerId, ownerType, itemService) => {
        const { fileDir, finalFilePath, uploadPath } = fileDirBuilder(file.name, itemType, ownerId, ownerType);

        await _uploadFile(file, fileDir, finalFilePath);

        const createObject = fileCreateObjectBuilder(uploadPath, ownerType, ownerId);

        // await itemService.create(createObject);

        await itemService.createFileEntry(createObject);
    },

    deleteUserFiles: async (ownerId, ownerType) => {
        await _removeFile(ownerId, ownerType);
    }
};
