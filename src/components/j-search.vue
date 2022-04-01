<template>
  <div
    :class="[
      'j-input'
    ]"
  >
    <!-- 前置元素 -->
    <div
      v-if="$slots.prepend"
      class="j-input-group__prepend"
    >
      <slot name="prepend"></slot>
    </div>
    <!-- input 输入框 -->
    <input
      type="text"
      class="j-input__inner"
      :placeholder="placeholder"
      @keyup.enter="search"
    >
    <!-- 后置元素 -->
    <div
      v-if="$slots.append"
      class="j-input-group__append"
    >
      <slot name="append"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JInput',

  componentName: 'JInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    serach() {
      console.log()
    }
  }
}
</script>

<style lang="scss" scoped>
.j-input {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #cdcdcd;
  border-radius: 0.2rem;
  height: 2.5rem;
  cursor: pointer;
  text-align: center;
}
.j-input-group__prepend {
  height: 100%;
}
.j-input__inner {
  height: 100%;
  padding: 0 0.3rem;
  outline: none;
  border: 1px solid #cdcdcd;
  flex-grow: 1;
}
.j-input-group__append {
  background-color: #f5f7fa;
  height: 100%;
}
</style>
