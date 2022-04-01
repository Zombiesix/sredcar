<template>
  <button
    class="j-button"
    @click="handleClick"
  >
    <i
      v-if="icon"
      :class="['iconfont', icon]"
    ></i>
  </button>
</template>

<script>
export default {
  name: 'JButton',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.j-button {
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
}
</style>
