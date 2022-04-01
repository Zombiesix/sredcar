<template>
  <div class="j-container">
    <j-sider></j-sider>
    <div class="j-content">
      <div
        class="j-def-scroll"
        :style="{ height: height + 'px', top: top + 'px' }"
      ></div>
      <div
        ref="j-scroll-container"
        class="j-scroll-container"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import jSider from './j-sider.vue'
export default {
  name: 'JContainer',
  components: {
    'j-sider': jSider
  },
  data() {
    return {
      height: 0,
      top: 0
    }
  },
  mounted() {
    // 自定义滚动条的处理
    const that = this
    const targetEle = this.$refs['j-scroll-container']
    targetEle.addEventListener('scroll', this.$tools.throttled(this.scrollHandler.bind(this), 20))
    this.$tools.addResizeListener(this.$el, function(e) {
      that.height = targetEle.clientHeight * targetEle.clientHeight / targetEle.scrollHeight
    })
    setTimeout(() => {
      console.log(targetEle.scrollHeight)
      this.height = targetEle.clientHeight * targetEle.clientHeight / targetEle.scrollHeight
    }, 0)
  },
  methods: {
    scrollHandler(e) {
      const target = e.target
      this.top = (
        (target.scrollTop + target.clientHeight) * target.clientHeight / target.scrollHeight
      ) - this.height
    }
  }
}
</script>

<style lang="scss" scoped>
.j-container {
  // 整块布局
  width: 100%;
  height: 100%;
  // 内部结构
  display: flex;
}
.j-content {
  // 整体布局
  flex-basis: 80%;
  background-color: #fff;
  position: relative;
}
// 自定义滚动条
.j-def-scroll {
  width: 10px;
  height: 100px;
  border-radius: 5px;
  background-color: #aaa;
  position: absolute;
  right: 0;
  top: 0;
}
.j-scroll-container {
  height: 100%;
  box-sizing: border-box;
  padding: 40px 10% 0;
  overflow: auto;
  margin-right: -17px;
}
</style>
