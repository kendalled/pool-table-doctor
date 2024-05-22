<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div v-for="img in images">
        <img class="h-auto max-w-full w-80 rounded-lg" :src="img.src" :alt="img.alt">
        <p class="mt-2 text-g">First, the dry rotted bumper is replaced.</p>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          src:'/bumper/examples/cushion-repair-hard.jpg',
          alt: ''
        },
        {
          src:'/bumper/examples/cushion-repair-soft.jpg',
          alt: ''
        },
        {
          src:'/bumper/examples/cushion-repair-dryrot.jpg',
          alt: ''
        },
        {
          src:'/bumper/examples/bumper1.jpg',
          alt: ''
        },
        {
          src:'/bumper/examples/bumper2.jpg',
          alt: ''
        },
        {
          src:'/bumper/examples/bumper3.jpg',
          alt: ''
        }
      ]
    }
  }
}
</script>