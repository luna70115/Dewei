<script setup lang="ts">
import axios from "@/axios";
// import { awaitAxios } from "@/axios";
defineOptions({
  layout: "layout-default"
});

const { t } = useI18n();

/** axios範例用法 */
const test = async () => {
  console.log("test12");
  const res = await axios.get("/api/get", { params: { name: "test" } });
  // const res = await awaitAxios("post", "/api/example", { nam1e: "test" });
  console.log(res, "res");
};
test();
</script>

<template>
  <div>
    <q-card class="home-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />

      <q-card-section>
        <div class="text-h6">9MMMMMMMM</div>
        <div class="text-subtitle2">電腦電腦電腦電腦電腦</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ t("global.hello") }}
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.home-card {
  margin: 20px;
  width: 400px;
  background: #eeeeee;
  color: $primary-color;
}

.box {
  border-radius: 28px;
  border: #ffffff 5px solid;
  box-shadow: #e2a307 0.5px 0.5px 0.5px;
}
</style>
