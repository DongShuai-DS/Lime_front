<template>
  <div class="lime-bottom-item" @click="handleClick" :class="[activeValue === index ? activeTheme : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'limeBottomItem',
  props: {
    index: {
      type: [String, Number],
    },
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    iconSize: {
      type: Number,
    },
  },
  computed: {
    activeValue() {
      return this.$parent.value;
    },
    activeTheme() {
      return this.$parent.fixedTheme;
    },
  },
  methods: {
    handleClick() {
      this.$parent.handleChange(this.index);
    },
  },
};
</script>

<style lang="scss">

</style>
