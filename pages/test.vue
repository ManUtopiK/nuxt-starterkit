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

const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  async () => {
    const { data } = await useQuery({
      query: getPhotos,
      context: {
        headers: {
          'x-hasura-site-id': hasuraSiteId.value,
        },
      },
    })
    console.log(data.value)
    return data
  },
)

// const { data } = useQuery({
//   query: getPhotos,
//   context: {
//     headers: {
//       'x-hasura-site-id': hasuraSiteId.value,
//     },
//   },
// })
</script>

<template>
  <div>
    <nuxt-link to="/">
      index
    </nuxt-link>

    <ul v-if="data">
      <li v-for="(photo, i) of data.photos" :key="i">
        {{ photo.id }}
      </li>
    </ul>
  </div>
</template>
