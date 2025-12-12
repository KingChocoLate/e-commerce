<template>
  <div class="header">
    <div class="subHeader1">
      <div class="decor">
        <div class="logo">
          <img src="./assets/icons/ecommerce_logo.svg" alt="">
          <div class="logo_name">
            <p>Melon</p>
            <p>Mart & Grocery</p>
          </div> 
        </div>
        <Search/>
      </div>
      <UtilityBar/>
    </div>
    <div class="line line1"></div>
    <div class="subHeader2">
      <div class="wholeNav">
        <button class="megaMenu">
          <img src="./assets/menu.svg" alt="">
          Browse All Categories
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5.43686C4.80423 5.4372 4.61032 5.39885 4.42941 5.324C4.24851 5.24916 4.08419 5.1393 3.94588 5.00075L0 1.05412L1.05412 0L5 3.94588L8.94588 0L10 1.05412L6.05412 5C5.91588 5.13869 5.75158 5.24869 5.57067 5.32366C5.38977 5.39863 5.19582 5.4371 5 5.43686Z" fill="#ffffff"/>
          </svg>
        </button>
        <RouterLink to="/categories/1" class="hotDeals">
            <img src="./assets/icons/flame.svg" alt="">
            Hot Deals
        </RouterLink>
        <NavBar/>
      </div>
      <div class="support">
        <img src="./assets/icons/support.svg" alt="">
        <div class="support_info">
          <p>099 777 888</p>
          <p>24/7 Support Center</p>
        </div>
      </div>
    </div>
    <div class="line line2"></div>
  </div>
  
  <RouterView />
</template>

<script lang="ts">
import Search from '@/components/searchBox.vue';
import UtilityBar from './components/MenuItem/UtilityBar.vue';
import NavBar from "./components/MenuItem/NavBar.vue";
  export default {
    components: {
      Search,
      UtilityBar,
      NavBar
    }
  }
</script>
<style scoped>
  .header {
    display: flex;
    flex-direction: column;

  }
  .subHeader1 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .decor {
    display: flex;
    align-items: center;
    gap: 80px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .logo_name {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .logo_name > :nth-child(1) {
    font-family: 'Quicksand', sans-serif;
    font-size: 40px;
    font-weight: 700;
    color: #3BB77E;
    height: 50px;
  }

  .logo_name > :nth-child(2) {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: #253D4E;
  }

  .line {
    width: 100vw;
    border-bottom: 1px solid #E5E5E5;
  }

  .line1 {
    margin: 31px 0px 13px -3rem;
  }

  .subHeader2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .megaMenu {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 18px;
    border: none;
    border-radius: 5px;
    height: 44px;
    background-color: #3BB77E;
    color: white;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 700;
  }

  .wholeNav {
    display: flex;
    align-items: center;
  }

  .hotDeals {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #1B1B1B;
    border: none;
    background-color: white;
    margin: 0px 54px 0px 36px;
  }

  .support {
    display: flex;
    align-items: center;
    gap: 13px;
  }

  .support_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .support_info > :nth-child(1) {
    font-family: 'Quicksand', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #3BB77E;
    line-height: 24px;
  }

    .support_info > :nth-child(2) {
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #7E7E7E;
    line-height: 12px;
  }

  .line2 {
    margin: 13px 0px 33px -3rem;
  }
</style>