<script setup>
const props = defineProps({
    href: {
        type: String,
        require: true
    }
})
</script>

<style lang="sass" scoped>
.btn:link,
.btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 15px;
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
    background-color:white;
    color: $txt-color;
    border: 5px solid $txt-color;
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
    <a :href="props.href" class="btn btn-style">
        <slot></slot>
    </a>
</template>