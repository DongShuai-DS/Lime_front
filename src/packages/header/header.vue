<template>
  <div class="lime-header">
    <div class="lime-header-leading" v-if="$slots.leading">
      <slot name="leading"></slot>
    </div>
    <div class="lime-header-title">
      <slot></slot>
    </div>
    <div class="lime-header-actions" v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'limeHeader',
};
</script>

<style lang="scss">
.lime-header{
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  line-height: 56px;
  background: red;
}
.lime-header-leading{
  margin-right: auto;
}
.lime-header-title{
  flex: 1;
  text-align: center;
}
.lime-header-actions{
  margin-left: auto;
}
</style>
