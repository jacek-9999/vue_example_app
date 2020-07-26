<template>
  <div id="app" class="d-flex">
    <StoryNodesList></StoryNodesList>
  </div>
</template>

<script>
import StoryNodesList from './nodes/StoryNodesList'

export default {
  props: ['node'],
  name: "StoryNodesListBase",
  components: {
    StoryNodesList,
  }
}
</script>
