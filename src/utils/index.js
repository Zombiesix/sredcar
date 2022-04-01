import Vue from 'vue'
import tools from './tools'
import resizeEvent from './resize-event'

const res = {}
Object.keys(tools).forEach(key => {
  res[key] = tools[key]
})
Object.keys(resizeEvent).forEach(key => {
  res[key] = resizeEvent[key]
})

Vue.prototype.$tools = res
