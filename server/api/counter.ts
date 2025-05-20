const counter = { value: 0 };
export default defineEventHandler((event) => {
  counter.value += 1;
  return counter;
});
