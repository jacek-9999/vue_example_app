<template>
  <div id="app" class="d-flex">
    <GameList></GameList>
  </div>
</template>

<script>
import GameList from "./GameList";

export default {
  name: "GameListBase",
  components: {
    GameList,
  },
  methods: {
     hideModal() {
         this.$refs['delete-story-modal'].hide()
     },
  },
}
</script>
