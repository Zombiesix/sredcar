<template>
  <div class="j-sider">
    <!-- 搜索框 -->
    <!-- <j-select slot="prepend"></j-select>
    <j-button
      slot="append"
      icon="icon-search"
    ></j-button> -->
    <!-- <j-search
      placeholder="请输入关键字"
    ></j-search> -->
    <!-- 自定义滚动条 -->
    <div
      class="j-def-scroll"
      :style="{ height: height + 'px', top: top + 40 + 'px' }"
    ></div>
    <div
      ref="j-scroll-container"
      class="j-scroll-container"
    >
      <ul
        v-for="(ul, index) in navList"
        :key="index"
      >
        <h2>{{ ul.name }}</h2>
        <li
          v-for="(li, ind) in ul.list"
          :key="ind"
          @click="clickNav(li.path)"
        >
          {{ li.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navConfig from '@/router/nav.config.json'
import JSearch from './j-search.vue'
// import JButton from './j-button.vue'
// import JSelect from './j-select.vue'

export default {
  name: 'JSider',
  components: {
    'j-search': JSearch
    // 'j-button': JButton,
    // 'j-select': JSelect
  },
  data() {
    return {
      navList: Object.freeze(navConfig.data),
      height: 0,
      top: 0
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      // 自定义滚动条的处理
      const that = this
      const targetEle = this.$refs['j-scroll-container']
      this.height = targetEle.clientHeight * (targetEle.clientHeight - 40) / targetEle.scrollHeight
      targetEle.addEventListener('scroll', this.$tools.throttled(this.scrollHandler.bind(this), 20))
      this.$tools.addResizeListener(this.$el, function(e) {
        that.height = targetEle.clientHeight * (targetEle.clientHeight - 40) / targetEle.scrollHeight
      })
    })
  },
  // 销毁事件
  destroyed() {
  },
  methods: {
    scrollHandler(e) {
      const target = e.target
      this.top = (
        (target.scrollTop + target.clientHeight) * (target.clientHeight - 40) / target.scrollHeight
      ) - this.height
    },
    /**
     * 导路由导航跳转
     */
    clickNav(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.j-sider {
  // 整体布局
  flex-basis: 20%;
  border-right: 1px solid #aaa;
  background-color: #fff;
  // 自定义滚动条
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
  top: 40px;
}
.j-scroll-container {
  height: 100%;
  box-sizing: border-box;
  padding: 40px 10% 0;
  overflow: auto;
  margin-right: -17px;
  ul {
    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 1rem 0;
    }
    li {
      padding-left: 0.5rem;
      margin-bottom: 0.5rem;
      cursor: pointer;
      &:hover {
        color: #7468ff;
      }
    }
  }
}

</style>
