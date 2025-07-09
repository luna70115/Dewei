<script setup lang="ts">
import Header from "../components/layout/header.vue";
</script>

<template>
  <div class="layout-default">
    <Header />
    <slot />
  </div>
</template>

<style lang="scss">
.layout-default {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
}
</style>
