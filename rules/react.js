import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import base from './base/index.js'

export default [
  ...base,
  reactRecommended,
  {
    rules: {
      // override/add rules settings here, such as:
      'react/display-name': 'warn',
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/no-this-in-sfc': 'error',
      'react/require-render-return': 'warn',
      'react/no-children-prop': 'warn',
      'react/jsx-filename-extension': ['warn', { allow: 'as-needed' }],
    },
  },
]
