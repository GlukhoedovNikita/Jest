/* eslint-disable no-confusing-arrow, no-unused-expressions */

import merge from 'webpack-merge'

import { env } from './webpack/utils'
import { webpackConfigBase, webpackConfigDev, webpackConfigProd } from './webpack'

export default () => env.isProd ? merge(webpackConfigProd, webpackConfigBase) : merge(webpackConfigDev, webpackConfigBase)
