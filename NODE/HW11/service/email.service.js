const EmailTemplates = require('email-templates');
const nodemailer = require('nodemailer');
const path = require('path');

const {
    config:
        {
            SPAM_EMAIL, SPAM_EMAIL_PASSWORD
        }
} = require('../config');
const { statusCodeEnum: statusCode } = require('../constant');
const templatesInfo = require('../email-template');
const { ErrorHandler } = require('../helper');
const { errorMessage } = require('../message');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: SPAM_EMAIL,
        pass: SPAM_EMAIL_PASSWORD
    }
});

const templateParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-template')
    }
});

const sendMail = async (email, action, context) => {
    try {
        const templateInfo = templatesInfo[action];

        if (!templateInfo) {
            throw new ErrorHandler(statusCode.BAD_REQUEST,
                errorMessage.INVALID_EMAIL_ACTION.customCode,
                errorMessage.INVALID_EMAIL_ACTION.en);
        }

        const html = await templateParser.render(templateInfo.templateName, context);

        return transport.sendMail({
            from: 'GSI_SPAM_EMAILER',
            to: email,
            subject: templateInfo.subject,
            html
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    sendMail
};
