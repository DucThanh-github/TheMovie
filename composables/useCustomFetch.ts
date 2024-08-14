
export async function useCustomFetch(api: string, options:any = {}) {
  const config = useRuntimeConfig();

  const publicApi = config.public.apiBase;
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTY1YTUyNTBjNTBiMmYyYzA3YWIyZmVhOWJmNmU2YSIsIm5iZiI6MTcyMDEwODA2My42OTM5NCwic3ViIjoiNjYzOWE1NWU5NGQ4YTgwMTI2MzNmYThiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gKBNVyHpfoc97EbT9Z-93oaaA-o-vzuehGMnSqsd6y0"
    }
  }
  const { data, error } = await useFetch(`${publicApi}/${api}`, {...options, ...defaultOptions});
// console.log(data);
  return { data, error };
}
