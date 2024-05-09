module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript', 'prettier', 'plugin:vue/vue3-recommended'],
  plugins: ['prettier'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
    'vue/setup-compiler-macros': true,
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    'prettier/prettier': 'error',
    'vue/singleline-html-element-content-newline': 0,
    'react/jsx-filename-extension': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.vue'],
      extends: ['airbnb-base', 'airbnb-typescript', 'prettier', 'plugin:vue/vue3-recommended'],
      plugins: ['@typescript-eslint', 'prettier'],
      parser: 'vue-eslint-parser',
      parserOptions: { extraFileExtensions: ['.vue'], parser: '@typescript-eslint/parser' },
      rules: {
        'prettier/prettier': 'error',
        'vue/singleline-html-element-content-newline': 0,
        'react/jsx-filename-extension': 0,
        'vue/max-attributes-per-line': 0,
        'vue/html-self-closing': 0,
      },
    },
  ],
};
