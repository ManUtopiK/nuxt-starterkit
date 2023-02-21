<script setup lang="ts">
import { useQuery } from 'villus'

const hasuraSiteId = ref('1')
const limitQuery = ref(10)
const getPhotos = computed(() => {
  return `
  query getPhotos {
    photos: photo(limit: ${limitQuery.value}) {
      id
      content
    }
  }
`
})

const { data, pending, error, refresh } = await useLazyAsyncData(
  'photos',
  async () => {
    const { execute, isFetching } = useQuery({
      query: getPhotos,
      context: {
        headers: {
          'x-hasura-site-id': hasuraSiteId.value,
        },
      },
    })

    await new Promise(r => setTimeout(r, 2000)) // 2s

    const { data } = await execute()
    return data
  },
)

// const { execute, isFetching } = useQuery({
//   query: getPhotos,
//   fetchOnMount: false,
//   context: {
//     headers: {
//       'x-hasura-site-id': hasuraSiteId.value,
//     },
//   },
// })

// const { data, pending, error, refresh } = await useAsyncData('photos', () => execute())
</script>

<template>
  <div>
    <nuxt-link to="/">
      index
    </nuxt-link>

    <ABtn @click="refresh()">
      refresh
    </ABtn>

    <ul v-if="!pending">
      <li v-for="(photo, i) of data.photos" :key="i">
        {{ photo.id }}
      </li>
    </ul>
    <div v-else>
      Fetching
    </div>
  </div>
</template>
