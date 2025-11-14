<template>
    <div class="card" :style="{ backgroundColor: bgColor, backgroundImage: `url(${bgImage})` }">
        <div class="content">
           <p>{{ title }}</p>
           <ModButton :buttonbgColor="ButtonbgColor" @click="shopNow(title)" />
        </div>
    </div>
</template>

<script lang="ts">
    import ModButton from './ModButton.vue';
    export default {
        name: 'Banner',
        components: {
            ModButton
        },
        props: {
            bgColor: {
                type: String,
                default: '#ffffff'
            },
            title: {
                type: String,
                default: ''
            },
            bgImage: {
                type: String,
                default: ''
            },
            ButtonbgColor: {
                type: String,
                default: '#ffffff'
            }

        },

        methods: {
            shopNow(title: string) {
                alert("Let's shop: " + title);
            }
        }
    }
</script>

<style scoped>
    .card {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        max-width: 512px;
        height: 300px;
        border-radius: 10px;
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 75px 0px 79px 48px;
        width: 60%;
        height: 100%;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #253D4E;
    }
</style>