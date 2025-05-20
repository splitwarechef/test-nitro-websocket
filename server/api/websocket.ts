import { consola } from 'consola';

const { ready, fail, info } = consola;
export default defineWebSocketHandler({
  open(peer) {
    ready('Connected to peer: ', peer.id);
  },

  async message(peer, message) {
    const config = useRuntimeConfig();
    if (message.text() === 'get-data') {
      await $fetch(`/api/counter`).then(peer.send);
    }
  },

  close(peer, event) {
    info(`Peer \`(${peer.id})\` disconnected. Reason: ${event.code}`);
  },

  error(peer, error) {
    fail('An error occured: ', peer.id, error);
  },
});
