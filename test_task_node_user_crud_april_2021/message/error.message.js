module.exports = {
    BAD_REQUEST: {
        customCode: 4000
    },
    JOI_VALIDATION_ERROR: {
        customCode: 4001
    },
    USER_ALREADY_EXIST: {
        customCode: 4002,
        en: 'User with this email is already exist in database',
    },
    ABSENT_ACCESS_TOKEN: {
        customCode: 4003,
        en: 'Your request doesnt have access token',
    },
    ABSENT_REFRESH_TOKEN: {
        customCode: 4004,
        en: 'Your request doesnt have refresh token',
    },
    INVALID_EMAIL_ACTION: {
        customCode: 4005,
        en: 'Unknown email action',
    },
    INVALID_FILE_TYPE: {
        customCode: 4006,
        en: 'Unknown file type',
    },
    TOO_BIG_FILE: {
        customCode: 4007,
        en: ' - this file is too big',
    },
    ONLY_ONE_PHOTO_TO_AVATAR: {
        customCode: 4008,
        en: 'You can upload only one photo to avatar',
    },
    ABSENT_ACTIVATION_TOKEN: {
        customCode: 4009,
        en: 'Your request doesnt have activation token',
    },
    ACCESS_TOKEN_NOT_VALID: {
        customCode: 4011,
        en: 'Your access token is not valid',
    },
    REFRESH_TOKEN_NOT_VALID: {
        customCode: 4012,
        en: 'Your refresh token is not valid',
    },
    ACTIVATION_TOKEN_NOT_VALID: {
        customCode: 4013,
        en: 'Your activation token is not valid',
    },
    SUSPICIOUS_TOKEN: {
        customCode: 4031,
        en: 'Your access token doesnt exist in database',
    },
    UNAUTHORISED_ACCESS: {
        customCode: 4032,
        en: 'Unauthorised access attempt to user data',
    },
    ACCOUNT_IS_NOT_ACTIVATED: {
        customCode: 4033,
        en: 'Accessed user account is not activated',
    },
    NO_RESULT_FOUND: {
        customCode: 4041,
        en: 'Search on database have no results',
    },
};
