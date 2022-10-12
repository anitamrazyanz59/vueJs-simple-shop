<template>
  <div class="flex">
    <div class="border-b-2 w-1/2">
      <Select
        id="categories"
        v-model="selectedCategory"
        :options="categories"
        defaultValue="0"
        defaultLabel="All Categories"
        label="Select an Categories"
      />
    </div>
    <div class="w-1/2 px-2">
        <Input
            v-model="titleForFilter"
            placeholder="Search by title.."
            id="title"
            label="Search By title"
        />
    </div>
  </div>

  <div class="flex justify-around content-between mt-5 flex-wrap">
    <Product
      v-for="(product, key) in filteredProducts"
      :key="key"
      :product="product"
      class="w-1/4"
    >
    </Product>
  </div>
</template>

<script>

import { mapState } from "vuex";
import Product from "@/components/layouts/Product";
import Input from "@/components/UI/Input";
import Select from "@/components/UI/Select";

export default {
  data () {
    return {
      name: 'AllProducts',
      selectedCategory: 0,
      titleForFilter: ''
    }
  },
  components: {
    Product,
    Input,
    Select
  },
  computed: {
    ...mapState([
        'products', 'categories'
    ]),
    filteredProducts () {
      let new_this = this
      return this.products.filter(product => {
        let selectedCategory =  Number(new_this.selectedCategory) ? Number(new_this.selectedCategory) : product.category.id
        let titleForFilter = new_this.titleForFilter ? new_this.titleForFilter : product.title
        return product.title.toLowerCase().includes(titleForFilter.toLowerCase()) & selectedCategory === product.category.id
      })
    }
  },
}
</script>

<style scoped>

</style>