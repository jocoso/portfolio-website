<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar/Navbar.vue'
import pulsatingButton from '@/components/pulsatingButton.vue';
import Home from './components/views/Home.vue';

const routes = ref([
  { name: 'Say Hi!', route: '/contact-me', component: pulsatingButton },
  { name: 'Home', route: '/' },
  { name: 'Blog', route: '/blog' },
  { name: 'Art', route: '/art' },
  { name: 'Projects', route: '/projects' },
])

</script>

<template>
  <main id="app">
    <navbar :right="routes.slice(1)" :left="[routes[0]]"></navbar>
    <main id="/">
      <home></home>
    </main>

  </main>
</template>


<style lang="scss">

#app {
  height: 100%;
  width: 100%;
  min-height: max-content;
  background-color: $bg-color;
  display: flex;
  flex-direction: column;
}


</style>