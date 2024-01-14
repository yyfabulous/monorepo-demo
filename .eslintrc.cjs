module.exports = {
    env: {
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        semi: 'error',
        indent: 'error',
        // prettier: 'error',
    },
    // extends: {
    //     eslint: 'recommended',
    // },
};
