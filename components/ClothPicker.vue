<template>
  <div class="mx-auto shadow-sm rounded-md max-w-7xl px-6 sm:px-8 py-6 w-full bg-gray-50">
    <h2 class="text-3xl font-bold text-green-900 mb-4">{{ label }}</h2>
    <p class="text-gray-700 mb-6 max-w-4xl">{{ desc }}</p>
    <div class="grid grid-cols-4 gap-4" id="my-gallery">
      <ClothItem v-for="item in cloths" :prefix="prefix" :cloth="item"/>
    </div>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

export default {
  props: {
    label: {
      type: String,
      default: 'This is the heading label'
    },
    desc: {
      type: String,
      default: 'This is the section description'
    },
    prefix: {
      type: String,
      default: '/felt/simonis/'
    },
    cloths: {
      type: Array,
      default: [
        {
          name: 'Simonis Green',
          img: 'simonisGreen.jpg',
        }
      ]
    },
  },
  mounted () {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#my-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    lightbox.init();
  }
}
</script>