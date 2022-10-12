<template>
  <div>
    <Category v-for="(categoryItem, key) in categories" :category="categoryItem" :key="key">

    </Category>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Category from "@/components/layouts/Category";

export default {
  computed: {
    ...mapState(['categories'])
  },
  components: {
    Category
  }
}
</script>

<style scoped>

</style>