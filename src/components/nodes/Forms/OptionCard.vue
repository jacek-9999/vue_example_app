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
                     <b-icon icon="link"></b-icon>
                     Assign
                 </b-button>
             </div>
         </b-modal>


    </div>
</template>
<script>
export default {
    name: 'OptionCard',
    props: {
        cardData: Array
    },
    components: {
    },
    methods:{
        hideModal() {
            this.$refs['unlink-option-modal'].hide()
        },
    },
    computed: {
    }
}
</script>
<style>
</style>