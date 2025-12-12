<template>
    <PageHeader v-if="category" :name="category.categoryName"/>
</template>

<script lang="ts">
import PageHeader from '@/components/CategoryPage/PageHeader.vue';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
    export default {
        components: {
            PageHeader
        },
        setup() {
            const productStore = useProductStore();
            const {categories}  = storeToRefs(productStore);

            onMounted(() => {
                    productStore.fetchCategories();
            })
            return {categories};
        },

        computed: {
            category() {
                const index = Number(this.$route.params.categoryId);
                return this.categories.find(c => c.id = index+4);
            }
        }
    }
</script>