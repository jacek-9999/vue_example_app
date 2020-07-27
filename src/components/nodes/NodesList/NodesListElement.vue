<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <div class="wrapper-marker">
        <b-list-group-item>
            <div class="row">
                <div class="col-11">{{item.description}} {{item}} </div>
            </div>
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
    name: "NodesListElement",
    methods: {
        navToEditForm: function (id) {
            this.$router.push({ name: 'nodesEdit', params: { node_id: id } })
        },
        navToDeleteForm: function (id) {
            this.$router.push({ name: 'nodesDelete', params: { node_id: id } })
        },
        navToNewForm: function () {
            this.$router.push({ name: 'nodesNew' })
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
    .wrapper-marker {
        :hover {
            background-color: #9fcdff;
            /*border-style: solid;*/
            /*border-width: 1px;*/
        }
    }

</style>