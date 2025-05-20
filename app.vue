<script lang="ts" setup>
const { status, data, close, send } = useWebSocket(
  '/api/websocket',
  {
    autoReconnect: true,
  }
);

onMounted(() => {
  setTimeout(() => {
    send('get-data');
  }, 1000);
});
</script>

<template>
  <div>{{ status }} {{ data || 'No data recieved' }}</div>
</template>