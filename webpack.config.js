let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ],
            }, 
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    }
                ]
            }, 
            {
                test: /\.(jpeg|png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html'
            // filename:'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/img',
                to: './img'
            },
            {
                from: './fonts/img',
                to: './fonts'
            }
        ]),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
};

module.exports = conf;