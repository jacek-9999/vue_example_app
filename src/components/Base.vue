<template>
  <div id="app" class="d-flex">
    <StoriesList></StoriesList>
  </div>
</template>

<script>
import StoriesList from './nodes/StoriesList.vue'

export default {
  name: "Base",
  components: {
    StoriesList,
  }
}
</script>
