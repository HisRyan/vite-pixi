<!--
 * @create: by haojie.Li
 * @Date: 2024-12-20 11:29:22
 * @For:
-->
<script setup lang="ts">
import { ref } from "vue";
import { showLoading, hideLoading } from "@c/showLoading";

const root = ref();
const open = () => {
  showLoading(root.value);
  setTimeout(() => {
    hideLoading(root.value);
  }, 1000);
};
</script>
<template>
  <div class="root" ref="root">
    <a-button type="primary" @click="open">开启弹窗</a-button>
  </div>
</template>

<style scoped lang="scss">
.root {
  margin: auto;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
}
</style>
