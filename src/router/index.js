import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import MintNft from '@/components/MintNft.vue'

const routes = [
  {
    path: '/',
    name: 'mintNft',
    component: MintNft
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router