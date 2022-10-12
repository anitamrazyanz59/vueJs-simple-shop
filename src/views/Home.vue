<template>
  <div>
      <Banner :background="BannerImage">
          <h2 class="text-white text-6xl text-center">
            Welcome to Our Store
          </h2>
      </Banner>
    <TopTenProducts>
      <h1 class="text-4xl text-center">
        Top 10 Products
      </h1>
    </TopTenProducts>
    <TopTreeCategories>
      <h1 class="text-4xl text-center">
        Top 3 Categories
      </h1>
    </TopTreeCategories>
  </div>
</template>

<script>
import Banner from "@/components/UI/Banner.vue";
import HomeBanner from '@/assets/HomeBanner.jpg'
import TopTenProducts from "@/components/layouts/TopTenProducts";
import TopTreeCategories from "@/components/layouts/TopTreeCategories";
export default {
  name: 'Home',
  data() {
    return {
      BannerImage: HomeBanner
    }
  },
  components: {
    Banner,
    TopTenProducts,
    TopTreeCategories
  },
}
</script>

<style scoped>

</style>