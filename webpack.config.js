const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/build")
    }
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             use: "babel-loader"
    //         },
    //         {
    //             test: /\.css$/,
    //             use: ["style-loader", "css-loader"]
    //         },
    //         {
    //             test: /\.jpeg$/,
    //             use: ["url-loader"]
    //         }
    //     ]
    // }
};
