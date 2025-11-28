<template>
    <div :class="{'hasBorder': bordered}" class="card" :style="{ backgroundColor : bgColor}">
        <img id="category-image" :src="image" alt="">
        <p id="category-name">{{ categoryName }}</p>
        <p id="category-num">{{ num }} items</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Category',
    props: {
        categoryName: {
            type: String,
            required: true
        },
        num: {
            type: Number,
            required: true
        },

        bgColor: {
            type: String,
            default: '#ffffff'
        },
        image: {
            type: String,
            default: ''
        },
        bordered: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .card {
        width: 100%;
        max-width: 137px;
        height: 177px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .hasBorder {
        border: 1px solid #81B13D;
        box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.07);
    }
    #category-image {
        width: 120px;
        height: 120px;
    }
    #category-name {
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: rgba(37, 61, 78, 1);
    }

    #category-num {
        font-family: 'Lato', sans-serif;
        font-size: 12px;
        color: rgba(182, 182, 182, 1);
    }
</style>