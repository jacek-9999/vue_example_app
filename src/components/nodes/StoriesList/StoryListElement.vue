<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <b-list-group-item>
            <div class="d-flex justify-content-between">
                <div class="col-2">
                    <b-row>
                        <b-badge variant="info">ID: {{item.story_id}}</b-badge>
                    </b-row>
                    <b-row>
                        <b-badge variant="info">Nodes: {{item.story_count}}</b-badge>
                    </b-row>
                </div>
                <div>{{ item.title }}</div>
                <div class="edit-delete-story-control">
                    <b-button variant="info">
                        <b-icon v-if="!hover" icon="question-circle"></b-icon>
                        <div v-if="hover" allign-v="end">
                            <b-button  v-on:click="navToStoryNodes(item.story_id)" variant="warning">
                                <b-icon icon="pencil"></b-icon>
                            </b-button>
                            <b-button v-on:click="prepareStoryToDelete(item)" v-b-modal.delete-story-modal variant="danger">
                                <b-icon icon="trash"></b-icon>
                            </b-button>
                        </div>
                    </b-button>
                </div>
            </div>
        </b-list-group-item>
    <hr>
    </div>
</template>

<script>

export default {
    name: "StoryListElement",
    methods: {
        prepareStoryToDelete: function(story) {
            this.$store.dispatch('prepareStoryToDelete', story);
        },
        navToEditForm: function (id) {
            this.$router.push({ name: 'storiesEdit', params: { node_id: id } })
        },
        navToDeleteForm: function (id) {
            this.$router.push({ name: 'storiesDelete', params: { node_id: id } })
        },
        navToNewForm: function () {
            this.$router.push({ name: 'storiesNew' })
        },
        navToStoryNodes: function (story_id) {
            this.$router.push({ name: 'story' , params: {story_id: story_id } })
        }
    },
    data() {
        return {
            hover: false,
        };
    },
    props: {
        item: Object
    }
}
</script>

<style lang="scss" scoped>
.edit-delete-story-control {
    cursor: pointer;
}
</style>