<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <div class="wrapper-marker">
            <b-list-group-item>
                <router-link :to="{ path: 'nodes/'+item.story_id }">
                   {{ item.title }}
                </router-link>
            </b-list-group-item>
        </div>
        <div v-if="hover" allign-v="end">
            <b-button class="node-edit-button" variant="info">
                <b-icon icon="pencil"></b-icon>
            </b-button>
            <b-button class="node-edit-button" variant="danger">
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