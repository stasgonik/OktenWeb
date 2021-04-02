const { emailActionEnum } = require('../constant');

module.exports = {
    [emailActionEnum.ACCOUNT_CREATED]: {
        templateName: 'created',
        subject: 'Welcome on board'
    },

    [emailActionEnum.ACCOUNT_INFO_UPDATED]: {
        templateName: 'user-info-updated',
        subject: 'Your account info was accessed'
    },

    [emailActionEnum.ACCOUNT_DELETED]: {
        templateName: 'user-deleted',
        subject: 'Your account was deleted'
    },

    [emailActionEnum.ACCOUNT_ACTIVATED]: {
        templateName: 'user-activated',
        subject: 'Your account was activated'
    },
};
