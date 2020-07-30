<template>
  <div id="app" class="d-flex">
    <GameList></GameList>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
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
     deleteStory() {
         this.$store
             .dispatch('deleteStory', this.$store.state.story_prepared_to_delete.story_id)
             .then(() => {
                 this.$store.dispatch('clearStories').then(() => {
                     this.$store.dispatch('getAllStories').then(() => {
                         this.$refs['delete-story-modal'].hide();
                     });
                 });
             });
     }
  },
  computed: {
      ...mapGetters({
          story_prepared_to_delete: 'story_prepared_to_delete'
      }
  )}
}
</script>
