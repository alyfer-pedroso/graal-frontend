export function useStorage() {
  const getData = (key: string) => localStorage.getItem(key);
  const removeData = (key: string) => localStorage.removeItem(key);
  const setData = (key: string, data: string) => localStorage.setItem(key, data);
  const clearAll = () => localStorage.clear();

  return { getData, removeData, setData, clearAll };
}
