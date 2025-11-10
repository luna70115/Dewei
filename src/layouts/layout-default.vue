<script setup lang="ts">
import Header from "../components/layout/header.vue";
import Footer from "../components/layout/footer.vue";
import Chat from "@/components/Chat.vue";
</script>

<template>
  <div class="layout-default">
    <Header />
    <Chat />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss">
.layout-default {
  position: relative;
  display: flex;
  flex-direction: column;
  // height: 100vh;
  align-items: center;
  overflow: auto;
  //margin-top: 70px;
}
</style>
