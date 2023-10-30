<template>
  <div
    @click="
      $router.push({ name: 'EntryView', params: { action: 'Edit', id: 1 } })
    "
    class="entry-container mb-3 pointer p-2"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1" fs-5>Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-description">
      Laborum culpa in laborum anim occaecat minim laborum enim. Enim in mollit
      laboris consectetur laborum labore Lorem mollit occaecat. Aliqua proident
      esse esse mollit deserunt aute nulla.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>

