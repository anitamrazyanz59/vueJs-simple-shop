<template>
  <div>
    <div class="left backgrounddic"></div>
    <div class="right backgrounddic"></div>
    <div class="content">
      <Header></Header>
      <!--    <nav>-->
      <!--      <router-link to="/">Home</router-link> |-->
      <!--      <router-link to="/about">About</router-link>-->
      <!--    </nav>-->
      <div class="maincontent">
        <router-view v-if="categoriesLoaded && productsLoaded" />
      </div>
    </div>

  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import {mapState} from "vuex";
export default {
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCategories')
  },
  computed: {
    ...mapState(['productsLoaded', 'categoriesLoaded'])
  }
}
</script>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;
  body{
    font-family: 'Poppins', sans-serif;
    font-family: 'Recursive', sans-serif;
  }
   .left {
     background-color:#f3f5f8;
     width: 40%;
     left: 0;
   }
   .right {
     background-color: #57a772;
     left: 40%;
     width: 60%;
   }
   .backgrounddic {
     position: fixed;
     top: 0;
     height: 100vh;
     z-index:1
   }
   .content {
     width: 98%;
     margin: 8px 0px 8px 1%;
     padding: 10px;
     border-radius: 5px;
     position: relative;
     z-index: 2;
     background-color: white;
     min-height: 100vh;
     height: auto;
   }
   .maincontent {
     margin-top: 30px;
   }
</style>