
let base =require('./webpack.config')

module.exports = Object.assign({}, base, {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
})
