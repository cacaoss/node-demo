module.exports.parser = (path = "./") => {
    const fs = require("fs");
    const readStream = fs.createReadStream(path);

    let reqData = [];
    let size = 0;

    return new Promise((resolve, reject) => {
        readStream.on("data", (data) => {
            reqData.push(data);
            size+=data.length;
        });

        readStream.on("end", async () => {
            reqData = Buffer.concat(reqData,size);
            resolve(JSON.parse(reqData.toString()));
        });

        readStream.on("err", (err) => {
            reject(err);
        });
    });
};
