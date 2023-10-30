<template>
  <Navbar />
  <div class="d-flex">
    <div class="col-4"><EntryListDaybook /></div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import("../components/NavbarDaybook.vue")
    ),
    EntryListDaybook: defineAsyncComponent(() =>
      import("../components/EntryListDaybook.vue")
    ),
  },
};
</script>

<style>
</style>