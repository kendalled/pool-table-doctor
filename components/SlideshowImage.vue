<template>
  <div>
    <!-- TODO: add titles and alts, fix hydration mismatch -->
    <div>
      <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" :title="image.alt" class="animate-fade-in mySlides h-80 w-auto rounded-md shadow-lg object-cover" :style="{ display: index === currentIndex ? 'block' : 'none', width: '100%' }" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: '/certs/pool-table-doctor-champ-certifications.jpg',
          alt: 'The Pool Table Doctor staff getting their certifications.'
        },
        {
          src: '/pool-table-doctor-vans.jpeg',
          alt: 'Full fleet of The Pool Table Doctor vans.'
        },
        {
          src: '/farmhouse-table.jpeg',
          alt: 'Example of a repaired pool table.'
        }
      ],
      currentIndex: 0,
      carouselInterval: null
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.carouselInterval);
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3500);
    }
  }
};
</script>

<style scoped>
/* TODO: test different timings */
.animate-fade-in {
  animation: fading-in 1s forwards;
}

@keyframes fading-in {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
