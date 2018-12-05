<template>
  <div class="lime-bottom-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'limeBottomNav',
  props: {
    value: {
      type: [String, Number],
    },
    fixedTheme: {
      type: String,
    },
  },
  watch: {
    value(val) {
      this.$router.push({ name: val });
    },
  },
  methods: {
    handleChange(index) {
      this.$emit('input', index);
    },
  },
};
</script>

<style lang="scss">
.lime-bottom-nav{
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 15px;
  background: orange;
}
.active{
  background: red;
}
</style>
