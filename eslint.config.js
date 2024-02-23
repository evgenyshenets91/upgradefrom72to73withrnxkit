module.exports = [
  {
    plugins: {
      '@rnx-kit': require('@rnx-kit/eslint-plugin'),
    },
    rules: {
      '@rnx-kit/no-const-enum': 'error',
      '@rnx-kit/no-export-all': 'error',
    },
  },
];
