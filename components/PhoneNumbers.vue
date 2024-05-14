<template>
  <div class="w-full max-w-7xl px-6 sm:px-8 mx-auto mt-6">
    <div class="rounded-md my-3 py-3 md:flex grid grid-cols-2 bg-gray-50 justify-center w-full max-w-7xl gap-y-2 md:space-x-6 text-center text-sm">
      <p v-for="location in locationList" class="text-green-800">
        <span class="font-semibold">{{ location.name }}</span>
        <br />
        {{ location.phone }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      locationList: [
        {
          name: 'Orlando',
          phone: '(407) 227-9533'
        },
        {
          name: 'Daytona',
          phone: '(407) 227-9533'
        },
        {
          name: 'Melbourne',
          phone: '(407) 227-9533'
        },
        // {
        //   name: 'Jacksonville & St. Augustine',
        //   phone: '(904) 888-7600'
        // },
        {
          name: 'Gainesville',
          phone: '(352) 354-2460'
        }
      ]
    }    
  }
}
</script>