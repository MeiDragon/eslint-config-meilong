import pluginVue from 'eslint-plugin-vue'
import base from './base/index.js'

export default [
  ...base,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      'vue/no-computed-properties-in-data': 'error',
    },
  },
]
