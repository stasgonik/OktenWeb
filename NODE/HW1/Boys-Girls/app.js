const fs = require('fs');
const path = require('path');

const girlsFolder = path.join(__dirname, "1800");
const boysFolder = path.join(__dirname, "2000");

function sortGender(girlsPath, boysPath) {
    fs.readdir(girlsPath, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(file => {
            fs.readFile(path.join(girlsPath, `${file}`), (err1, data) => {
                if (err1) {
                    console.log(err1);
                    return;
                }
                let search = data.toString().search(('"gender":"male"'));
                if (search !== -1) {
                    fs.rename(path.join(girlsPath, `${file}`), path.join(boysPath, `${file}`), err2 => {
                        if (err2) {
                            console.log(err2);
                            return;
                        }
                    })
                }
            })
        })
    })


    fs.readdir(boysPath, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(file => {
            fs.readFile(path.join(boysPath, `${file}`), (err1, data) => {
                if (err1) {
                    console.log(err1);
                    return;
                }
                let search = data.toString().search(('"gender":"female"'));
                if (search !== -1) {
                    fs.rename(path.join(boysPath, `${file}`), path.join(girlsPath, `${file}`), err2 => {
                        if (err2) {
                            console.log(err2);
                            return;
                        }
                    })
                }
            })
        })
    })
}

sortGender(girlsFolder, boysFolder);
