<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <b-list-group-item v-on:click="navToStoryNodes(item.story_id)">
            <div class="row">
                <div class="col-11">{{ item.title }}</div>
                <div class="col-1">
                    <b-button variant="success">
                        <b-icon icon="question-circle"></b-icon>
                        <div v-if="hover" allign-v="end">
                            <b-button v-on:click.stop="navToEditForm(item.id)" variant="info">
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
            this.$router.push({ name: 'nodes' , params: {story_id: story_id } })
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
.row {
    cursor: pointer;
}
</style>