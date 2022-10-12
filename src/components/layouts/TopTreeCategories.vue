<template>
  <div class="mt-5">
    <slot></slot>
    <Category v-for="(category, key) in topTreeCategories" :key="key" :category="category"></Category>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Category from "@/components/layouts/Category";
export default {
    name: 'TopTreeCategories',
    components: {
        Category
    },
    computed: {
      ...mapState(['categories']),
      topTreeCategories () {
        return this.categories.slice(0,3)
      }
    }
}
</script>

<style scoped>

</style>