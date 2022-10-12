<template>
  <div>
    <h1 class="text-5xl text-center mb-10 mt-5">
      Your Cart
    </h1>
    <CartData></CartData>
    <div class="flex justify-end mt-12" v-if="cartTotal">
      <div class="w-1/6">
        Total: {{ cartTotal }}
      </div>
    </div>
  </div>
</template>

<script>
import CartData from "@/components/layouts/CartData";
export default {
  components: {
    CartData
  },
  computed: {
    cartTotal() {
      return this.$store.getters.getCartTotal
    }
  }
}
</script>

<style scoped>

</style>