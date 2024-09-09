<script setup>
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
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";

.navbar {
    display: grid;
    grid-template-areas: "left center right"; // Define three sections: left, center, and right
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    font-size: xx-large;
    padding: 0 30px;
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


</style>

<template>
    <main id="navbar" class="navbar">
        <ul id="routes-left" class="nav-sect left">
            <li v-for="(route, index) in left" :key="index" :class="'route-' + index">
                <drowning-button v-if="!route.component" :href="route.route" :style="route.style || ''" :class="route.style || 'nav-button'">
                    {{ route.name }}
                </drowning-button>
                <component v-else :href="route.route" :is="route.component">{{  route.name  }}</component>
            </li>
        </ul>
        <ul id="routes-center" class="nav-sect center">
            <li v-for="(route, index) in center" :key="index" :class="'nav-button route-' + index">
                <drowning-button :href="route.route">
                    {{ route.name }}
                </drowning-button>
            </li>
        </ul>
        <ul id="routes-right" class="nav-sect right">
            <li v-for="(route, index) in right" :key="index" :class="'nav-button btn draw-border route-' + index ">
                <drowning-button :href="route.route">
                    {{ route.name }}
                </drowning-button>
            </li>
        </ul>
    </main>
</template>
