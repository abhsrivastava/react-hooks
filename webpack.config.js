module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: null,
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: 'build',
        port: 5000
    }
}