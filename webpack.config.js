var webpack = require('webpack');

module.exports = {
    entry: {
      app: [
        './src/shop/app.ts'
      ],
      vendor: [
          './node_modules/angular/angular.min.js'
      ]
    },
    output: {
        filename: './public/resources/shop/app.js',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', './public/resources/shop/vendor.js')
    ]
};