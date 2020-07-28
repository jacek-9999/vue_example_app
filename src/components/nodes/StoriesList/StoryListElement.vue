<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <b-list-group-item>
            <div class="d-flex justify-content-between">
                <div class="col-2">
                    <b-col>
                    <b-badge variant="dark">ID: {{item.story_id}}</b-badge>
<!--                    <b-badge variant="info">Parent ID: </b-badge>-->
<!--                    <b-badge variant="warning">Nodes Number: </b-badge>-->
                    </b-col>
                </div>
                <div>{{ item.title }}</div>
                <div class="edit-delete-story-control">
                    <b-button variant="info">
                        <b-icon v-if="!hover" icon="question-circle"></b-icon>
                        <div v-if="hover" allign-v="end">
                            <b-button  v-on:click="navToStoryNodes(item.story_id)" variant="warning">
                                <b-icon icon="pencil"></b-icon>
                            </b-button>
                            <b-button v-on:click.stop="navToDeleteForm(item.id)" variant="danger">
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