<script setup lang="ts">
import { onMounted } from "vue";
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";

onMounted(() => {
  initMDB({ Dropdown, Ripple });
});
</script>

<template>
  <div>首頁</div>
</template>
