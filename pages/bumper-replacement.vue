<template>
  <div class="space-y-6 max-w-7xl px-6 sm:px-8 mt-6 w-full mx-auto">
    <!-- todo: refactor to fit old content using vue slots, slightly shrink image sizes when expanded -->
    <div class="rounded-md bg-white px-6 py-8 sm:px-8">
      <h2 class="text-xl md:text-3xl font-bold text-green-900 mb-4">The bumper and cushion repair process</h2>
      <p class="text-gray-800">
        Over time, cushion rubber becomes hard and/or dry rotted. This is caused mostly by pool tables being set up in a garage, porch, or sunlight beaming through the windows over time without cover. Other times, cushion rubber can do the exact opposite and become squishy like a stress ball. This happens when the pool table has been in a controlled climate but played on for a long time, such as tables in a pool hall. No matter what the circumstance, we can fix it!
      </p>
      <ImageGrid />
    </div>
    <ClothPicker :cloths="bumperChoices" prefix="/bumper/" label="Rubber Cushion Selection" desc="Regardless of the cause or condition, we have a range of rubber cushions to restore your table to peak performance. Tournament-grade bumpers are essential for your table to play properly. Our certified technicians can install a new bumper in no time, and with the most competitive pricing in the area, we can't be beat. Explore our selection below, and let us help you bring your pool table back to its best shape!" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      bumperChoices: [
        {
          name: '188" K55 Rubber - 3 Pcs',
          img: {
            src: '188-K55-rubber-3.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '118" K55 Carom Rubber - 3 Pcs',
          img: {
            src: '118-K55-carom-rubber-3.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '118" K66 Rubber - 3 Pcs',
          img: {
            src: '118-K66-rubber-3.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '72" Canadian Step Rubber - 6 Pcs',
          img: {
            src:'72-canadian-step-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '48" A48 Rail Rubber - 6 Pcs',
          img: {
            src:'48-A48-rail-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '48" Artemis Intercontinental Pool No. 66 Rubber - 6pcs',
          img: {
            src:'48-artemis-intercontinental-no-66-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '48" K55 Standard Rubber - 6 Pcs',
          img: {
            src:'48-K55-standard-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '48" Artemis Pool No. 66 Rubber - 6 Pcs',
          img: {
            src:'48-artemis-no-66-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '48" U23 Standard Rubber - 6 Pcs',
          img: {
            src:'48-U23-standard-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '42" Century Rubber - 6 Pcs',
          img: {
            src:'42-century-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '48" K66 Standard Rubber - 6 Pcs',
          img: {
            src:'48-K66-standard-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '118" U118 Carom Rubber - 3 Pcs',
          img: {
            src:'118-U118-carom-rubber-3.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '118" Artemis No. 79 Carom Rubber - 3 Pcs',
          img: {
            src:'118-artemis-no-79-carom-rubber-3.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '118" Artemis No. 37 Carom Rubber - 3 Pcs',
          img: {
            src:'118-artemis-no-37-carom-rubber-3.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '48" #313 Small Rubber - 6 Pcs',
          img: {
            src:'48-313-small-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '9\' Olhausen Accufast Cushions',
          img: {
            src:'9-olhausen-cushions.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '118" Artemis Intercontinental No. 66 Carom Rubber - 3 Pcs',
          img: {
            src:'118-artemis-intercontinental-no-66-carom-rubber-3.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: 'K55 Snooker Bends - 12 Pcs',
          img: {
            src:'K55-snooker-bends-12.jpg',
            width: 320,
            height: 288
          }
        },
        {
          name: '48" #818 Small Rubber - 6 Pcs',
          img: {
            src:'48-818-small-rubber-6.jpg',
            width: 320,
            height: 288
          }
        },
      ]
    }
  }
}
</script>
