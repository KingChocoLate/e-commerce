<template>
  <div class="full_display">
    <div class="category-display">
      <Category v-for="category in categories" :key="category.categoryName" :image="category.image" :categoryName="category.categoryName" :num="category.num" :bgColor="category.bgColor"/>
    </div>

    <div class="banner_display">
      <Banner v-for="banner in banners" :key="banner.title" :title="banner.title" :bgColor="banner.bgColor" :bgImage="banner.bannerImage" :ButtonbgColor="banner.ButtonbgColor"/>
    </div>
  </div>
  
  
</template>

<script lang="ts">
import FirstMessage from './components/firstMessage.vue'
import Category from './components/category.vue'
import Banner from './components/banner.vue'
import { useProductStore } from './stores/productStore.ts';


export default {
  name: 'App',

  setup() {
  const productStore = useProductStore();

  productStore.fetchBanners();
  productStore.fetchCategories();
  productStore.fetchgroups();
  productStore.fetchproducts();

  return { productStore,
            categories: productStore.categories,
            banners: productStore.promotions,
            products: productStore.products,
            groups: productStore.groups
   };
  },
  components: {
    FirstMessage,
    Category,
    Banner
  },
}
</script>

<style scoped>
  .full_display {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .category-display {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .banner_display {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 75px;
    gap: 20px;
  }

</style>