const path = require('path');
const uuid = require('uuid').v1;

module.exports = {
    fileDirBuilder: (fileOriginalName, itemType, ownerId, ownerType) => {
        const pathWithoutPublic = path.join(`${ownerType}`, `${ownerId}`, `${itemType}`);
        const fileDir = path.join(process.cwd(), 'public', pathWithoutPublic);
        const fileExtension = path.extname(`${fileOriginalName}`);
        const fileName = `${uuid()}${fileExtension}`;
        const finalFilePath = path.join(fileDir, fileName);

        const uploadPath = path.join(pathWithoutPublic, fileName);

        return { fileDir, finalFilePath, uploadPath };
    },

    preFindQueryHelper: (query) => {
        const {
            limit = 10, page = 1, sortBy = 'createdAt', order = 'asc', ...filters
        } = query;
        const skip = (page - 1) * limit;
        const keys = Object.keys(filters);
        const orderBy = order === 'asc' ? -1 : 1;
        const sort = { [sortBy]: orderBy };
        return {
            limit, skip, filters, keys, sort, page
        };
    },
};
