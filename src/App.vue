<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  @import './style/main.css';
</style>
