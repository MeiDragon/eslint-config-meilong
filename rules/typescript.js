import tseslint from 'typescript-eslint'
import base from './base/index.js'

export default tseslint.config(...base, ...tseslint.configs.recommended, {
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
    },
  },
  rules: {
    // override/add rules settings here, such as:
    '@typescript-eslint/await-thenable': 'error',
  },
})
