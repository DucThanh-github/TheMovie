export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const customFetch = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({options }) {
      const headers = (options.headers ||= {});
      if (Array.isArray(headers)) {
        headers.push(['Authorization', `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTY1YTUyNTBjNTBiMmYyYzA3YWIyZmVhOWJmNmU2YSIsIm5iZiI6MTcyMDEwODA2My42OTM5NCwic3ViIjoiNjYzOWE1NWU5NGQ4YTgwMTI2MzNmYThiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gKBNVyHpfoc97EbT9Z-93oaaA-o-vzuehGMnSqsd6y0`])
      } else if (headers instanceof Headers) {
        headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTY1YTUyNTBjNTBiMmYyYzA3YWIyZmVhOWJmNmU2YSIsIm5iZiI6MTcyMDEwODA2My42OTM5NCwic3ViIjoiNjYzOWE1NWU5NGQ4YTgwMTI2MzNmYThiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gKBNVyHpfoc97EbT9Z-93oaaA-o-vzuehGMnSqsd6y0`)
      } else {
        headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTY1YTUyNTBjNTBiMmYyYzA3YWIyZmVhOWJmNmU2YSIsIm5iZiI6MTcyMDEwODA2My42OTM5NCwic3ViIjoiNjYzOWE1NWU5NGQ4YTgwMTI2MzNmYThiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gKBNVyHpfoc97EbT9Z-93oaaA-o-vzuehGMnSqsd6y0`
      }
      },
    
    async onResponseError({ response }) {
      
    },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      customFetch,
    },
  };
});
