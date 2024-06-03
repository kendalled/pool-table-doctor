<template>
  <header class="bg-white shadow z-50 relative">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <nuxt-link to="/" title="Home Page" class="-m-1.5 p-1.5">
          <span class="sr-only">The Pool Table Doctor</span>
          <img class="h-14 absolute top-[0.375rem] w-auto" src="/logo.png" alt="The Pool Table Doctor Logo" title="The Pool Table Doctor Logo">
        </nuxt-link>
      </div>
      <div class="flex lg:hidden">
        <button @click="mobileOpen = !mobileOpen" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <nuxt-link to="/" title="Home Page" class="text-sm font-semibold leading-6 text-gray-900">Home</nuxt-link>
        <nuxt-link to="about-us" title="About Page" class="text-sm font-semibold leading-6 text-gray-900">About Us</nuxt-link>

        <div class="relative">
          <!-- todo: sort out escape handler & tab indices -->
          <button type="button" @click.prevent="smallFlyout = !smallFlyout" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
            Pool Table Services
            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>

          <!-- 'Pool Table Services' flyout menu, show/hide based on flyout menu state. -->

          <transition
            name="flyout"
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
          <div v-show="smallFlyout" v-click-outside="vcoConfig" class="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
            <nuxt-link v-for="service in services":to="service.link" :title="service.name" class="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">{{ service.name }}</nuxt-link>
          </div>
          </transition>
        </div>

        <nuxt-link to="/used-tables" title="Used and Pre-owned Pool Tables" class="text-sm font-semibold leading-6 text-gray-900">Used Pool Tables</nuxt-link>
      </div>
      <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div> -->
      <div class="hidden lg:flex lg:flex-1 items-center lg:justify-end gap-x-6">
      <nuxt-link to="cloth" title="Cloth Gallery" class="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">Cloth Gallery</nuxt-link>
      <nuxt-link to="contact" title="Contact Page" class="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Contact us</nuxt-link>
    </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div v-show="mobileOpen" class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. TODO: see correct color -->
      <div class="fixed inset-0 z-10 bg-gray-900 opacity-50"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">The Pool Table Doctor</span>
            <img class="h-8 w-auto" src="/logo.png" alt="The Pool Table Doctor Logo" title="The Pool Table Doctor Logo">
          </a>
          <button @click="mobileOpen = false" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">

              <nuxt-link to="about-us" title="About Page" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</nuxt-link>
              <nuxt-link to="used-tables" title="Used and Pre-owned Pool Tables" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Used Pool Tables</nuxt-link>
              <!-- TODO: add contact CTA -->
              <div class="-mx-3">
                <button @click="subMobileOpen = !subMobileOpen" type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-2" aria-expanded="false">
                  Pool Table Services
                  <!--
                    Expand/collapse icon, toggle classes based on menu open state.

                    Open: "rotate-180", Closed: ""
                  -->
                  <svg :class="[subMobileOpen ? 'rotate-180' : '']" class="h-5 w-5 flex-none transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
                <!-- 'Company' sub-menu, show/hide based on menu state. -->
                <div v-show="subMobileOpen" class="mt-2 space-y-2" id="disclosure-2">
                  <nuxt-link v-for="service in services":to="service.link" :title="service.name" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ service.name }}</nuxt-link>
                </div>
              </div>
            </div>
            <div class="py-6">
              <nuxt-link to="cloth" title="Cloth Gallery" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Cloth Gallery</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import vClickOutside from 'click-outside-vue3'
export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      smallFlyout: false,
      bigFlyout: false,
      mobileOpen: false,
      subMobileOpen: true,
      services: [
        {
          name: 'Installation & Recovering',
          link: 'installation-recovering'
        },
        {
          name: 'Table Moving',
          link: 'moving'
        },
        {
          name: 'Bumper Replacement',
          link: 'bumper-replacement'
        },
        {
          name: 'Dismantling & Crating',
          link: 'dismantling-crating'
        },
      ]
    }
  },
  computed: {
    path () {
      return this.$route.path
    },
    vcoConfig () {
      return {
        handler: this.close,
        events: ['click'],
        // activate / deactivate click-outside directive dynamically
        isActive: this.smallFlyout
      }
    }
  },
  watch: {
    path (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.smallFlyout = false
        this.bigFlyout = false
        this.mobileOpen = false
      }
    }
  },
  methods: {
    close () {
      this.smallFlyout = false
    }
  }
}
</script>