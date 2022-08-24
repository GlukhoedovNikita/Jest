/* eslint-disable jest/no-jest-import */

import { Config } from 'jest'

import { src, rootDir } from './constants'

const config: Config = {
    roots: [src],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest',
        '@pages/(.*)': `${src}pages/$1`,
        '@common/(.*)': `${src}common/$1`,
        '@routes/(.*)': `${src}routes/$1`,
        '@store/(.*)': `${src}store/$1`,
        '@services/(.*)': `${src}services/$1`,
        '@assets/(.*)': `${src}assets/$1`,
        '@styles/(.*)': `${src}styles/$1`
    },
    testEnvironment: 'jsdom',
    passWithNoTests: true,
    setupFilesAfterEnv: [`${rootDir}jest.setup.ts`]
}

export default config
