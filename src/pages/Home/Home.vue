<!--
 * @create: by haojie.Li
 * @Date: 2024-12-20 11:29:22
 * @For:
-->

<script setup lang="ts" name="Home">
import i18n from "@/local/lang";
const text = ref(i18n.global.t("车位灯"));
const d = computed(() => {
  return 1;
});
const dd = () => {
  return 1;
};
</script>
<template>
  <div class="w-screen h-screen root">
    <div @click="dd">{{ text }}</div>
    <div>{{ $t("今天") }}</div>
    <div>{{ $t("确定") }}</div>
    <div>{{ $t("楼层") }}</div>
    <div>{{ $t("区域") }}</div>
    <div>{{ $t("车位号") }}</div>
    <div>{{ $t("车位") }}</div>
    <div>{{ $t("菜单名称") }}</div>
    <div>{{ $t("按钮名称") }}</div>
  </div>
</template>

<style scoped lang="less">
.root {
  color: @primary-color;
}
</style>
