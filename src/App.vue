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

export default {
  name: 'App',
  components: {
    FirstMessage,
    Category,
    Banner
  },

  data() {
    return {
      categories: [
        { categoryName: 'Cake & Milk', num: 14, bgColor: '#F2FCE4', image: '/images/category/burger.png' },
        { categoryName: 'Peach', num: 17, bgColor: '#FFFCEB', image: '/images/category/peach.png' },
        { categoryName: 'Organic Kiwi', num: 21, bgColor: '#ECFFEC', image: '/images/category/kiwi.png' },
        { categoryName: 'Red Apple', num: 68, bgColor: '#FEEFEA', image: '/images/category/apple.png' },
        { categoryName: 'Snack', num: 34, bgColor: '#FFF3EB', image: '/images/category/snack.png' },
        { categoryName: 'Black plum', num: 25, bgColor: '#FFF3FF', image: '/images/category/blackplum.png' },
        { categoryName: 'Vegetables', num: 65, bgColor: '#F2FCE4', image: '/images/category/vegetables.png' },
        { categoryName: 'Headphone', num: 33, bgColor: '#FFFCEB', image: '/images/category/headphone.png' },
        { categoryName: 'Cake & Milk', num: 54, bgColor: '#F2FCE4', image: '/images/category/cake&milk.png' },
        { categoryName: 'Orange', num: 63, bgColor: '#FFF3FF', image: '/images/category/orange.png' }
      ],

      banners: [
        { title: 'Everyday Fresh & Clean with Our Products', bgColor: '#F0E8D5', bannerImage: '/images/banner/onion.jpg', ButtonbgColor: '#3BB77E' },
        { title: 'Make your Breakfast Healthy and Easy', bgColor: '#F3E8E8', bannerImage: '/images/banner/juice.png', ButtonbgColor: '#3BB77E' },
        { title: 'The best Organic Products Online', bgColor: '#E7EAF3', bannerImage: '/images/banner/basketofVegetables.jpg', ButtonbgColor: '#FDC040' }
      ]
    }
  }
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