<script setup>
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
@mixin btn-border-drawing($color: #ccc, $hover: black,
$width: 2px, $vertical: top, $horizontal: left,
$duration: 0.25s) {
    color: $color;
    box-shadow: inset 0 0 0 $width $color;
    transition: color $duration $duration/3;
    position: relative;

    &::before,
    &::after {
        border: 0 solid transparent;
        box-sizing: border-box;
        content: '';
        pointer-events: none;
        position: absolute;
        width: 0; height: 0;

        #{$vertical}: 0;
        #{$horizontal}: 0;
    }

    &::before {
        $h-side: if($horizontal == 'left', 'right', 'left');
        border-#{$vertical}-width: $width;
        border-#{$h-side}-width: $width;
    }

    &::after {
        $v-side: if($vertical == 'top', 'bottom', 'top');
        border-#{$v-side}-width: $width;
        border-#{$horizontal}-width: $width;
    }
    &:hover {
        color: $hover;

        &::before,
        &::after {
            border-color: $hover;
            transition: border-color 0s, width $duration, height $duration;
            width: 100%;
            height: 100%;
        }
        &::before {
            transition-delay: 0s, 0s, $duration;
        }
        &::after {
            transition-delay: 0s, $duration, 0s;
        }
    }
    

}

.draw-border {
    @include btn-border-drawing(#58add1, #ffe593, 4px, bottom, right)
}

.btn {
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 700 1.2rem;
    letter-spacing: 0.05rem;
    
    &:focus { outline: 2px dotted #55d7dc; }
}

.btn a,
.btn a:hover {
    text-decoration: none;
    list-style: none;
    color: inherit;
}

</style>

<template>
    <main id="navbar" class="navbar">
        <ul id="routes-left" class="nav-sect left">
            <li v-for="(route, index) in left" :key="index" :class="'route-' + index">
                <a :href="route.route" :style="route.style || ''" :class="route.style || 'nav-button'">
                    {{ route.name }}
                </a>
            </li>
        </ul>
        <ul id="routes-center" class="nav-sect center">
            <li v-for="(route, index) in center" :key="index" :class="'nav-button route-' + index">
                <a :href="route.route">
                    {{ route.name }}
                </a>
            </li>
        </ul>
        <ul id="routes-right" class="nav-sect right">
            <li v-for="(route, index) in right" :key="index" :class="'nav-button btn draw-border route-' + index ">
                <a :href="route.route">
                    {{ route.name }}
                </a>
            </li>
        </ul>
    </main>
</template>
