<template>
  <div class="flex flex-col justify-center space-y-3 pt-4 border border-gray-300 hover:border-gray-400 cursor-pointer w-auto items-center gap-x-8 rounded-md px-4 py-2">
    <img class="rounded-sm h-48 w-48" :src="'/felt/simonis/' + cloth.img"/>
    <p class="text-gray-800 font-medium">{{ cloth.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cloth: {
      type: Object,
      required: true
    }
  }
};
</script>