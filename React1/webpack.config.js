/// <reference path="C:\Users\stuart.jerman\Documents\Visual Studio 2015\Projects\React1\React1\index.html" />
"use strict";

module.exports = {
    entry: "./components/master.jsx",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(jsx?|js)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};