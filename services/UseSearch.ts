import { useMutation, useQuery } from "@tanstack/vue-query";
import { TTrendMovie } from "~/types/movie";
export const searchTrendMovie = (query: Ref<string>, timeType: string) => {
    const {$customFetch} = useNuxtApp()
    console.log(query)
  return useQuery<TTrendMovie[]>({
    queryKey: [query,timeType],
    queryFn: async() =>  $customFetch(`trending/movie/${timeType}`, {
        query: {
          query: query.value
        }
      }),
      enabled:false,


      // staleTime: 1000*60
      // select: data => data
      gcTime: 0
  });
};

// export const updateSearch = (query) => {
//   const {$customFetch} = useNuxtApp()

//   return useMutation({
//     mutationFn: async $customFetch(`movie/${movie_id}/rating`)
//   })
// }

