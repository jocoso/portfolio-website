<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import pulsatingButton from '@/components/pulsatingButton.vue';

const routes = ref([
  {name:    'Say Hi!', route: '/contact-me', component: pulsatingButton},
  {name:     'Home', route: '/'},
  {name:     'Blog', route: '/blog'},
  {name:      'Art', route: '/art'},
  {name: 'Projects', route: '/projects'},
])

</script>

<template>
<navbar :right="routes.slice(1)" :left="[routes[0]]"></navbar>
</template>


