<template>
  <div id="app" class="d-flex">
    <StoriesList></StoriesList>
  </div>
</template>

<script>
import StoriesList from './StoriesList.vue'

export default {
  name: "StoriesListBase",
  components: {
    StoriesList,
  }
}
</script>
