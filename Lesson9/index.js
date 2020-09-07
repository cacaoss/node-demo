module.exports.brackets = (target, property) => {
    const old = target.prototype[property];
    target.prototype[property] = msg => {
        msg = `[${msg}]`;
        return old(msg);
    }
};
module.exports.sender = param => (target, property) => {
    const old = target.prototype[property];
    target.prototype[property] = msg => {
        msg = `${param} : ${msg}`;
        return old(msg);
    }
};
