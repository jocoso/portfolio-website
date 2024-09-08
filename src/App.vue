<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'

const routes = ref([
  {name:    'About', route: '/about', style:{
    color: 'red'
  }},
  {name:     'Home', route: '/'},
  {name:     'Blog', route: '/blog'},
  {name:      'Art', route: '/art'},
  {name: 'Projects', route: '/projects'},
])

</script>

<template>
<navbar :right="routes.slice(1)" :left="[routes[0]]"></navbar>
</template>


