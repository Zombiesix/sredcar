/**
 * 1. 主要通过 mardown-it 进行解析 md 文件，转换为 html、javascript、js、bash 等格式
 * 2. 借助 highlight.js 库实现代码块高亮处理
 *
 * 3. 需要为代码块加上一个自定义的容器，方便代码维护，如何加呢！
 */
const overWriteFenceRule = require('./fence')
const { default: hljs } = require('highlight.js')
const md = require('markdown-it')({
  highlight: function(str, lang) {
    if (!str) return ''
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

/**
 * 重写规则，修改 md 的渲染函数 render 的输出结构，类似拦截
 */
overWriteFenceRule(md)

module.exports = function(source) {
  const content = md.render(source)
  return `
    <template>
      <div class="j-md-doc">
        ${content}
      </div>
    </template>
  `
}
