<template>
  <tr class="border-2 p-2">
    <td>
      <img :src="item.images" alt="">
    </td>
    <td>
      <p class="text-center">
        {{ item.title }}
      </p>
    </td>
    <td>
      <p class="text-center">
        {{ item.price }}
      </p>
    </td>
    <td>
      <p class="text-center">
        {{ item.quantity }}
      </p>
    </td>
    <td>
      <p class="text-center">
        {{ item.quantity * item.price }}
      </p>
    </td>
    <td>
      <button @click="deleteFromCart">
        X
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    deleteFromCart() {
      this.$store.commit('deleteFromCart', this.item.id)
      this.$store.commit('productRemovedFromCart', this.item.id)
    }
  }
}
</script>

<style scoped>
  img {
    width: 80px;
  }
  td{
    border: 5px
  }
</style>