<template>

  <div class=" rounded overflow-hidden shadow-lg m-3">
    <img class="w-full" :src="product.images" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.title }}</div>
      <p>
        <span class="font-bold">
          Price: {{product.price}}
        </span>
      </p>

    </div>
    <div class="px-6 pt-4 pb-2">
      <router-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" :to="`/products/${product.id}`">
        Show
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  name: 'Products'
}
</script>

<style scoped>

</style>