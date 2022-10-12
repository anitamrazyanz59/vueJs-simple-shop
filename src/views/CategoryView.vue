<template>
  <div>
    <Banner :background="category.image">
      <h1 class="text-6xl text-white">{{ category.name }}</h1>
    </Banner>
    <div class="mt-5 w-full px-2">
      <Input
          v-model="titleForFilter"
          placeholder="Search by title.."
          id="title"
          label="Search By title"
      />
    </div>
    <div class="flex justify-around content-between mt-5 flex-wrap">
      <Product :key="key" :product="product" v-for="(product, key) in filteredProducts" ></Product>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/UI/Banner";
import Product from "@/components/layouts/Product";
import Input from "@/components/UI/Input";
export default {
  components: {
    Banner,
    Product,
    Input
  },
  data() {
    return {
      category: this.$store.getters.getCategoryByID(this.$route.params.id),
      titleForFilter: '',
    }
  },
  computed: {
    categoryProducts() {
      console.log(
          this.$store.getters.getCategorysProducts(this.category.id)
      )
      return this.$store.getters.getCategorysProducts(this.category.id)
    },
    filteredProducts () {
      let new_this = this
      return this.categoryProducts.filter(product => {
        let titleForFilter = new_this.titleForFilter ? new_this.titleForFilter : product.title
        return product.title.toLowerCase().includes(titleForFilter.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>

</style>