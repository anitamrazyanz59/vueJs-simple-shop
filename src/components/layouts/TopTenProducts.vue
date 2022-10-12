<template>
  <div class="mt-6">
    <slot>

    </slot>
    <div class="flex justify-around content-between mt-5 flex-wrap">

      <Product
          v-for="(product, key) in topTenProducts"
          :key="key"
          :product="product"
          class="w-1/4"
      >
      </Product>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import Product from "@/components/layouts/Product";

export default {
  data () {
    return {
      name: 'AllProducts'
    }
  },
  components: {
    Product
  },
  computed: {
    ...mapState([
      'products'
    ]),
    topTenProducts () {
      return this.products.slice(0, 10)
    }
  },
}
</script>

<style scoped>

</style>