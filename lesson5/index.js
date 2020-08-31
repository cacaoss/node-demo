const {EventEmitter} = require("events");
module.exports = class Connection {
    constructor() {
        this.emitter = new EventEmitter();
    }

    onConn(cb) {
        this.emitter.on("connection", cb)
    }

    connection(message) {
        this.emitter.emit("connection", message);
    }
};