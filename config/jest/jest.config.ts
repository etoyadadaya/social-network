export default {
    globals: {
        __IS_DEV__: true,
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleDirectories: [
        'node_modules',
        'src',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    moduleNameMapper: {
        '\\.(scss|less|css)$': 'identity-obj-proxy',
        '\\.svg': '<rootDir>/config/jest/jestEmptyComponent.tsx',
        '@app/(.*)': '<rootDir>/src/app/$1',
        '@shared/(.*)': '<rootDir>/src/shared/$1',
        '@pages/(.*)': '<rootDir>/src/pages/$1',
        '@widgets/(.*)': '<rootDir>/src/widgets/$1',
        '@entities/(.*)': '<rootDir>/src/entities/$1',
    },
};
