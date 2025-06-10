<script setup lang="ts">
console.log('05 commit');
console.log('test pr');
</script>

<template>
  <a-config-provider>
    <template #renderEmpty>
      <div style="text-align: center">222</div>
    </template>
    <router-view />
  </a-config-provider>
</template>
<style>
body,
html {
  margin: 0;
  padding: 0;
}
</style>
