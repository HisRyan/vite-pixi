<!--
 * @create: by haojie.Li
 * @Date: 2024-11-01 11:26:07
 * @For: 
-->
<script setup lang="ts">
import { ref } from 'vue';
import { CozeAPI } from '@coze/api';
import axios from 'axios';
const park = ref(null);

const handleClick = async () => {
  const apiClient = new CozeAPI({
    token:
      'pat_CU7ncIFpfclg5CgcueWx9X9SNZXzzbQ1msHf4eb9ntlbYGbtK2KBX9eHo27r2SNg',
    baseURL: 'https://api.coze.cn',
    allowPersonalAccessTokenInBrowser: true
  });
  const res = await apiClient.workflows.runs.stream({
    workflow_id: '7498559991348707369',
    parameters: {
      input: park.value
    }
  });
};

const handleClick2 = async () => {
  await axios.post(
    'https://api.coze.cn/v1/workflow/run',
    {
      workflow_id: '7498559991348707369',
      parameters: {
        input: '222'
      }
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer pat_B9qg0jmTkfrQxnl5clWaiXV777FXEcAoOhfv4gPp2gq4krdj8TXgXD86FZNVr3Rx'
      }
    }
  );
};
</script>

<template>
  <div class="park">
    <a-input v-model="park" />
    <div>
      <a-button @click="handleClick2">对话</a-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
