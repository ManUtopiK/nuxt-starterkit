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

const { execute, isFetching } = useQuery({
  query: getPhotos,
  fetchOnMount: false,
  context: {
    headers: {
      'x-hasura-site-id': hasuraSiteId.value,
    },
  },
})

const { data, pending, error, refresh } = await useAsyncData('photos', () => execute())
</script>

<template>
  <div>
    <nuxt-link to="/">
      index
    </nuxt-link>

    <p>{{ $t('welcome') }}</p>
    <Icon name="uil:github" />
  </div>
</template>
