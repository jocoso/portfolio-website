<script setup>
import {ref, computed} from 'vue';
import {useRoute} from 'vue-router';
import drowningButton from '@/components/drowningButton.vue';
// Destructure 'left' 'center' 'right' properties.
// Routes are expected to be in arrays for each section in the navbar.
// If these properties are not passed, they default to empty arrays.
const { left, center, right } = defineProps({
    left: {
        type: Array,
        required: false,
        default: () => [],
    },
    center: {
        type: Array,
        required: false,
        default: () => [],
    },
    right: {
        type: Array,
        required: false,
        default: () => [],
    },
}) // An object array.

const route = useRoute();
const isActiveRoute = (routePath) => {
      computed(() => route.path === routePath);
    }
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";

.navbar {
    display: grid;
    grid-template-areas: "left center right"; // Define three sections: left, center, and right
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    font-size: xx-large;
    height: 15rem;
    overflow: hidden;
}

.nav-sect {
    display: flex;
    list-style: none;
    padding: 30px;
    margin: 0;
    align-items: center;
    height:fit-content;
    width: 100%;
}


.left {
    grid-area: left;
    justify-content: flex-start;
}

.center {
    grid-area: center;
    justify-content: center;
}

.right {
    grid-area: right;
    justify-content: flex-end;
}

.nav-button.active, .btn.active {
    background-color: $txt-color;
    color: white;
}

</style>

<template>
    <main id="navbar" class="navbar">
        <ul id="routes-left" class="nav-sect left">
            <li v-for="(routeItem, index) in left" :key="routeItem.route" :class="'route-' + index">
                <drowning-button 
                    v-if="!routeItem.component" 
                    :href="routeItem.route" 
                    :style="routeItem.style || ''" 
                    :class="['nav-button', {active: isActiveRoute(routeItem.route)}]">
                    {{ routeItem.name }}
                </drowning-button>
                <component
                    v-else 
                    :is="routeItem.component"
                    :href="routeItem.route" 
                    :style="routeItem.style"
                    :class="['nav-button ', {active: isActiveRoute(routeItem.route)}]"
                    >
                    {{  routeItem.name  }}
                </component>
            </li>
        </ul>
        <ul id="routes-center" class="nav-sect center">
            <li v-for="(routeItem, index) in center" :key="index" :class="'nav-button route-' + index">
                <drowning-button 
                    v-if="!routeItem.component" 
                    :href="routeItem.route" 
                    :style="routeItem.style || ''" 
                    :class="[routeItem.style || 'nav-button', {active: isActiveRoute(routeItem.route)}]">
                    {{ routeItem.name }}
                </drowning-button>
                <component
                    v-else 
                    :is="routeItem.component"
                    :href="routeItem.route" 
                    :class="{active: isActiveRoute(routeItem.route)}"
                    >
                    {{  routeItem.name  }}
                </component>
            </li>
        </ul>
        <ul id="routes-right" class="nav-sect right">
            <li v-for="(routeItem, index) in right" :key="index" :class="'nav-button btn draw-border route-' + index ">
                <drowning-button 
                    v-if="!routeItem.component" 
                    :href="routeItem.route" 
                    :style="routeItem.style || ''" 
                    :class="[routeItem.style || 'nav-button', {active: isActiveRoute(routeItem.route)}]">
                    {{ routeItem.name }}
                </drowning-button>
                <component
                    v-else 
                    :is="routeItem.component"
                    :href="routeItem.route" 
                    :class="{active: isActiveRoute(routeItem.route)}"
                    >
                    {{  routeItem.name  }}
                </component>
            </li>
        </ul>
    </main>
</template>
