<template>
  <div class="app">
    <j-header></j-header>
    <j-container></j-container>
    <j-footer></j-footer>
  </div>
</template>

<script>
import jHeader from './components/j-header.vue'
import jFooter from './components/j-footer.vue'
import jContainer from './components/j-container.vue'
export default {
  name: 'app',
  components: {
    'j-header': jHeader,
    'j-footer': jFooter,
    'j-container': jContainer
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  // 实现 BFC，占全屏
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
