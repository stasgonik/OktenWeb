module.exports = {
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/HW6',
    JWT_SECRET: process.env.JWT_SECRET || 'surpriseMotherfucker',
    JWT_REFRESH: process.env.JWT_REFRESH || 'dexterIsConfused',
    PORT: 5042
};
