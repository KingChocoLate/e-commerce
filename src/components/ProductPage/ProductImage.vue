<template>
    <div class="overall">
        <div class="image_display">
            <div class="search">
                <img  src="@/assets/icons/search_icon.svg" alt="">
            </div>
            <div class="image_card">
                <img :src="image" alt="">
            </div>
        </div>

        <div class="switchProduct">
            <button @click="move_backward">
                <svg :style="{transform: 'scaleX(-1)'}" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.414 4.293L8.121 0L6.707 1.414L10 4.707H0V6.707H10L6.707 10L8.121 11.414L12.414 7.121C12.7889 6.74594 12.9996 6.23733 12.9996 5.707C12.9996 5.17667 12.7889 4.66806 12.414 4.293Z" fill="#7E7E7E"/>
                </svg>
            </button>
            
            <div class="image_choosing">
                <div class="individual_img" v-for="(prod, index) in products" :key="index" @click="activeIndex = index" :class="{ active: activeIndex === index}">
                    <RouterLink :to="{name: 'product', params: {productId: index}}">
                        <img :src="prod.image" alt="">
                    </RouterLink>
                </div>
            </div>
            <button @click="move_forward">
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.414 4.293L8.121 0L6.707 1.414L10 4.707H0V6.707H10L6.707 10L8.121 11.414L12.414 7.121C12.7889 6.74594 12.9996 6.23733 12.9996 5.707C12.9996 5.17667 12.7889 4.66806 12.414 4.293Z" fill="#7E7E7E"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import type { Products } from '@/stores/productStore.ts'
    export default {
        name: 'ProductImage',

        data() {
            return {
                activeIndex: this.index
            }
        },

        props: {
            image: String,
            products: {
                type: Array as () => Products[],
                default: () => []
            },
            index: Number
        },

        methods: {
            move_backward() {
                this.$refs.image_choosing.value.style.transform = 'translate(-142.6px, 0px)';
            },
            move_forward() {
                this.$refs.image_choosing.value.style.transform = 'translate(-142.6px, 0px)';
            }
        }
    }
</script>

<style scoped>
    .overall {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        min-width: 865.16px;
        height: auto;
    }

    .image_display {
        display: flex;
        flex-direction: column;
        padding: 0px 40px;
        border: 1px solid #E5E5E5;
        border-radius: 15px;
    }

    .search {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;
    }

    .image_card {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        margin-top: 82px;
        margin-bottom: 112px;
    }


    .image_card img {
        width: 700px;
    }
    .switchProduct {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    button {
        width: 40px;
        height: 40px;
        border-radius: 30px;
        border: none;
        background-color: #F2F3F4;
    }
    
    .image_choosing {
        display: flex;
        gap: 25px;
        justify-content: space-between;
        height: 117.6px;
        max-width: calc((117.6px + 25px)* 4 - 25px);
        overflow: hidden;
        margin-top: 25px;
    }

    .individual_img {
        width: 117.6px;
        height: 100%;
        border: 1px solid #F2F3F4;
        border-radius: 15px;
        flex-shrink: 0;
    }

    .individual_img a {
        width: 117.6px;
        height: 100%;
    }

    .individual_img:hover {
        border: 1px solid #3BB77E;
    }

    .individual_img img {
        width: 100%;
        height: 100%;
        object-fit: contain;

    }

    .active {
        border: 1px solid #3BB77E;
    }

</style>