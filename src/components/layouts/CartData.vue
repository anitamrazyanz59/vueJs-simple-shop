<template>
  <div>
    <table class="table table-auto w-10/12 mx-auto border-2">
      <tr class="text-center border-2 p-2">
        <td>
          Product
        </td>
        <td>
          Title
        </td>
        <td>
          Price
        </td>
        <td>
          Quantity
        </td>
        <td>
          Total
        </td>
        <td>

        </td>
      </tr>
      <CartItem :item="item" v-for="(item, key) in cart.cart" :key="key"></CartItem>
    </table>
  </div>
</template>

<script>
import CartItem from "@/components/layouts/CartItem";
import {mapState} from "vuex";

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapState(['cart'])
  },
  mounted() {
    console.log(this.cart)
  }
}
</script>

<style scoped>
  td {
    border: 5px;
  }
</style>