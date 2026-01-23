<template>
    <div class="product_display">
        <div class="navigation">
            <p>Home</p>
            <span>
                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.940667 8.94267L0 8L3.526 4.47133L0 0.942666L0.943333 0L4.46667 3.52867C4.71663 3.7787 4.85705 4.11778 4.85705 4.47133C4.85705 4.82488 4.71663 5.16396 4.46667 5.414L0.940667 8.94267Z" fill="#B6B6B6"/>
                </svg>
            </span>
            <p>Vegetables & tubers</p>
            <span>
                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.940667 8.94267L0 8L3.526 4.47133L0 0.942666L0.943333 0L4.46667 3.52867C4.71663 3.7787 4.85705 4.11778 4.85705 4.47133C4.85705 4.82488 4.71663 5.16396 4.46667 5.414L0.940667 8.94267Z" fill="#B6B6B6"/>
                </svg>
            </span>
            <p v-if="product">{{ product.name.split(" ").slice(0, 4).join(" ") }}</p>
        </div>
        <div class="product">
            <ProductImage v-if="product" :image="product.image" :products="products" :index="Number($route.params.productId)"/>
            <ProductDetail v-if="product" :title="product.name" :rating="product.rating" :price="product.price" :promotionAsPercentage="product.promotionAsPercentage"/>
        </div>

    </div>

    <div class="moreInfo">
        <div class="btn">
            <button @click="activeIndex = 0" :class="{ active: activeIndex ===  0}">Description</button>
            <button @click="activeIndex = 1" :class="{ active: activeIndex ===  1}">Additional Info</button>
            <button @click="activeIndex = 2" :class="{ active: activeIndex ===  2}">Review (3)</button>
        </div>

        <p v-if="activeIndex === 0">
            Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
            <br><br>
            Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. 
        </p>

    </div>
    
</template>

<script lang="ts">
import ProductDetail from '@/components/ProductPage/ProductDetail.vue';
import ProductImage from '@/components/ProductPage/ProductImage.vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/productStore';
import { onMounted } from 'vue';
    export default {
        name: 'product',
        data() {
            return {
                activeIndex: 0
            }
        },
        components: {
            ProductDetail,
            ProductImage
        },

        setup() {
            const productStore = useProductStore();
            const {products}  = storeToRefs(productStore);

            onMounted(() => {
                    productStore.fetchproducts(); 
            })
            return {products};
        },

        computed: {
            product() {
                const index = Number(this.$route.params.productId);
                return this.products.find(p => p.id === index+1)
            }
        }
    }
</script>

<style scoped>
    .product_display {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 25px;
    }

    .navigation {
        display: flex;
        gap: 15px;
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #7E7E7E;
    }

    .navigation > :nth-child(5) {
        color: #3BB77E;
    }

    .product {
        display: flex;
        gap: 50px;
    }

    .moreInfo {
        width: 100%;
        min-height: 324px;
        border: 1px solid #F2F3F4;
        border-radius: 15px;
    }

    .btn {
        display: flex;
        margin: 60px 0px 0px 70px;
        gap: 25px
    }

    button {
        padding-inline: 30px;
        height: 45px;
        font-family: 'Quicksand', sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #B6B6B6;
        border: 1px solid #F2F3F4;
        border-radius: 30px;
        background-color: white;
    }

    .active {
        color: #3BB77E;
        box-shadow: 5px 5px 15px #1818180D;
    }

    .moreInfo p {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #7E7E7E;
        margin: 38px 70px 0px 70px;
    }
</style>
