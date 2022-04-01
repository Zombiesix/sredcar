/**
 * 抓取 https://vue3js.cn/interview/ 网址中的目录数据
 * 为网站指定元素注册事件，然后通过事件监听的方式获取指定目录下的数据，最后保存在 window.res 中
 */
window.res = {
  data: []
}
document.getElementsByClassName('sidebar')[0].addEventListener('click', function(e) {
  const target = e.target // 拿到 .sidebar-heading 元素
  const title = target.querySelector('span:first-child').innerHTML // 章节标题
  const content = target.parentElement.querySelector('.sidebar-links')
  if (!content) return
  const as = content.querySelectorAll('li a')
  const list = Array.from(as).map(a => { // 子目录内容
    const href = /[a-z_]+(?=\.html$)/g.exec(a.getAttribute('href'))
    return {
      title: a.innerHTML.trim(),
      // Note：path 可能为 null
      path: href ? href[0] : href
    }
  })
  window.res.data.push({
    name: title.trim(),
    list: list
  })
})
