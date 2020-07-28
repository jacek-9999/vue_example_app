<template>
  <div id="app" class="d-flex">
      <b-modal ref="delete-story-modal" hide-footer id="delete-story-modal" title="Delete Story Confirmation">
          <div class="d-block text-center">
              <h5 v-if="story_prepared_to_delete">
                  <hr>
                  Title: {{story_prepared_to_delete.title}}
                  <hr>
                  Id: {{story_prepared_to_delete.story_id}}
                  <hr>
                  <hr>
              </h5>
          </div>
          <div class="d-flex justify-content-between">
              <b-button class="" variant="info" @click="hideModal">
                  <b-icon icon="arrow-left"></b-icon>Back
              </b-button>
              <b-button class="" variant="danger" @click="deleteStory">
                  <b-icon icon="trash"></b-icon>Delete
              </b-button>
          </div>
      </b-modal>
    <StoriesList></StoriesList>
  </div>
</template>

<script>
import StoriesList from './StoriesList.vue'
import {mapGetters} from 'vuex';

export default {
  name: "StoriesListBase",
  components: {
    StoriesList,
  },
  methods: {
     hideModal() {
         this.$refs['delete-story-modal'].hide()
     },
     deleteStory() {
         this.$store
             .dispatch('deleteStory', this.$store.state.story_prepared_to_delete.story_id)
             .then(() => {
                 this.$store.dispatch('getAllStories').then(() => {
                     this.$refs['delete-story-modal'].hide();
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
