<template>
  <fieldset>
    <!-- todo: make whole label clickable -->
    <legend class="sr-only">Services</legend>
    <label for="email" class="block text-sm font-semibold leading-6 text-gray-900 mb-2">Services</label>
    <div class="space-y-2 grid md:grid-cols-2 gap-x-2 gap-y-2">
      <!-- start checkbox item-->
      <div v-for="service in serviceList" class="relative flex items-center">
        <div class="flex h-6 items-center">
          <input :id="service.id" :aria-describedby="service.id + '-description'" :name="service.id" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600">
        </div>
        <div class="ml-3 text-sm leading-6">
          <label :id="service.id" class="font-medium text-gray-900 hidden">{{ service.name }}</label>
          <label :id="service.id + '-description'" class="text-gray-700">{{ service.name }}<span class="sr-only"><!-- was hidden content --></span></label>
        </div>
      </div>
      <!-- end checkbox item -->
    </div>
  </fieldset>
</template>

<script>
export default {
  data () {
    return {
      serviceList: [
        {
          name: 'Move to New Location (Old Cloth)',
          id: 'move-reuse'
        },
        {
          name: 'Move between rooms in house',
          id: 'move-rooms'
        },
        {
          name: 'Installation / Setup (new cloth)',
          id: 'setup-new'
        },
        {
          name: 'Dismantle / drop off at different location (no setup)',
          id: 'dismantle-none'
        },
        {
          name: 'Cushion / Bumper replacement',
          id: 'cushion-bumper'
        },
        {
          name: 'Re-level',
          id: 're-level'
        },
        {
          name: 'Move to New Location (New Cloth)',
          id: 'move-new'
        },
        {
          name: 'Installation / Setup (old cloth)',
          id: 'setup-old'
        },
        {
          name: 'Dismantle / Teardown',
          id: 'dismantle-teardown'
        },
        {
          name: 'Cloth Recovery',
          id: 'cloth-recovery'
        },
        {
          name: 'Slate Crating',
          id: 'slate-crating'
        },
        {
          name: 'Other',
          id: 'other'
        },
      ]
    }
  }
}
</script>