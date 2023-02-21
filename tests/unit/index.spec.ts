import { expect, it } from 'vitest'
import { mountSuspended, registerEndpoint } from 'vitest-environment-nuxt/utils'

import ButtonTest from '~/components/ButtonTest.vue'

it('should work for nuxt', () => {
  const app = useNuxtApp()
  expect(app.$router).toBeDefined()
})

it('unit test', () => {
  expect(typeof window).toBe('object')
})

it('can mock fetch requests', async () => {
  registerEndpoint('https://jsonplaceholder.typicode.com/todos/1', () => ({
    title: 'title from mocked api',
  }))
  const component = await mountSuspended(ButtonTest)
  expect(component.html()).toMatchInlineSnapshot('"<div> test !! </div>"')
})
