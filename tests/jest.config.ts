/* eslint-disable jest/no-jest-import */

import { Config } from 'jest'

const config: Config = {
    roots: ['<rootDir>/src'],
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
        '@pages/(.*)': '<rootDir>/src/pages/$1',
        '@common/(.*)': '<rootDir>/src/common/$1',
        '@routes/(.*)': '<rootDir>/src/routes/$1',
        '@store/(.*)': '<rootDir>/src/store/$1',
        '@services/(.*)': '<rootDir>/src/services/$1',
        '@assets/(.*)': '<rootDir>/src/assets/$1',
        '@styles/(.*)': '<rootDir>/src/styles/$1'
    },
    testEnvironment: 'jsdom',
    passWithNoTests: true,
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts']
}

export default config
