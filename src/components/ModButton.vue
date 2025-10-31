<template>
    <button :style="{backgroundColor : buttonbgColor}">
        <p>Shop Now</p>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>
</template>

<script lang="ts">
    export default {
        name: 'ModButton',
        props: {
            buttonbgColor: {
                type: String,
                default: '#ffffff',
                required: true
            }
        }
    }
</script>    
<style scoped>
    button {
        width: 110px;
        height: 31px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 5px;
    }

    p {
        font-size: 12px;
        font-weight: bold;
        color: white; 
        font-family: 'quicksand', sans-serif;
    }
</style>