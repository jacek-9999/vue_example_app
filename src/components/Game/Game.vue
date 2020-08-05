<template>
    <div>
        <div v-if="loader" class="text-center">
            <br/>
            <Spinner></Spinner>
        </div>
        <div v-else>
            <b-card-group>
                <b-card :bg-variant=getBgVariant(currentNode) :text-variant=getTextVariant(currentNode)>
<!--                    <h3>{{currentNode.title}}</h3>-->
                    <h4>{{currentNode.description}}</h4>
                </b-card>
            </b-card-group>
            <b-card-group columns >
                <b-card v-for="option in currentNode.options"  :key="option.id" :item="option">
                    <b-card-text>
                       {{option.title}}
                    </b-card-text>
                    <hr>
                    <div class="d-flex justify-content-center">
                        <b-button @click="nextNode(option.id)" v-b-modal.unlink-option-modal variant="info">
                            <b-icon icon="question" animation="fade" font-scale="1.5"></b-icon>
                        </b-button>
                    </div>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>
<script>
import {getNode} from "../../api";
import Spinner from "../Layout/Spinner";


export default {
    name: "NodeEditForm",
    components: {Spinner},
    data() {
        return {
            currentNode: {},
            loader: true
        }
    },
    methods: {
        getBgVariant: function(node) {
            let v = '';
            if (node.is_final) {
                v = 'info';
            } else {
                v = 'light';
            }
            return v;
        },
        getTextVariant: function(node) {
            let v = '';
            if (node.is_final) {
                v = 'white';
            } else {
                v = 'black';
            }
            return v;
        },
        nextNode: function (id) {
            this.loader = true;
            getNode(id).then((node) => {
                this.currentNode = node.data;
                this.loader = false;
            }).catch((cc) => {
                this.$store.dispatch('setErrorMsg', cc.message);
            });
        }
    },
    beforeMount: function () {
        getNode(this.$route.params.story_id).then((node) => {
            this.currentNode = node.data;
            this.loader = false;
        }).catch((cc) => {
            this.$store.dispatch('setErrorMsg', cc.message);
        });
    },
    computed: {
    }
}
</script>