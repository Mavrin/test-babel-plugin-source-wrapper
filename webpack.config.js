var path = require('path');
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                    test: /\.(js)$/,
                    
                    loader: 'babel',
                    query: {
                        presets: ['es2015'],
                         plugins: [
                              ['source-wrapper', {blackbox:[],runtime: true}]
                         ],
                        cacheDirectory: path.join(__dirname,'./babelJSsd')
                    }
                },
        ]
    }
};