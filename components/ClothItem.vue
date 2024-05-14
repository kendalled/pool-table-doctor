<template>
  <!-- TODO: make square boolean a prop, copy border styling from new forms -->
  <a :data-pswp-width="cloth.img.width"
      :data-pswp-height="cloth.img.height" :href="prefix + cloth.img.src" class="col-span-1 photoItem bg-white flex flex-col justify-center space-y-3 pt-4 border border-gray-200 hover:border-gray-300 cursor-pointer w-auto items-center gap-x-8 rounded-md px-4 py-2">
      <img class="rounded-sm h-36 w-36" :src="prefix + cloth.img.src" :alt="cloth.name"/>
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