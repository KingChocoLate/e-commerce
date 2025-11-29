<template>
  <div class="full_display">
    <MenuBar menuName="Feature Products"/>
    <div class="category-display">
      <Category v-for="(category, index) in categories" :key="index" :image="category.image" :categoryName="category.categoryName" :num="category.num" :bgColor="category.bgColor" :bordered= "index === 0"/>
    </div>

    <div class="banner_display">
      <Banner v-for="(banner, index) in promotions" :key="index" :title="banner.title" :bgColor="banner.bgColor" :bgImage="banner.bannerImage" :ButtonbgColor="banner.ButtonbgColor"/>
    </div>

    <MenuBar menuName="Popular Products"/>
    <div class="product_display">
      <Product v-for="(product, index) in products" :key="index" :name="product.name" :rating="product.rating" :size="product.size" :price="product.price" :promotionAsPercentage="product.promotionAsPercentage" :image="product.image" :clicked="index === 0" :index="index"/>
    </div>
    
  </div>
</template>

<script lang="ts">
import FirstMessage from '@/components/firstMessage.vue'
import Category from '@/components/category.vue'
import Banner from '@/components/banner.vue'
import { useProductStore } from '@/stores/productStore';
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import MenuBar from '@/components/menu.vue';
import Product from '@/components/product.vue';

export default {
  name: 'App',
  data() {
    return {
      currentGroupName: 'Milk & Diaries'
    }
  },

  setup() {
    const productStore = useProductStore();
    const {categories, promotions, products, groups} = storeToRefs(productStore);

    onMounted(() => {
      productStore.fetchBanners();
      productStore.fetchCategories();
      productStore.fetchgroups();
      productStore.fetchproducts();
    })

    return { categories, promotions, products, groups
    };
  },
  components: {
    FirstMessage,
    Category,
    Banner,
    MenuBar,
    Product
  },
}
</script>

<style scoped>
  .full_display {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .category-display {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
  }

  .banner_display {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 75px;
    margin-bottom: 65px;
    gap: 24px;
  }

  .product_display {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

</style>