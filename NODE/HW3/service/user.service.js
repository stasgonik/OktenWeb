const path = require('path');
const { promisify } = require('util');
const fs = require('fs');

const errorMessage = require('../message/error.message');

const dbPath = path.join(process.cwd(), 'dataBase', 'users.json');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

module.exports = {
    findUsers: async (preferL, query) => {
        const buffer = await readFile(dbPath);

        const db = JSON.parse(buffer.toString());
        const { username } = query;

        if (!username) {
            return db;
        }

        const user = db.find((dbUser) => dbUser.username === username);

        if (!user) {
            throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
        }

        return user;
    },

    findUserById: async (userId, preferL) => {
        const buffer = await readFile(dbPath);

        const user = JSON.parse(buffer.toString())[userId];

        if (!user) {
            throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
        }

        return user;
    },

    createUser: async (user, preferL) => {
        const buffer = await readFile(dbPath);

        const db = JSON.parse(buffer.toString());

        if (db.find((dbUser) => dbUser.username === user.username)) {
            throw new Error(errorMessage.USER_ALREADY_EXIST[preferL]);
        }

        db.push(user);
        await writeFile(dbPath, JSON.stringify(db));
    },

    deleteUser: async (userId) => {
        const buffer = await readFile(dbPath);

        const db = JSON.parse(buffer.toString());

        db.splice(userId, 1);
        await writeFile(dbPath, JSON.stringify(db));
    },

    // findUserByUsername: async (username, preferL) => {
    //     const buffer = await readFile(dbPath);

    //     const db = JSON.parse(buffer.toString());
    //
    //     const user = db.find(user => user.username === username);
    //
    //     if(!user) {
    //         throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
    //     }
    //
    //     return user;
    // }
};
