# eslint-config-meilong
ESLint shareable configuration for MeiDragon F2E Guidelines.
## 使用
### 支持与接入指南
新建 `eslint.config.js` 配置文件，按照[官网](https://eslint.org/docs/latest/extend/shareable-configs)共享配置接入指南接入对应配置，暂时支持`base`、`ts`、`react`、`vue`.
```js
import { base } from 'eslint-config-meilong' // 基础配置，由其余配置共享
import { typescript } from 'eslint-config-meilong' // ts共享配置
import { react } from 'eslint-config-meilong' // react共享配置
import { vue } from 'eslint-config-meilong' // react共享配置
```
### 配置示例
`eslint.config.js`:
```js
import { typescript } from 'eslint-config-meilong' // ts 共享配置
export default [...typescript]
```
要注意支持`ts`开发的项目，依赖的配置文件`tsconfig.json`须在根目录下生成，指令为`tsc --init`
## 开发
### 配置参数
ESLint 配置于单独文件中，可自由决定内建规则严格程度、以插件或共享配置的方式扩展规则。详见[eslint.config.js 配置说明](https://eslint.org/docs/latest/use/configure/configuration-files)
### 语言配置选项
Javascript 本身有不同的运行时环境，存在多种全局变量、语法、语言版本的不同，通过`languageOptions`配置可指定项目语言选项。详见[languageOptions 配置说明](https://eslint.org/docs/latest/use/configure/language-options)
### 插件s
- [eslint ruleslist](https://eslint.org/docs/latest/rules/)
- [typescript-eslint shareable configs](https://typescript-eslint.io/users/configs)
- [typescript-eslint ruleslist](https://typescript-eslint.io/rules/)
- [eslint-plugin-react shareable configs](https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#shareable-configs-1)
- [eslint-plugin-react ruleslist](https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules)
- [eslint-plugin-vue shareable configs](https://eslint.vuejs.org/user-guide/#configuration-eslint-config-js)
- [eslint-plugin-vue ruleslist](https://eslint.vuejs.org/rules/)