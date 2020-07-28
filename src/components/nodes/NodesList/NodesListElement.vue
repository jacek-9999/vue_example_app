<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <b-list-group-item>
            <div class="d-flex justify-content-between">
                <div class="col-2">
                    <b-col>
                    <b-badge variant="dark">ID: {{item.id}}</b-badge>
                    <b-badge variant="info">Parent ID: </b-badge>
                    <b-badge variant="warning">Options IDs: </b-badge>
                    </b-col>
                </div>
                <div>{{item.title}}</div>
                <div class="edit-delete-node-control">
                    <b-button variant="info">
                        <b-icon v-if="!hover" icon="question-circle"></b-icon>
                        <div v-if="hover" allign-v="end">
                            <b-button v-on:click="navToEditForm(item.id)" variant="warning">
                                <b-icon icon="pencil"></b-icon>
                            </b-button>
                            <b-button v-on:click="prepareDelete(item)" v-b-modal.delete-node-modal variant="danger">
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
    name: "NodesListElement",
    methods: {
        prepareDelete: function(node) {
            this.$store.dispatch('prepareNodeToDelete', node);
        },
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
.edit-delete-node-control {
    cursor: pointer;
}
</style>