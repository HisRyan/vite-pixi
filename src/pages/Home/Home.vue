<!--
 * @create: by haojie.Li
 * @Date: 2024-12-20 11:29:22
 * @For:
-->

<script setup lang="ts">
import {ref} from 'vue';
import i18n from '@/local/lang';
const text = ref(i18n.global.t('车位灯'))
</script>
<template>
  <div class="w-screen h-screen"> 
    <div>{{ text }}</div>
    <div>{{ $t("今天") }}</div>
    <div>{{ $t('确定') }}</div>
    <div>{{ $t('楼层') }}</div>
    <div>{{ $t('区域') }}</div>
    <div>{{ $t('车位号') }}</div>
    <div>{{ $t('车位') }}</div>
    <div>{{ $t('菜单名称') }}</div>
    <div>{{ $t('按钮名称') }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
