<template>
   <div class="bg-gradient-to-b from-green-100 via-white to-white">
    <!-- Pricing section with single price and feature list -->
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div class="pb-16 xl:flex xl:items-center xl:justify-between">
        <div>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
            <span class="text-gray-900">The Pool Table Doctor Difference</span>
            <!-- <span class="text-green-600">$99 a month</span> -->
          </h1>
          <p class="mt-5 text-xl text-gray-500">Since 1999, we have expertly repaired and serviced tables all around Florida.</p>
        </div>
        <a href="#" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-700 px-5 py-3 text-base font-medium text-white hover:bg-green-800 sm:mt-10 sm:w-auto xl:mt-0">Get started today</a>
      </div>
      <div class="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
        <div>
          <h2 class="text-lg font-semibold text-green-600">Industry leading repairs</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900">Done right the first time.</p>
          <p class="mt-4 text-lg text-gray-500">Some inexperienced techs will rush through the job by simply recovering the table, shaking your hand, and they're gone. Some will think they are going the extra mile by checking the levelness of the center of the table. Not good!</p>
        </div>
        <div class="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:col-span-2 xl:mt-0">
          <ul role="list" class="divide-y divide-gray-200">
            <li class="flex py-4 md:py-0 md:pb-4">
              <svg class="h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span class="ml-3 text-base text-gray-500">Beeswax used on seams</span>
            </li>
            <li v-for="pro in prosList" class="flex py-4">
              <svg class="h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span class="ml-3 text-base text-gray-500">{{ pro }}</span>
            </li>
          </ul>
          <ul role="list" class="divide-y divide-gray-200 border-t border-gray-200 md:border-t-0">
            <li class="flex py-4 md:border-t-0 md:py-0 md:pb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 flex-shrink-0 text-red-500"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
              <span class="ml-3 text-base text-gray-500">Bondo / plaster used on slate seams</span>
            </li>
            <li v-for="con in consList" class="flex py-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 flex-shrink-0 text-red-500"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
              <span class="ml-3 text-base text-gray-500">{{ con }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      prosList: [
        'Flat shims for leveling slate',
        'Leveled to tournament specifications',
        'No charge for stairs',
        '21 oz. standard cloth is standard',
        'Delivered in enclosed van or box truck'
      ],
      consList: [
        'Wedges for leveling slate',
        'Leveled to standard specifications',
        '$50 per flight of stairs',
        '19 oz. cloth is standard',
        'Delivered in bed of pickup truck'
      ]
    }
  }
}
</script>