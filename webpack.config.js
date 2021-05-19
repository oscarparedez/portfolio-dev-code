const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css',
  })],
  mode: 'production',
  devServer: {
    contentBase: 'dist',
  },
  module: {
    rules: [
      {
        test: /.(jsx?)$/,
        use: ['babel-loader', '@linaria/webpack-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}
