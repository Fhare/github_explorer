// Nós iremos usar path para poder evitar os erros de / nos Sistemas Operacionais
// * Boa prática
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  // Esse "mode" faz com que a execução do webpack fique mais rápida. Pois evita 
  // alguns processos de otimização do mode: 'production' (modo de produção).
  mode: isDevelopment ? 'development' : 'production',

  // Muda o source map de acordo com o ambiente.
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',

  // Entry diz qual é o arquivo principal da nossa aplicação.
  entry: path.resolve(__dirname, 'src', 'index.jsx'),

  // Output fala onde o código convertido irá ficar.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // Resolve mostra quais arquivos o Webpack pode ler.
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // Faz o bundle.js ser gerado a cada alteração feita no código.
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],

  // Module serve dizer como cada arquivo dentro da aplicação deve ser convertido.
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
};