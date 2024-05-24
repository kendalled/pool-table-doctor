<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 class="text-lg font-semibold text-green-600">Industry leading repairs</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900">Ask our clients about The Pool Table Doctor</p>
        <!-- <h2 class="text-lg font-semibold leading-8 text-gray-900">Ask our clients about - The Pool Table Doctor!</h2> -->
        <div class="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
          <img v-for="img in images" class="col-span-2 max-h-20 w-full object-contain object-center lg:col-span-1" :title="img.alt" :src="img.src" :alt="img.alt" width="158" height="48">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          src: '/logos/pool-table-store.png',
          alt: 'The Pool Table Store Logo'
        },
        {
          src: '/logos/hilton.png',
          alt: 'Hilton Hotels Logo'
        },
        {
          src: '/logos/marriott-logo.png',
          alt: 'Marriott Hotels Logo'
        },
        {
          src: '/logos/two-men.webp',
          alt: 'Two Men and a Truck Logo'
        },
        {
          src: '/logos/bca-pool-league.png',
          alt: 'BCA Pool League Logo'
        }
      ]
    }
  }
}
</script>