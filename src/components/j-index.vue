<template>
  <div class="j-index">
    <p
      v-for="(item, index) in [1,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8]"
      :key="index"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
