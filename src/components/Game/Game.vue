<template>
    <div>
        <div v-if="loader" class="text-center">
            <br/>
            <b-spinner variant="primary" label="Spinning"></b-spinner>
        </div>
        <div v-else>
            {{currentGame}}
        </div>
    </div>
</template>
<script>
import {getNode} from "../../api";


export default {
    name: "NodeEditForm",
    data() {
        return {
            currentGame: {},
            loader: true
        }
    },
    setCurrentGame(val) {
        this.currentGame = val;
    },
    methods: {

    },
    beforeMount: function () {
        getNode(this.$route.params.story_id).then((node) => {
            this.currentGame = node.data;
            this.loader = false;
            // console.log(this.currentGame); //(node.data);
            // console.log(node.data);
        });
    },
    computed: {
    }
}
</script>