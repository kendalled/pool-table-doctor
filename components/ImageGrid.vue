<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 mx-auto mt-6">
    <!-- TODO: rethink spacing on image grid, make images clickable -->
    <div v-for="img in images">
        <img class="shadow-md h-auto max-w-full w-full rounded-lg mx-auto" :src="img.src" :alt="img.alt">
        <p class="mt-2 text-gray-700 mx-auto w-full">{{img.text}}</p>
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
          alt: 'Pool table bumper damaged due to weather',
          text: 'Cushion in an uncontrolled temperature environment.'
        },
        {
          src:'/bumper/examples/cushion-repair-soft.jpg',
          alt: 'Pool table bumper damaged due to years of use',
          text: 'Example of continuous play over many years.'
        },
        {
          src:'/bumper/examples/cushion-repair-dryrot.jpg',
          alt: 'Additional temperature damage to a pool table bumper',
          text: 'Cushion cracks due to humidity and temperature.'
        },
        {
          src:'/bumper/examples/bumper1.jpg',
          alt: 'Removal of a damaged bumper cushion',
          text: 'Damaged cushion removal.'
        },
        {
          src:'/bumper/examples/bumper2.jpg',
          alt: 'Sanding off and leveling a bumper',
          text: 'Bumper sand off and leveling.'
        },
        {
          src:'/bumper/examples/bumper3.jpg',
          alt: 'Finished result, a repaired pool table bumper',
          text: 'Bumper & cushion is like new!'
        }
      ]
    }
  }
}
</script>