<template>
  <!-- universal formatting -->
  <div class="mx-auto w-full max-w-7xl px-6 sm:px-8 mt-6">
    <div class="prose lg:prose-lg bg-white rounded-md w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
      <h2>
        Used & Pre-Owned Pool Tables for Sale
      </h2>
      <p>
        The Pool Table Doctor carries a large selection of used / pre-owned pool tables and billiard tables. We do our best to make sure our selection is current and up to date on our website; however it is always a good idea to call about a particular pool table for availability.
      </p>
      <p>
        Our used pool tables come with great benefits which include:
      </p>
      <ul>
        <li>
          Free delivery
        </li>
        <li>
          Free setup
        </li>
        <li>
          New cloth (choice of <nuxt-link to="cloth" title="Pool Table Cloth Gallery">40 cloth colors</nuxt-link>)
        </li>
        <li>
          Complete accessories (cues, balls, racks, chalk, etc.)
        </li>
        <li>
          Bumpers / cushions are replaced if needed (therefore, your pool table will play like new!)
        </li>
      </ul>
      <h2>
        Browse our expansive catalog:
      </h2>
      <p>
        At The Pool Table Doctor, we take pride in offering a wide selection of high-quality pre-owned pool tables. Our 
        <a href="https://pooltablestore.com/product-category/pre-owned/" target="_blank" title="Used and Pre-owned Pool Table Catalog">constantly updated catalog</a>
         on our sister website, 
         <a href="https://pooltablestore.com" target="_blank" title="The Pool Table Store Home Page">The Pool Table Store</a>, 
         showcases a variety of options to suit your preferences. Whether you’re a seasoned player or a beginner, you’ll find something that fits your style.
      </p>
      <h3>
        Why Choose Our Pre-Owned Tables?
      </h3>
      <ul>
        <li>
          <b>Careful Inspection:</b> Before listing any table, we meticulously inspect and assess its condition. Our team ensures that each pre-owned table is in excellent shape, addressing any necessary repairs or touch-ups.
        </li>
        <li>
          <b>Professional Moving and Releveling:</b> We handle the logistics for you. Our experts carefully move and relevel the tables, ensuring they’re ready for play once they arrive at your location.
        </li>
      </ul>
      <p>
        Visit our <a href="https://pooltablestore.com/product-category/pre-owned/" target="_blank" title="Used and Pre-owned Pool Table Catalog">catalog</a> at The Pool Table Store to explore our diverse range of pre-owned pool tables. Whether you’re looking for a classic design or a modern style, we’ve got you covered!
      </p>
      <h2>
        Our selection typically consists of brands such as:
      </h2>
      <ul class="grid grid-cols-3">
        <li v-for="brand in brandList">
          {{ brand }}
        </li>
      </ul>
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