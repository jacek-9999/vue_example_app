<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <b-list-group-item>
            <div class="d-flex justify-content-between">
                <div class="col-2">
                    <b-row>
                        <b-badge v-if="item.is_initial" variant="danger">ID: {{item.id}}(initial)</b-badge>
                        <b-badge v-else-if="item.is_final" variant="warning">ID: {{item.id}}(final)</b-badge>
                        <b-badge v-else variant="info">ID: {{item.id}}</b-badge>
                    </b-row>
                    <b-row>
                        <b-badge variant="info">Parent ID: </b-badge>
                    </b-row>
                    <b-row v-if="!item.is_final">
                        <b-badge variant="info">Options: </b-badge>
                    </b-row>
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