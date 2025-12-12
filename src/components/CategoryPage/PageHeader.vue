<template>
    <div class="categoryHeader">
        <div class="header_details"> 
            <p>{{ name }}</p>
            <div class="navigation">
                <p>Home</p>
                <span>
                    <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.940667 8.94267L0 8L3.526 4.47133L0 0.942666L0.943333 0L4.46667 3.52867C4.71663 3.7787 4.85705 4.11778 4.85705 4.47133C4.85705 4.82488 4.71663 5.16396 4.46667 5.414L0.940667 8.94267Z" fill="#B6B6B6"/>
                    </svg>
                </span>
                <p>Categories</p>
                <span>
                    <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.940667 8.94267L0 8L3.526 4.47133L0 0.942666L0.943333 0L4.46667 3.52867C4.71663 3.7787 4.85705 4.11778 4.85705 4.47133C4.85705 4.82488 4.71663 5.16396 4.46667 5.414L0.940667 8.94267Z" fill="#B6B6B6"/>
                    </svg>
                </span>
                <p>{{ name.split(" ").slice(0, 4).join(" ") }}</p>
            </div>
        </div>
        <div class="bgImage1"></div>
        <div class="bgImage2"></div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'PageHeader',
        props: {
            name: String
        }
    }
</script>

<style scoped>
    .categoryHeader {
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        width: 100%;
        height: 235px;
        background-color: #3BB77E33;
        padding-left: 70px;
        border-radius: 20px;
        overflow: hidden;
    }

    .navigation {
        display: flex;
        gap: 11px;
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #7E7E7E;
    }

    .bgImage1, .bgImage2 {
        position: absolute;
        top: 0;
        z-index: 1;
        width: 63%;
        height: 280%;
        opacity: 0.1;
    }

    .bgImage1 {
        margin: -9% 0 0 -27.5%;
        left: 0;
        background: url(@/assets/CategoryView/bgImage1.png) no-repeat center / cover;
    }

    .bgImage2 {
        margin-top: -14.5%;
        right: 0;
        background: url(@/assets/CategoryView/bgImage2.png) no-repeat center / cover;
    }

    .header_details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 17px;
    }

    .header_details > :nth-child(1) {
        font-family: 'Quicksand', sans-serif;
        font-size: 48px;
        font-weight: 700;
        color: #253D4E;
        line-height: 56px;
    }
</style>