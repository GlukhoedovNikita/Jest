import { Configuration } from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'

import { env, pathResolve } from './utils'

const webpackConfigBase: Configuration = {
    mode: env.mode as 'development' | 'production',
    entry: pathResolve('src/index.tsx'),
    output: {
        path: pathResolve('dist'),
        filename: env.isDev ? '[name].js' : '[name].[contenthash].js',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: [
                    'css-loader',
                    'sass-loader',
                ]
            },

            {
                test: /\.(jpg|png|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: pathResolve('public/index.html')
        })
    ],

    devtool: 'inline-source-map',

    resolve: {
        alias: {
            '@common': pathResolve('src/common/'),
            '@pages': pathResolve('src/pages/'),
            '@routes': pathResolve('src/routes/'),
            '@store': pathResolve('src/store/'),
            '@services': pathResolve('src/services/'),
            '@assets': pathResolve('src/assets/'),
            '@styles': pathResolve('src/styles/'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }
}

export default webpackConfigBase
