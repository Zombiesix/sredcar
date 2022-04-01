/**
 * 节流函数
 * @param {*} fn 回调函数
 * @param {*} delay 延时时间
 * @returns
 */
const throttled = function(fn, delay = 500) {
  let timer = null
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}

export default {
  throttled
}
