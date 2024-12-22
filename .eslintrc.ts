module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/no-v-model-argument': 'off',
    'vue/no-multiple-template-root': 'off'
  }
}