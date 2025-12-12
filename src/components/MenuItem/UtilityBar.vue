<template>
    <div class="utility_bar">
        <div>
            <img src="@/assets/icons/utility_icons/user_icon.svg" alt="">
            <p>Account</p>
        </div>

        <div>
            <img src="@/assets/icons/utility_icons/compare_icon.svg" alt="">
            <p>Compare</p>
        </div>

        <div>
            <img src="@/assets/icons/utility_icons/wishlist_icon.svg" alt="">
            <p>Wishlist</p>
        </div>

        <div>
            <img src="@/assets/icons/utility_icons/cart_icon.svg" alt="">
            <p>Cart</p>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'UtilityBar'
    }
</script>

<style scoped>
    .utility_bar {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .utility_bar div {
        display: flex;
        align-items: center;
        gap: 5px;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #7E7E7E;
    }
</style>