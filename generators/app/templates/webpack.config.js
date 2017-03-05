/**
 * Created by ravi.hamsa on 9/22/16.
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool:'source-map',
    entry:['babel-polyfill','./src/main'],
    output:{
        path:path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:['.js']
    },
    externals:{
        'react':'React',
        'react-dom':'ReactDOM'
    },
    module:{
        loaders:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                query:{
                    presets:['es2015', 'react', 'stage-0']
                },
                exclude:/node_modules/
            }
        ]
    }
}