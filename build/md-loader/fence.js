// 覆盖默认的 fence 渲染策略
module.exports = md => {
  const fence = md.renderer.rules.fence
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    const rawCode = fence(...args)
    return `
      <div class="j-language-${token.info.trim()}">
        ${rawCode}
      </div>
    `
  }
}
