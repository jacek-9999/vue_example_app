<template>
    <div>
        <b-list-group-item>
            <div class="d-flex justify-content-between">
                <div>{{ item.title }}</div>
                <div class="edit-delete-story-control">
                    <b-button variant="info">
                        <div v-if="hover" allign-v="end">
                            <b-button  v-on:click="play(item.story_id)" variant="warning">
                                <b-icon icon="pencil"></b-icon>
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
    name: "GameListElement",
    methods: {
        play: function(story) {
            return story;
        },
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