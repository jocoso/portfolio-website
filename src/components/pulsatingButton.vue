<script setup>
import {defineProps, useAttrs} from 'vue';
const props = defineProps({
    href: {
        type: String,
        require: true
    }
});

const attrs = useAttrs();

</script>

<style lang="sass" scoped>
*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
    
.btn:link,
.btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    transition: all .2s;
    position: absolute;  
}

.btn:hover {
    transform: translateY(-3px);    
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-style {
    border-radius: 15px;
    background-color:white;
    color: $txt-color;
    border: 5px solid $txt-color;
    max-height: 5rem;
    max-width: fit-content;
    padding: 10px 30px;
    font-size: xx-large;
}

.btn::after {
    content:'';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn-style::after {
    background-color: white;
}

.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6); 
    opacity: 0;   
}


</style>

<template>
    <a :href="props.href" v-bind="attrs" :class="['btn', 'btn-style']" :download="props.download ? '' : null">
        <slot></slot>
    </a>
</template>