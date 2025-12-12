<template>
    <div class="showcase">
        <div class="showcase_details">
            <div class="text">
                <p>Don't miss amazing grocery deals</p>
                <p>Sign up for the daily newsletter</p>
            </div>
            <div class="input_wrapper">
                <input type="email" id="input_section" placeholder="Your email address">
                <button class="btn">Subscribe</button>
            </div>
        </div>
        <img src="../assets/HomeView/apples.png" alt="">
    </div>
</template>

<script lang="ts">
    export default {
        name: 'ShowCase'
    }
</script>

<style scoped>
    .showcase {
        position: relative;
        width: 100%;
        height: 538px;
        background-color : #FDC04033;
        border-radius: 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 48px;
        overflow: hidden;
    }

    .showcase::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height:100%;
        background: url(@/assets/HomeView/showcase_image.png) no-repeat left top / cover;
        opacity: 0.1;
    }

    .showcase_details {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 68px;
        margin: 103px 0px 0px 97px;
        z-index: 10;
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 33px;
    }

    .text > :nth-child(1) {
        font-family: 'Quicksand', sans-serif;
        font-size: 72px;
        font-weight: 700;
        color: #253D4E;
        width: 727px;
        line-height: 78px;
    }

    .text > :nth-child(2) {
        font-family: 'Lato', sans-serif;
        font-size: 30px;
        font-weight: 400;
        color: #7E7E7E;
    }

    .input_wrapper {
        position: relative;
        width: 442px;
        height: 50px;
    }

    #input_section {
       width: 100%;
       height: 100%;
       border-radius: 30px;
       z-index: 1;
       outline: 0;
       border: none;
       font-family: 'Lato', sans-serif;
       font-size: 12px;
       font-weight: 400;
       color: #B6B6B6;
       background: white url(../assets/icons/message_icon.svg) no-repeat 26px center;
       padding-left: 57px;

    }

    .btn {
        width: 149px;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border-radius: 30px;
        z-index: 10;
        border: none;
        background-color: #3BB77E;
        color: white;
        font-family: 'Quicksand', sans-serif;
        font-size: 16px;
        font-weight: 600;
    }

    img {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: auto;
        height: 538px;
        object-fit: scale-down;

    }
</style>