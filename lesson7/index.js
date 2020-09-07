const fs = require("fs");

function loader(dir, cb) {
    const filenames = fs.readdirSync(dir);
    filenames.forEach((filename) => {
        filename = filename.replace(".js", "");
        const file = require(`${dir}/${filename}`);
        cb(filename, file);
    });
}

module.exports.createLoader = config => ({
    initFunction(dir = "./data/func") {
        let funcCollection = {};
        loader(dir, (filename, func) => {
            funcCollection[filename] = func(config);
        });
        return funcCollection;
    }
});
