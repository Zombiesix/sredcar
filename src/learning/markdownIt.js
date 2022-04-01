/**
 * 插件 markdown-it-chain、markdown-it-container 源码很久没更新维护了，不考虑使用
 */

/**
 * 空行：表示换行
 * #：h1 标签
 * ##：h2 标签
 * ###：h3 标签
 * 一般正常文本解析为段落 p 标签
 * `` 反引号：code 代码标签
 * [1](2)：解析成 a 标签，1 是文本，2 是跳转的路径
 *
 * 【重点】```javascript  ```、```html  ```：pre 标签内添加一个 code 标签，class 为 language-xxx
 *  除了以上列举，还有 js、json、bash 使用的标签都一样，只是 class 不同
 *
 * | 参数      | 说明          | 类型      | 可选值                           | 默认值  |
 * |---------- |-------------- |---------- |--------------------------------  |-------- |
 * 解析成 table，上面两行必须存在，第一行表示 thead、tr、th，从第三行开始表示 tbody、tr、td
 */
/**
 * markdown-it 中：
 * 1. 通过 require('markdown-it')() 执行获取实例；
 * 2. 也可以添加 options 参数，包含 html、linkify、highlight 函数等；
 * 3. render()：执行转换函数；
 * 4. 通过 use 方法添加插件；
 */

/**
 * markdown-it 的基础使用如下：
 */
// const fs = require('fs')
// let html = ''
// fs.readFile('./markdownIt.md', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('读取文件错误')
//   } else {
//     html = data
//     callback()
//   }
// })
// function callback() {
//   var md = require('markdown-it')({
//     html: true
//   })
//   var res = md.render(html)
//   console.log(res)
// }

/**
 * 添加了 highlight.js 库的使用
 * 功能：高亮代码块（就是 markdown-it 解析后为 <pre><code>......</code></pre> 标签的）
 * 实现：就是将之前只有 pre、code 标签的代码块拆分成很多小块，每个小块都有自己特有的 class，所以可以自定义高亮代码块的样式
 */
const fs = require('fs')
let html = ''
fs.readFile('./markdownIt.md', 'utf-8', (err, data) => {
  if (err) {
    console.log('读取文件错误')
  } else {
    html = data
    callback()
  }
})
function callback() {
  var hljs = require('highlight.js')
  var md = require('markdown-it')({
    html: true,
    highlight: function(str, lang) { // 每遇到一次```language ``` 代码块会调用一次
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, {
            language: lang
          }).value
        } catch (__) {}
      }
      return ''
    }
  })
  var res = md.render(html)
  console.log(res)
}
