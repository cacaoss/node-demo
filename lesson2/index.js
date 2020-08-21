module.exports.compose = function compose(middlewares) {
    return (args) => {
        middlewares.reduce(
            (a,b)=>
                ()=>
                    a(()=>b(()=>{}))
        )(args);
    }
};

// module.exports.compose = function compose(middlewares) {
//     return (args) => {
//         return middlewares
//             .reduce(
//                 (a, b) =>
//                     () => a(
//                         () => b(
//                             () => {
//                             }
//                         )
//                     )
//             )(args)
//     }
// };



