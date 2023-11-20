module.exports = {
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
            name: 'images/[name].[ext]',
        },
    }
    ]
  }
}