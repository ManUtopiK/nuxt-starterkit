<script setup lang="ts">
import { useQuery } from 'villus'

const getPhotos = `
  query getPhotos {
    photos: photo(limit: 10) {
      id
      content
    }
  }
`

const { data } = useQuery({
  query: getPhotos,
})
</script>

<template>
  <div>
    <ul v-if="data.photos">
      <li v-for="(photo, i) of data.photos" :key="i">
        {{ photo.id }}
      </li>
    </ul>
  </div>
</template>
