<template>
  <div>
    <Banner :background="category.image" :height="50" backgroundSize="contain">
      <div class="px-5 py-3 flex items-end w-full flex-col">
        <h2 class="text-3xl">
          {{ category.name }}
        </h2>
        <router-link :to="`categories/${category.id}`" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Show
        </router-link>
      </div>
    </Banner>
  </div>
</template>

<script>
import Banner from "@/components/UI/Banner";
export default {
  name: 'Category',
  props: {
    category: Object,
    default: {}
  },
  components: {
    Banner
  },
}
</script>

<style scoped>

</style>