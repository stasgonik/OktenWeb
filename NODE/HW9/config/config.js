module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'surpriseMotherfucker',
    JWT_REFRESH: process.env.JWT_REFRESH || 'dexterIsConfused',
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/HW9',
    PORT: 5042,
    SPAM_EMAIL: process.env.SPAM_EMAIL || 'bla-bla_put_real_email@here.stanislav',
    SPAM_EMAIL_PASSWORD: process.env.SPAM_EMAIL_PASSWORD || 'dont_forget_TH3!_password',
};
