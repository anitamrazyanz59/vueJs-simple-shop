<template>
  <div class="banner flex justify-center items-center" :style="style">
      <slot>

      </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: 70,
      required: false,
    },
    background: {
      type: String,
      required: true,
    },
    backgroundSize: {
      type: String,
      required: false,
      default: 'cover'
    }
  },
  computed: {
    style() {
      return `
        background-image: url("${this.background}");
        height:${this.height}vh;
        background-size: ${this.backgroundSize}
        `
    }
  }
}
</script>

<style scoped>
  .banner {
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>