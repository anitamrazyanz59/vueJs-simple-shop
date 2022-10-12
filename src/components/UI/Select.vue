<template>
  <label
      :for="id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
  >
    {{ label }}
  </label>

  <select
      @change="this.$emit('update:modelValue', $event.target.value)"
      :id="id"
      :value="modelValue"
      class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
       focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option
        selected="selected"
        :value="defaultValue"
    >
      {{ defaultLabel }}
    </option>
    <option
        v-for="(option, key) in options"
        :key="key"
        :value="option.id"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    modelValue: '',
    id: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: ''
    },
    defaultValue: {
      type: String,
      default: ''
    },
    defaultLabel: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>

</style>