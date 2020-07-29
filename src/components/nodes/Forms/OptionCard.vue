<template>
    <div>
    <b-card-group deck>
        <b-card v-for="item in cardData" :key="item.id" :item="item" @click="setUnlinkOption(item.id)">
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
             <b-card variant="light">
                Confirm unlink
            </b-card>
             <hr>
             <div class="d-flex justify-content-between">
                 <b-button class="" variant="info" @click="hideModal">
                     <b-icon icon="arrow-left"></b-icon>Back
                 </b-button>
                 <b-button class="" variant="danger" @click="submitUnlink">
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
             <b-form-group
                    id="fieldset-1"
                    description="Add Title"
                    label=""
                    label-for="input-title"
                    :invalid-feedback="invalidTitleFeedback"
                    :valid-feedback="validTitleFeedback"
                    :state="titleState"
             >
                 <b-form-input id="input-title" v-model="title" :state="titleState"></b-form-input>
             </b-form-group>
             <b-form-group
                     id="fieldset-2"
                     description="Add Description"
                     label=""
                     label-for="input-description"
                     :invalid-feedback="invalidDescriptionFeedback"
                     :valid-feedback="validDescriptionFeedback"
                     :state="descriptionState"
             >
                 <b-form-textarea
                         id="textarea"
                         v-model="description"
                         rows="3"
                         max-rows="6"
                 ></b-form-textarea>
             </b-form-group>
             <div class="d-flex justify-content-center">
                 <b-form-group>
                     <b-form-checkbox-group
                             id="fieldset-3"
                             v-model="is_final"
                             :options="options_final"
                             name="is_final_checkbox"
                     ></b-form-checkbox-group>
                 </b-form-group>
             </div>

             <div class="d-flex justify-content-between">
                 <b-button class="" variant="danger" @click="hideModal">
                     <b-icon icon="arrow-left"></b-icon>Back
                 </b-button>
<!--                 <b-button class="" variant="info">-->
                 <b-button class="" variant="info" @click="submitCreate">
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
        submitUnlink() {
            console.log(this.unlink_target);
        },
        setUnlinkOption(id) {
            this.unlink_target = id;
        },
        submitCreate() {
            let data = {
                'title':        this.title,
                'description':  this.description,
                'is_final':     this.is_final.length !== 0,
                'story_id':     this.$route.params.story_id,
                'node_id':      this.$route.params.node_id
            };
            console.log(data);
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
        titleState() {
            return this.title.length > 1 ? true : false
        },
        descriptionState() {
            return this.description.length > 1 ? true : false
        },
        invalidTitleFeedback() {
            if (this.title.length < 1) {
                return 'Title is empty.'
            } else {
                return 'Wrong title data.'
            }
        },
        invalidDescriptionFeedback() {
            if (this.title.length < 1) {
                return 'Description is empty.'
            } else {
                return 'Wrong description data.'
            }
        },
        validTitleFeedback() {
            return 'Submit'
            // return this.state === true ? 'Thank you' : ''
        },
        validDescriptionFeedback() {
            return 'Submit'
            // return this.state === true ? 'Thank you' : ''
        }
    },
    data: () => {
        return {
            unlink_target: 0,
            title: '',
            description: '',
            is_final: [],
            options_final: [
                {text: 'Final Node', value: 1}
            ]
        }
    },
}
</script>
<style>
</style>