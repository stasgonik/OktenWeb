const fs = require('fs');
const path = require('path');

const garbageFolder = path.join(__dirname, 'Chaos');
const normalFolder = path.join(__dirname, 'Order');

function flat(garbageDir, normalDir) {
    fs.readdir(garbageDir, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        files.forEach((file) => {
            const fPath = path.join(garbageDir, `${file}`);
            fs.stat(fPath, (err1, stats) => {
                if (err1) {
                    console.log(err1);
                    return;
                }
                if (stats.isDirectory()) {
                    flat(fPath, normalDir);
                } else {
                    fs.rename(fPath, path.join(normalDir, `${file}`), (err2) => {
                        if (err2) {
                            console.log(err2);
                        }
                    });
                }
            });
        });
    });
}

flat(garbageFolder, normalFolder);
