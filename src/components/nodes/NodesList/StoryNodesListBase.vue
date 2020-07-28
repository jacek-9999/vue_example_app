<template>
  <div id="app" class="d-flex">
      <b-modal ref="delete-node-modal" hide-footer id="delete-node-modal" title="Delete Node Confirmation">
          <div class="d-block text-center">
              <h5 v-if="node_prepared_to_delete">
                  <hr>
                  Title: {{node_prepared_to_delete.title}}
                  <hr>
                  Id: {{node_prepared_to_delete.id}}
                  <hr>
                  <hr>
              </h5>
          </div>
          <div class="d-flex justify-content-between">
              <b-button class="" variant="info" @click="hideModal">
                  <b-icon icon="arrow-left"></b-icon>Back
              </b-button>
              <b-button class="" variant="danger" @click="deleteNode">
                  <b-icon icon="trash"></b-icon>Delete
              </b-button>
          </div>
      </b-modal>
    <StoryNodesList></StoryNodesList>
  </div>
</template>

<script>
import StoryNodesList from './StoryNodesList'
import { mapGetters } from 'vuex'

export default {
    props: ['node'],
    name: "StoryNodesListBase",
    components: {
      StoryNodesList,
    },
    methods: {
        hideModal() {
            this.$refs['delete-node-modal'].hide()
        },
        deleteNode() {
            this.$store
                .dispatch('deleteNode', this.$store.state.node_prepared_to_delete.id)
                .then(() => {
                    this.$store.dispatch('getAllStories').then(() => {
                        this.$refs['delete-node-modal'].hide();
                    });
                });
        }
    },
    computed: {
        ...mapGetters({
            node_prepared_to_delete: 'node_prepared_to_delete'
        }),
    }
}
</script>
