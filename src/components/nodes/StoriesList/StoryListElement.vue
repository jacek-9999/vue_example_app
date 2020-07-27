<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <div class="wrapper-marker">
            <b-list-group-item v-on:click="navToStoryNodes(item.story_id)">
<!--                <router-link :to="{ path: 'nodes/'+item.story_id }">-->
                   {{ item.title }}
<!--                </router-link>-->
            </b-list-group-item>
        </div>
        <div v-if="hover" allign-v="end">
            <b-button v-on:click="navToEditForm(item.id)" variant="info">
                <b-icon icon="pencil"></b-icon>
            </b-button>
            <b-button v-on:click="navToDeleteForm(item.id)" variant="danger">
                <b-icon icon="trash"></b-icon>
            </b-button>
        </div>
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
    .wrapper-marker {
        :hover {
            background-color: #c4c9b7
        }
    }

</style>