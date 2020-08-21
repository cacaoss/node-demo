const {resolve} = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
    const filenames = fs.readdirSync(path);
    return `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    ${filenames.map(file =>
        `{
            path: '/${file.replace(".vue", "")}',
            name: '${file.replace(".vue", "")}',
            component: () => import('./views/${file}')
        },
`).join('')}
    ]
})`
};