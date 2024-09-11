<script setup>
    import pulsatingButton from '../pulsatingButton.vue';
</script>

<template>
     <div class="homepage">
        <div class="hero">
            <h1>My name is <span class="name">Josh</span>. I am a developer, a teacher and an artist.</h1>
            <pulsating-button 
            href="../../assets/joshuaCollado-Resume.pdf" download>Download My Resume</pulsating-button>
        </div>
        <div class="avatar">    
            <img 
                src="../../assets/josh-collado-canvas.jpg" 
                alt=""
                >
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .homepage {
        margin: auto;
        width: 80%;
        min-height: 80vh;
        display: flex;
        justify-content: center;
    }
    .homepage .avatar {
        border: 5px solid $primary-color;
        width:50vw;
        height: 50vh;
        overflow: -moz-hidden-unscrollable;
        overflow: hidden;
        border-radius: 2rem;
        margin: auto;

        & img {
            min-height: 100%;
            max-width: 100%;
            
        }
        
    }

    .homepage .hero {
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-style: normal;
        padding: 50px;
        text-align: left;
        font-size: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .btn {
            display: block;
            position: relative;
        
        }

        & .name {
            color: $highlight-color;
        }
    }
    
</style>