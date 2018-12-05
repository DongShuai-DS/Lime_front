<template>
  <div id="app">
    <router-view></router-view>
    <lime-bottom-nav v-model="currentIndex" fixedTheme="active">
      <lime-bottom-item index="home">首页</lime-bottom-item>
      <lime-bottom-item index="tip">贴士</lime-bottom-item>
      <lime-bottom-item index="photo">拍照</lime-bottom-item>
      <lime-bottom-item index="message">消息</lime-bottom-item>
      <lime-bottom-item index="my">我的</lime-bottom-item>
    </lime-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentIndex: 'home',
    };
  },
};
</script>


<style lang="scss">
*, *::after, *::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
