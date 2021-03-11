module.exports = {
    AUTHORIZATION: 'Authorization',

    PHOTO_MAX_SIZE: 5 * 1024 * 1024, // 5MB
    DOC_MAX_SIZE: 10 * 1024 * 1024, // 10MB

    PHOTOS_MIMETYPES: [
        'image/gif',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/tiff',
        'image/webp',
        'image/bmp',
        'image/pict',
        'image/tiff',
        'image/x-tiff'
    ],

    DOCS_MIMETYPES: [
        'application/msword', // DOC 1997-2003
        'application/pdf', // PDF
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLS
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOC since 2007 (or .docx)
        'application/rtf', // RTF
        'text/plain' // txt
    ],
};
