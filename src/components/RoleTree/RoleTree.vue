<script setup lang="ts">
import { PropType, toRefs } from "vue";
import { IRoleTree } from "./type.ts";

const props = defineProps({
  treeData: {
    type: Array as PropType<IRoleTree[]>,
    default: () => [],
  },
});

const { treeData } = toRefs(props);
</script>

<template>
  <div>
    <a-tree :tree-data="treeData" checkable> </a-tree>
  </div>
</template>

<style scoped lang="scss"></style>
