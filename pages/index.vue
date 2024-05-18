<template>
  <div>
    <HeroTwo />
    <BentoContent class="my-9" />
    <!-- todo: fix mb-6 -->
    <div class="max-w-7xl w-full sm:px-8 py-4 mx-auto mb-6">
      <ContactSecond />
    </div>
    <CertificationList />
    <FeatureList />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'The Pool Table Doctor: Moves, Repairs, and Service Work',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'The Pool Table Doctor has been happily serving Central Florida since 1994. We offer industry-leading pool table repairs, refelting, and more. Contact us today for a free quote, and find out why clients big and small trust The Pool Table Doctor.'
      }]
    }
  }
}
</script>
