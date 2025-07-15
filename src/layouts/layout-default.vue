<script setup lang="ts">
import Header from "../components/layout/header.vue";
import Footer from "../components/layout/footer.vue";
</script>

<template>
  <div class="layout-default">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss">
.layout-default {
  display: flex;
  flex-direction: column;
  // height: 100vh;
  align-items: center;
  overflow: auto;
}
</style>
