/* eslint-disable jest/no-jest-import */

import { Config } from 'jest'

const src = '<rootDir>/src'

const config: Config = {
    roots: [src],
    rootDir: '../.',
    collectCoverageFrom: [
        '<rootDir>/**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
        '@pages/(.*)': `${src}/pages/$1`,
        '@common/(.*)': `${src}/common/$1`,
        '@routes/(.*)': `${src}/routes/$1`,
        '@store/(.*)': `${src}/store/$1`,
        '@services/(.*)': `${src}/services/$1`,
        '@assets/(.*)': `${src}/assets/$1`,
        '@styles/(.*)': `${src}/styles/$1`
    },
    testEnvironment: 'jsdom',
    passWithNoTests: true,
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts']
}

export default config
