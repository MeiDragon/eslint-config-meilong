import globals from 'globals'

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // default js模块规范
      globals: {
        //  An object specifying additional objects that should be added to the global scope during linting
        ...globals.browser,
      },
    },
    linterOptions: {
      noInlineConfig: false, // 是否禁用行内注释方式规则
      reportUnusedDisableDirectives: 'warn', // 是否报道未使用的禁用指令（如 /*eslint-disable*/, /*eslint-enable*/ and /*eslint-disable-next-line*/
    },
    rules: {
      // Block
      'no-shadow': 'error',
      'no-redeclare': 'error',
      'no-multi-assign': 'error',
      'no-shadow-restricted-names': 'error',
      'no-dupe-class-members': 'error',
      'no-this-before-super': 'error',
      // Recommand
      'no-var': 'warn',
      'no-use-before-define': 'warn',
      'no-unused-vars': 'warn',
      eqeqeq: 'warn',
      'no-inner-declarations': 'warn',
      'default-param-last': 'warn',
      'no-param-reassign': 'warn',
      'no-setter-return': 'warn',
      'guard-for-in': 'warn',
      'no-eval': 'warn',
      'no-debugger': 'warn',
      'valid-typeof': 'warn',
      'no-delete-var': 'warn',
      'no-extra-boolean-cast': 'warn',
    },
  },
]
