<template>
    <div class="nav_bar">
        <p>Home</p>
        <div>
            <p>Food</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.43686C4.80423 5.4372 4.61032 5.39885 4.42941 5.324C4.24851 5.24916 4.08419 5.1393 3.94588 5.00075L0 1.05412L1.05412 0L5 3.94588L8.94588 0L10 1.05412L6.05412 5C5.91588 5.13869 5.75158 5.24869 5.57067 5.32366C5.38977 5.39863 5.19582 5.4371 5 5.43686Z" fill="#7E7E7E"/>
            </svg>
        </div>
        <div>
            <p>Vegetables</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.43686C4.80423 5.4372 4.61032 5.39885 4.42941 5.324C4.24851 5.24916 4.08419 5.1393 3.94588 5.00075L0 1.05412L1.05412 0L5 3.94588L8.94588 0L10 1.05412L6.05412 5C5.91588 5.13869 5.75158 5.24869 5.57067 5.32366C5.38977 5.39863 5.19582 5.4371 5 5.43686Z" fill="#7E7E7E"/>
            </svg>
        </div>
        <p>Drink</p>
        <p>Cookies</p>
        <div>
            <p>Meat & Seafood</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.43686C4.80423 5.4372 4.61032 5.39885 4.42941 5.324C4.24851 5.24916 4.08419 5.1393 3.94588 5.00075L0 1.05412L1.05412 0L5 3.94588L8.94588 0L10 1.05412L6.05412 5C5.91588 5.13869 5.75158 5.24869 5.57067 5.32366C5.38977 5.39863 5.19582 5.4371 5 5.43686Z" fill="#7E7E7E"/>
            </svg>
        </div>
        <p>Bakery</p>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
    .nav_bar {
        display: flex;
        align-items: center;
        gap: 40px;
        font-family: 'Quicksand', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #253D4E;
    }

    .nav_bar div {
        display: flex;
        align-items: center;
        gap: 5px;
    }
</style>