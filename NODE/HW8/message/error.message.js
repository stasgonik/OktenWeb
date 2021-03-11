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
        ua: 'Користувач з даною електронною поштою вже існує у базі даних',
        ru: 'Пользователь с данным электронной почтой уже существует в базе данных'
    },
    ABSENT_ACCESS_TOKEN: {
        customCode: 4003,
        en: 'Your request doesnt have access token',
        ua: 'У Вашому запиті відсутній маркер доступу',
        ru: 'В Вашем запросе отсутствует маркер доступа'
    },
    ABSENT_REFRESH_TOKEN: {
        customCode: 4004,
        en: 'Your request doesnt have refresh token',
        ua: 'У Вашому запиті відсутній маркер оновлення',
        ru: 'В Вашем запросе отсутствует маркер обновления'
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
    ACCESS_TOKEN_NOT_VALID: {
        customCode: 4011,
        en: 'Your access token is not valid',
        ua: 'Твій маркер доступу не валідний',
        ru: 'Твой маркер доступа не валидный'
    },
    REFRESH_TOKEN_NOT_VALID: {
        customCode: 4012,
        en: 'Your refresh token is not valid',
        ua: 'Твій маркер оновлення не валідний',
        ru: 'Твой маркер обновления не валидный'
    },
    SUSPICIOUS_TOKEN: {
        customCode: 4031,
        en: 'Your access token doesnt exist in database',
        ua: 'Твій маркер доступу відсутній у базі даних',
        ru: 'Твоего маркер доступа нету в базе данных'
    },
    UNAUTHORISED_ACCESS: {
        customCode: 4032,
        en: 'Unauthorised access attempt to user data',
        ua: 'Неавторізована спроба доступу до даних користувача',
        ru: 'Неавторизированная попытка доступа к данным пользователя'
    },
    NO_RESULT_FOUND: {
        customCode: 4041,
        en: 'Search on database have no results',
        ua: 'Пошук по базі даних не мав результату',
        ru: 'Поиск по базе данных не принес результата'
    },
};
