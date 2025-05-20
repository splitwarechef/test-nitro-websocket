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
  <ClientOnly>
    <div>{{ status }} {{ data || 'No data recieved' }}</div>
  </ClientOnly>
</template>