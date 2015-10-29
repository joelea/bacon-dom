module.exports = {
    entry: "./src/specs/bacon-dom-spec.ts",
    output: {
        path: __dirname + "/build",
        filename: "specs.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            //{ test: /spec.ts$/, loader: "mocha!webpack-typescript" },
            { test: /\.ts$/, loader: "webpack-typescript" }
        ]
    }
};