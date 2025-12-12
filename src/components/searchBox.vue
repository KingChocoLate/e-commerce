<template>
    <div class="searchBar">
        <div class="category_filter">
            <p>All Categories</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.43686C4.80423 5.4372 4.61032 5.39885 4.42941 5.324C4.24851 5.24916 4.08419 5.1393 3.94588 5.00075L0 1.05412L1.05412 0L5 3.94588L8.94588 0L10 1.05412L6.05412 5C5.91588 5.13869 5.75158 5.24869 5.57067 5.32366C5.38977 5.39863 5.19582 5.4371 5 5.43686Z" fill="#7E7E7E"/>
            </svg>
            <div class="vertical_line"></div>
        </div>
        <input type="search" placeholder="Search for items" class="search_input">
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Search'
    }
</script>

<style scoped>
    .searchBar {
        display: flex;
        align-items: center;
        width: 700px;
        height: 50px;
        border: 2px solid #BCE3C9;
        border-radius: 5px;
        background-color: white;
    }

    .category_filter {
        display: flex;
        align-items: center;
        gap: 14px;
        font-family: 'Quicksand', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #253D4E;
        padding-left: 22px;
    }

    .vertical_line {
        width: 1px;
        height: 15px;
        background-color: #CACACA;
    }

    .search_input {
        border: none;
        outline: 0;
        flex: 1;
        height: 46px;
        padding-left: 14px;
        background: url(@/assets/icons/search_icon.svg) no-repeat right 25px center;
        font-family: 'Lato', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }
</style>