<template>
  <!-- todo: make image w and size a prop -->
  <a :data-pswp-width="720"
      :data-pswp-height="900" :href="prefix + cloth.img" class="photoItem flex flex-col justify-center space-y-3 pt-4 border border-gray-300 hover:border-gray-400 cursor-pointer w-auto items-center gap-x-8 rounded-md px-4 py-2">
    <img class="rounded-sm h-36 w-36" :src="prefix + cloth.img"/>
    <p class="text-gray-800 font-medium">{{ cloth.name }}</p>
  </a>
</template>

<script>
export default {
  props: {
    cloth: {
      type: Object,
      required: true
    },
    prefix: {
      type: String,
      default: '/felt/simonis/'
    }
  }
};
</script>