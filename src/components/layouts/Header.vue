<template>
  <div class="flex flex-row justify-between header items-center">
      <router-link to="/"  class="font-bold logo">
          MIFOOD
      </router-link>
    <div class="controllpanel w-1/3 flex justify-between">
      <div>
        <router-link to="/categories" class="mx-5">
          Categories
        </router-link>
        <router-link to="/products" class="mx-5">
          Products
        </router-link>
      </div>
      <div class="flex items-center px-2 relative">
        <router-link to="/cart" class="flex">
          <img :src="cartImage" alt="" class="cart mr-3">
          <span class="count">{{cartItemsCount}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '@/assets/cart.png'

export default {
  data() {
    return {
      cartImage: Cart,
    }
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.getCartItemsCount
          ?
          `${this.$store.getters.getCartItemsCount} Items in cart`
          : 'Cart is empty'
    }
  }
}
</script>

<style scoped>
  .logo {
    font-family: 'Lily Script One', cursive;
    font-size: 20px;
  }
  .header {
    top: 0px;
    background-color:white;
    padding: 10px 5px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.17) 0px 12px 10px;
  }
  .cart {
    width:30px
  }

</style>