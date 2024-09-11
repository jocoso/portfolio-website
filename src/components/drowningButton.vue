<script setup>
import { defineProps, useAttrs } from 'vue';

const props = defineProps({
    href: {
        type: String,
        required: true
    }
});
const attrs = useAttrs();

console.log(attrs)

</script>

<style lang="sass" scoped>
*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.btn {
    margin-top: 50px;
    text-align: center;
    border-radius: 30px;
}

$borderW: 2px;

.blob-btn {
    $numOfBlobs: 4;
    z-index: 1;
    position: relative;
    padding: 20px 46px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    color: $txt-color;
    font-weight: bold;
    background-color: transparent;
    outline: none;
    border: none;
    transition: color 0.5s;
    cursor: pointer;
    border-radius: 30px;

    &:before {
        content: "";
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        
        transition: all 0.3s 0.2s;
    }

    &:after {
        content: '';
        z-index: -2;
        position: absolute;
        left: $borderW*1.5;
        top: $borderW*1.5;
        width: 100%;
        height: 100%;

        transition: all 0.3s 0.2s;        
    }

    &:hover {
        color: white;
        
        &:after {
            transition: all 0.3s;
            left: 0;
            top: 0;  
        }
    }

    &__inner {
        z-index: -1;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: transparent;
    }

    &__blobs {
        position: relative;
        display: block;
        height: 100%;
        filter: url('#goo');
    }
    &__blob {
        position: absolute;
        top: $borderW;
        width: 100% / $numOfBlobs;
        height: 100%;
        background: $txt-color;        
        transform: translate3d(0, 150%, 0) scale(1.7);
        transition: transform 0.45s;

        @supports(filter: url('#goo')) {
            transform: translate3d(0, 150%, 0) scale(1.4);
        }
        
        @for $i from 1 through $numOfBlobs {
            &:nth-child(#{$i}) {
                left: ($i - 1) * (120% / $numOfBlobs);
                transition-delay: ($i - 1) * 0.08s;
            }
        }

        .blob-btn:hover & {
            transform: translateZ(0) scale(1.7);

            @supports(filter: url('#goo')) {
                transform: translateZ(0) scale(1.4);
            }    
        }
    }
}

</style>

<template>
    <a :href="href" v-bind:="attrs" :class="[attrs.class, 'blob-btn']" aria-label="Interactive button">
        <slot></slot>
        <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
            </span>
        </span>
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
</svg>

</template>