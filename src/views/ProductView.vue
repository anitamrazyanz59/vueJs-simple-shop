<template>
  <div>
    <div class="mx-auto w-5/6 display flex justify-around">
      <div class="image w-1/2">
        <img :src="mainImage" alt="" class="w-full">
      </div>
      <div class="flex justify-center items-center w-1/3">
        <div class="w-4/5">
          <p class="text-center font-bold">
            {{product.category.name}}
          </p>
          <h1 class="text-center text-3xl my-3">
            {{product.title}}
          </h1>
          <h2 class="text-center  my-3">
            {{product.description}}
          </h2>
          <h4 class="text-center font-bold my-2">
            Price: {{product.price}}
          </h4>
          <div class="flex items-center">
            <Input
                v-model="quantity"
                type="number"
                label="Quantity: "
                id="quantity"
            />
          </div>
          <div class="flex py-2">
            <button @click="addItem" v-if="!product.addedToCart">
              Add To Cart
            </button>
            <div v-else>
              <button @click="removeFromCart">
                Delete From Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex my-12 w-4/6 mx-auto">
      <div class="flex w-5/12 flex-wrap">
        <img @click="changeImage" class="mx-2 navbarImage" v-for="(image, key) in product.images" :src="image" alt="" :key="key">
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/UI/Input";
export default {
  name: 'Product View',
  components: {
    Input
  },
  data() {
    return {
      product: this.$store.getters.getProductByID(this.$route.params.id),
      quantity: 1,
      mainImageSrc: null
    }
  },
  computed: {
    mainImage () {
      return this.mainImageSrc ? this.mainImageSrc : this.product.images[0]
    }
  },
  methods: {
    changeImage(e) {
      this.mainImageSrc = e.target.attributes.src.value
    },
    addItem() {
      const item = {...this.product, quantity: this.quantity}
      this.$store.commit('addCartItem', item)
      this.$store.commit('productAddedToCart', item.id)
    },
    removeFromCart() {
      this.$store.commit('deleteFromCart', this.product.id)
      this.$store.commit('productRemovedFromCart', this.product.id)
    }
  }
}
</script>

<style scoped>
  button {
    padding: 7px 12px;
    background-color:#4b4b4b;
    color: white;
    text-align:center;
    border-radius: 5px;
  }
  .navbarImage {
    width: 80px;
    height: 80px;
    cursor: pointer
  }
</style>