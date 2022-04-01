<template>
  <div class="j-header">前端小伙伴们</div>
</template>

<script>
export default {
  name: 'JHeader',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.j-header {
  position: fixed;
  top: -40px;
  left: 5%;
  right: 5%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  text-align: center;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 5px 2px #a5a1a1;
  cursor: pointer;
  transition-property: top, border-radius;
  transition-duration: 0.5s;
  transition-timing-function: linear;
  z-index: 999;
}
.j-header:hover {
  top: 0;
  border-radius: 0 0 20px 20px;
}
</style>
