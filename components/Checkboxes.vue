<template>
  <fieldset>
    <legend class="sr-only">Services</legend>
    <label class="block text-sm font-semibold leading-6 text-gray-900 mb-4">Services</label>
    <!-- todo: fix spacing -->
    <div id="services" class="grid md:grid-cols-2 gap-x-2 gap-y-4">
      <!-- start checkbox item-->
      <div v-for="service in serviceList" class="relative flex items-center">
        <div class="flex h-6 items-center">
          <input :id="service.id" :aria-describedby="service.id + '-description'" :name="service.id" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600">
        </div>
        <div class="ml-3 text-sm leading-6">
          <label :id="service.id + '-description'" :for="service.id" class="text-gray-700">{{ service.name }}<span class="sr-only"><!-- was hidden content --></span></label>
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
          name: 'Moving Locations (Old Cloth)',
          id: 'move-reuse'
        },
        {
          name: 'Moving Locations (New Cloth)',
          id: 'move-new'
        },
        {
          name: 'Installation / Setup (Old Cloth)',
          id: 'setup-old'
        },
        {
          name: 'Installation / Setup (New Cloth)',
          id: 'setup-new'
        },
        {
          name: 'Move Between Rooms in House',
          id: 'move-rooms'
        },
        {
          name: 'Cushion / Bumper Replacement',
          id: 'cushion-bumper'
        },
        {
          name: 'Re-level',
          id: 're-level'
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
          name: 'Dismantle & Move (No Setup)',
          id: 'dismantle-none'
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
