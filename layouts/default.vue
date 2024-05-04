<template>
  <div>
    <Navigation />
    <PhoneNumbers />
    <slot />
    <TestFooter class="mt-12"/>
  </div>
</template>

<style>
* {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
body {
  /* #00411f */
  background-color: #00411f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.40' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>