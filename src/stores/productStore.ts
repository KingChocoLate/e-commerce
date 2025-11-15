import {defineStore} from 'pinia';
import axios from 'axios';

export interface Promotions {
    title: string,
    bgColor: string,
    bannerImage: string,
    ButtonbgColor: string

}

export interface Categories {
    categoryName: string,
    image: string,
    num: number,
    bgColor: string
}

export const useProductStore = defineStore('product', {
    state: () => ({
        groups: [],
        promotions: [] as Promotions[],
        categories: [] as Categories[],
        products: []
    }),

    getters: {},
    actions: {
        async fetchCategories() {
        const result = await axios.get("http://localhost:3000/api/categories");
        this.categories = result.data
                          .map((cat: any) => ({
                          categoryName: cat.name,
                          num: cat.productCount,
                          bgColor: cat.color,
                          image: `http://localhost:3000/${cat.image.replace(/\\/g, '/')}`
                        }));
        console.log(result.data);
        console.log(this.categories);
        },

        async fetchBanners() {
            const result = await axios.get("http://localhost:3000/api/promotions");
            this.promotions = result.data
                        .map((promo: any) => ({
                          title: promo.title,
                          ButtonbgColor: promo.buttonColor,
                          bgColor: promo.color,
                          bannerImage: `http://localhost:3000/${promo.image.replace(/\\/g, '/')}`
                        }));
            console.log(result.data);
            console.log(this.promotions);
        },

        async fetchgroups() {
            const result = await axios.get("http://localhost:3000/api/groups");
            this.groups = result.data;
            },

        async fetchproducts() {
            const result = await axios.get("http://localhost:3000/api/products");
            this.products = result.data;
        }
    }

})
