<template>
    <div>
    <b-card-group deck>
        <b-card v-for="item in cardData" :key="item.id" :item="item">
            <b-card-text>
                {{item.title}}
            </b-card-text>
            <hr>
            <div class="d-flex justify-content-center">
                <b-button v-b-modal.unlink-option-modal variant="warning">
                    <b-icon icon="x-circle-fill"></b-icon>
                    unlink option
                </b-button>
            </div>
        </b-card>
        <b-card>
               <b-button v-b-modal.create-option-modal variant="info">
                   <b-icon icon="plus"></b-icon>
                   Create new option
                </b-button>
            <hr>
              <b-button v-b-modal.assign-option-modal variant="info">
                   <b-icon icon="link"></b-icon>
                   Assign to other option
                </b-button>
        </b-card>
    </b-card-group>
         <b-modal
                 ref="unlink-option-modal"
                 hide-footer id="unlink-option-modal"
                 title="Unlink Option Confirmation"
         >
             <div class="d-block text-center">
                 <h5>
<!--              <h5 v-if="story_prepared_to_delete">-->
                      <hr>
                      Title:
                      <hr>
                      Id:
                      <hr>
                      <hr>
                  </h5>
             </div>
             <div class="d-flex justify-content-between">
                 <b-button class="" variant="info" @click="hideModal">
                     <b-icon icon="arrow-left"></b-icon>Back
                 </b-button>
                 <b-button class="" variant="danger">
    <!--             <b-button class="" variant="danger" @click="deleteStory">-->
                     <b-icon icon="x-circle-fill"></b-icon>
                     Unlink
                 </b-button>
             </div>
         </b-modal>

         <b-modal
                 ref="create-option-modal"
                 hide-footer id="create-option-modal"
                 title="Create Option"
         >
             <div class="d-block text-center">
                 <h5>
<!--              <h5 v-if="story_prepared_to_delete">-->
                      <hr>
                      Title:
                      <hr>
                      Id:
                      <hr>
                      <hr>
                  </h5>
             </div>
             <div class="d-flex justify-content-between">
                 <b-button class="" variant="danger" @click="hideModal">
                     <b-icon icon="arrow-left"></b-icon>Back
                 </b-button>
                 <b-button class="" variant="info">
    <!--             <b-button class="" variant="danger" @click="deleteStory">-->
                     <b-icon icon="plus"></b-icon>
                     Create
                 </b-button>
             </div>
         </b-modal>

         <b-modal
                 ref="assign-option-modal"
                 hide-footer id="assign-option-modal"
                 title="Assign Option"
         >
             <div class="d-block text-center">
                <b-list-group>
                <div v-for="item in stories[getStoryId()]" :key="item.id" :item="item">
                    <b-card bg-variant="light" :title="item.title" v-if="item.id!=getNodeId()">
                        <b-badge v-if="item.is_initial" variant="danger">ID: {{item.id}}(initial)</b-badge>
                        <b-badge v-else-if="item.is_final" variant="warning">ID: {{item.id}}(final)</b-badge>
                        <b-badge v-else variant="info">ID: {{item.id}}</b-badge>
                        <hr><b-button variant="warning"  @click="submitAssign(item.id)">Assign</b-button>
                    </b-card>
                    <hr>
                </div>
                </b-list-group>
             </div>
             <div class="d-flex justify-content-between">
                 <b-button class="" variant="danger" @click="hideModal">
                     <b-icon icon="arrow-left"></b-icon>Back
                 </b-button>
             </div>
         </b-modal>


    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'OptionCard',
    props: {
        cardData: Array
    },
    components: {
    },
    methods:{
        submit() {
            console.log('xxxxxx');
        },
        submitAssign(targetId) {
            console.log('assign');
            console.log(targetId);
        },
        hideModal() {
            this.$refs['unlink-option-modal'].hide()
            this.$refs['create-option-modal'].hide()
            this.$refs['assign-option-modal'].hide()
        },
        getStoryId() {
            return this.$route.params.story_id;
        },
        getNodeId() {
            return this.$route.params.node_id;
        },
    },
    computed: {
        ...mapGetters({
            stories: 'stories',
        }),
    }
}
</script>
<style>
</style>