/**
 * 自动化创建 md 菜单目录文件
 * 使用：
 *  当修改了 router/nav.config.json 配置文件时，可以运行这个文件，用来使用 demo.md 模板创建新增菜单文件
 */
const fs = require('fs')
const path = require('path')
const targetdDir = path.join(__dirname, '../src/docs/') // 目标文件夹地址
const demoPath = targetdDir + 'demo.md' // 模板文件地址
const navPath = path.join(__dirname, '../src/router/nav.config.json') // 导航菜单地址

// 公用方法 - 读取文件内容方法
function rf(path, callback) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    } else {
      callback(data)
    }
  })
}

// 模板文件内容
let demoData = ''
rf(demoPath, res => {
  if (!res) {
    console.warn('demo.md模板文件不存在')
  } else {
    // 读取菜单目录 json 文件
    rf(navPath, finish)
    demoData = res
  }
})

const errorList = [] // 错误列表
// 读取文件后，对文件内容进行处理
function finish(res) {
  if (!res) return
  if (typeof res === 'string') res = JSON.parse(res)
  res.data.forEach(item => {
    if (!item.list || !item.list.length) return false
    item.list.forEach(it => {
      if (!it.path || !it.title) errorList.push(it)
      // 【重点：防止已有的内容被重写了】先判断文件是否存在，存在不进行创建
      if (fs.existsSync(targetdDir + it.path + '.md')) return false
      createFile(it)
    })
  })
  console.warn(!errorList.length ? '未发现错误，已完成操作' : errorList) // 输出错误列表
}

// 具体的创建文件方法
function createFile({ title, path }) {
  fs.writeFile(targetdDir + path + '.md', demoData.replace(/{{title}}/g, title), err => {
    if (err) {
      console.warn(`写入${path}文件失败`)
    } else {
      console.log(`文件${path}创建完成...`)
    }
  })
}
