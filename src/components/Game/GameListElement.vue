<template>
    <div>
        <b-list-group-item>
            <div class="d-flex justify-content-between">
                <div>{{ item.title }}</div>
                <div class="choose-game-control">
                    <b-button variant="dark">

                            <b-button  v-on:click="play(item)" variant="success">
                                <b-icon icon="diamond-half"></b-icon>
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
            this.$router.push({ name: 'game', params: { story_id: item.id } })
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
.choose-game-control {
    cursor: pointer;
}
</style>