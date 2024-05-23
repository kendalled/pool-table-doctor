<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto mt-6">
    <div v-for="img in images">
        <img class="shadow-md h-auto max-w-full w-80 rounded-lg mx-auto" :src="img.src" :alt="img.alt">
        <p class="mt-2 text-gray-700 mx-auto w-80">{{img.text}}</p>
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
          alt: '',
          text: 'Cushion in an uncontrolled temperature environment.'
        },
        {
          src:'/bumper/examples/cushion-repair-soft.jpg',
          alt: '',
          text: 'Example of continuous play over many years.'
        },
        {
          src:'/bumper/examples/cushion-repair-dryrot.jpg',
          alt: '',
          text: 'Cushion in an uncontrolled temperature environment.'
        },
        {
          src:'/bumper/examples/bumper1.jpg',
          alt: '',
          text: 'Damaged cushion removal.'
        },
        {
          src:'/bumper/examples/bumper2.jpg',
          alt: '',
          text: 'Bumper sand off and leveling.'
        },
        {
          src:'/bumper/examples/bumper3.jpg',
          alt: '',
          text: 'Bumper & cushion is like new.'
        }
      ]
    }
  }
}
</script>