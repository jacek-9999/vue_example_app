<template>
    <div>
        <b-list-group-item>
            <div class="d-flex justify-content-between">
                <div>{{ item.title }}</div>
                <div class="edit-delete-story-control">
                    <b-button variant="warning">
                            <b-button  v-on:click="play(item)" variant="success">
                                <b-icon icon="play"></b-icon>
                            </b-button>
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
        play: function(item) {
            this.$store.dispatch('setCurrentGame', item)
                .then(() => {
                    this.$router.push({ name: 'game', params: { story_id: item.id } })
                });
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