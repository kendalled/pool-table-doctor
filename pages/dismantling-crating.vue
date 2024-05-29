<template>
  <!-- universal formatting -->
  <div class="mx-auto w-full max-w-7xl px-6 sm:px-8 mt-6">
    <div class="relative h-32 md:h-64 bg-cover bg-center rounded-t-md" style="background-image: url('poolBanner.png');">
      <div class="absolute inset-0 bg-gradient-to-r from-black/95 to-gray-900/45 bg-opacity-25 flex items-center justify-start pl-6 md:pl-12 rounded-t-md">
        <h1 class="text-gray-50 text-3xl md:text-5xl font-bold flex flex-col md:gap-y-2">Pool Table Disassembly & Crating</h1>
      </div>
    </div>
    <div class="prose lg:prose-lg bg-white rounded-b-md w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
      <!-- TODO: consider text-4xl -->
      <h2>
        Pool table dismantling is also known as a “teardown” or “disassembly.”
      </h2>
      <p>
        Dismantling is not only for moving. It is mostly needed for customers having their floors replaced. We can get to a home and have the pool table dismantled in roughly an hour. Once dismantled, we will move it into another room or into the garage.
      </p>
      <p>
        Other tables will need to be dismantled due to moving long distances, primarily out of state. Our experts can help you with loading your table’s parts into the moving truck for the same price. Crating is not necessary for moving yourself, however moving companies require it. If this is the case, we can crate it as well for an additional charge.
      </p>
      <!-- todo: consider cutting prose block then resuming after imgs -->
      <figure>
        <div class="flex gap-x-0 w-full space-x-4 justify-center not-prose">
          <img class="rounded-md shadow-sm w-1/3 h-auto" src="/pool-table-crating.jpg" alt="">
          <img class="rounded-md shadow-sm w-1/3 h-auto" src="/pool-table-crating-why.jpg" alt="">
        </div>
        <figcaption>Without proper crating, the slate can break during shipping. That is why we always crate it on-site, custom fit to your table to ensure its safety.</figcaption>
      </figure>
      <h2>
        Pool Table Slate Crating
      </h2>
      <p>
        Slate crating is required by most major moving companies, especially if moving out of state!
      </p>
      <p>
        <b>The Pool Table Doctor</b> offers custom pool table slate crating. We will dismantle any slate pool table (assuming it has 3 pieces) and package it in our custom designed crate for safe and secure transporting. Every crate is built onsite to ensure a custom fit for your specific size pool table.
      </p>
      <p>
        Call or <nuxt-link to="/contact" title="Contact Form">click today</nuxt-link> to get your pool table the treatment it deserves. There is no better option than The Pool Table Doctor.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        brandList: [
        'C.L. Bailey', 
        'Olhausen',
        'Presidential',
        'Golden West',
        'Proline',
        'Craftmaster',
        'Brunswick',
        'Imperial',
        'Fischer',
        'Leisure Bay',
        'Valley',
        'Titan',
        'Dynamo',
        'Westwood',
        'AMF',
        'Gandy',
        'Connelly',
        'Peter Vitalie',
        'American Heritage',
        'Legacy',
        '... and much more!'
        ]
      }
    }
  }
</script>
