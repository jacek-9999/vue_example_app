<template>
  <div id="app" class="d-flex">
    <AddNode></AddNode>
    <ListNodes></ListNodes>
  </div>
</template>

<script>
import AddNode from './nodes/AddNode.vue';
import ListNodes from './nodes/ListNodes.vue'

export default {
  name: "Base",
  components: {
    ListNodes,
    AddNode
  }
}
</script>
