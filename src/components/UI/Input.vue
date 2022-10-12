<template>
  <label
      v-if="label"
      :for="id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
  >
    {{ label }}
  </label>

  <input
      @input="this.$emit('update:modelValue', $event.target.value)"
      :type="type"
      :value="modelValue"
      :id="id"
      class="p-2 bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500
      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="placeholder"
  >
</template>

<script>
export default {
  props: {
    modelValue: '',
    placeholder: {
     type: String,
     default: ''
    },
    label: {
     type: String,
     default: ''
    },
    id: {
     type: String,
     default: ''
    },
    type: {
      type: String,
      default: 'string'
    }
  }
}
</script>

<style scoped>

</style>