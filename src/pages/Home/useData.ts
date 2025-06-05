export function useData(data: any) {
  const a = ref(1);
  const getA = () => {
    console.log("data", unref(data));
    a.value = unref(data);
  };
  watchEffect(() => {
    getA();
  });
  return {
    a,
  };
}
