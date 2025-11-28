<template>
    <div class="container">
        <p id="menu_name">{{ menuName }}</p>
        <div class="category">
            <p>All</p>
            <p>Milk & Diaries</p>
            <p>Coffees & Teas</p>
            <p>Pet Foods</p>
            <p>Meat</p>
            <p>Vegetables</p>
            <p>Fruits</p>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'MenuBar',
        props: {
            menuName: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>
    .container {
        width: 100%;
        max-width: 1586px;
        display: flex;
        justify-content:space-between;
        align-items: center;
        color: #253D4E;
        font-family: 'Quicksand', sans-serif;
        font-size: 16px;
        font-weight: 100;
        margin-bottom: 45px;
    }

    .category > p:first-child {
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
    }

    #menu_name {
        font-size: 32px;
        font-weight: 700;
    }

    .category {
        display: flex;
        gap: 30px;
    }
</style>