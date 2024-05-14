<template>
  <div class="mx-auto shadow-sm rounded-md max-w-7xl px-6 sm:px-8 py-6 w-full bg-gray-50">
    <h2 class="text-3xl font-bold text-green-900 mb-4">{{ label }}</h2>
    <p class="text-gray-700 mb-6 max-w-4xl">{{ desc }}</p>
    <div class="grid grid-cols-4 gap-4" id="my-gallery">
      <ClothItem v-for="item in cloths" :prefix="prefix" :cloth="item"/>
    </div>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

export default {
  props: {
    label: {
      type: String,
      default: 'This is the heading label'
    },
    desc: {
      type: String,
      default: 'This is the section description'
    },
    prefix: {
      type: String,
      default: '/felt/simonis/'
    },
    cloths: {
      type: Array,
      default: [
        {
          name: 'Simonis Green',
          img: {
            src: 'simonisGreen.jpg',
            width: 720,
            height: 720
          }
        }
      ]
    },
  },
  mounted () {
    const options = {
      gallery: '#my-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    };
    const lightbox = new PhotoSwipeLightbox(options);

    lightbox.on('uiRegister', function() {
    lightbox.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      lightbox.pswp.on('change', () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
          // const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
          captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
        }
        el.innerHTML = captionHTML;
      });
    }
  });
});
    lightbox.init();
  }
}
</script>

<style>
.pswp__custom-caption {
  background: rgba(75, 150, 75, 0.75);
  font-size: 16px;
  color: #fff;
  width: calc(100% - 32px);
  max-width: 400px;
  padding: 2px 8px;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  text-align: center;
}
.pswp__custom-caption a {
  color: #fff;
  text-decoration: underline;
}
.hidden-caption-content {
  display: none;
}
</style>