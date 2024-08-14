export const useTestUseQuery = (data:any) => {
  const newData = computed(() => {
    console.log(data)
    return data
  })

  return {newData}
}