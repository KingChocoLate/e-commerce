<template>

  <div class="category-display">
    <Category v-for="category in categories" :key="category.categoryName" :image="category.image" :categoryName="category.categoryName" :num="category.num" :bgColor="category.bgColor"/>
  </div>
  
</template>

<script lang="ts">
import FirstMessage from './components/firstMessage.vue'
import Category from './components/category.vue'

export default {
  name: 'App',
  components: {
    FirstMessage,
    Category
  },

  data() {
    return {
      categories: [
        { categoryName: 'Cake & Milk', num: 14, bgColor: '#F2FCE4', image: '/images/burger.png' },
        { categoryName: 'Peach', num: 17, bgColor: '#FFFCEB', image: '/images/peach.png' },
        { categoryName: 'Organic Kiwi', num: 21, bgColor: '#ECFFEC', image: '/images/kiwi.png' },
        { categoryName: 'Red Apple', num: 68, bgColor: '#FEEFEA', image: '/images/apple.png' },
        { categoryName: 'Snack', num: 34, bgColor: '#FFF3EB', image: '/images/snack.png' },
        { categoryName: 'Black plum', num: 25, bgColor: '#FFF3FF', image: '/images/blackplum.png' },
        { categoryName: 'Vegetables', num: 65, bgColor: '#F2FCE4', image: '/images/vegetables.png' },
        { categoryName: 'Headphone', num: 33, bgColor: '#FFFCEB', image: '/images/headphone.png' },
        { categoryName: 'Cake & Milk', num: 54, bgColor: '#F2FCE4', image: '/images/cake&milk.png' },
        { categoryName: 'Orange', num: 63, bgColor: '#FFF3FF', image: '/images/orange.png' }
      ]
    }
  }
}
</script>

<style scoped>

  .category-display {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
  }

</style>