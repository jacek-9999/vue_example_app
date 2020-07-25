<template>
  <div id="app">
    <AddNode></AddNode><br>
  </div>
</template>

<script>
import AddNode from './nodes/AddNode.vue';

export default {
  name: "Base",
  components: {
    AddNode
  }
}
</script>
