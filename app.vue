<script setup>
import { useClient } from 'villus'

// function authPlugin({ opContext }) {
//   // opContext.headers.Authorization = 'Bearer <token>'
//   opContext.headers['x-hasura-site-id'] = 1
// }

useClient({
  url: 'https://graphql.dev.97px.fr/v1/graphql', // your endpoint.
  // use: [authPlugin, ...defaultPlugins()], // add the auth plugin alongside the default plugins
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
