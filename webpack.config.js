const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), // Change this to 'build'
    filename: 'bundle.js',
    publicPath: '/' // Add this to ensure assets are served correctly on sub-paths
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(bmp|png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 8080, // Use the same port as your error messages
    historyApiFallback: true, // Important for SPA routing
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', // Ensure the filename is set to 'index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Remove the devServer configuration for production builds
};
;