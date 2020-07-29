<template>
    <b-card-group deck>
        <b-card v-for="item in cardData" :key="item.id" :item="item">
            <b-card-text>
                {{item.title}}
            </b-card-text>
            <hr>
            <div class="d-flex justify-content-center">
                <b-button variant="warning">
                    <b-icon icon="x-circle-fill"></b-icon>
                    unlink option
                </b-button>
            </div>
        </b-card>
        <b-card>
               <b-button variant="info">
                   <b-icon icon="plus"></b-icon>
                   Create new option
                </b-button>
            <hr>
              <b-button variant="info">
                   <b-icon icon="link"></b-icon>
                   Assign to other option
                </b-button>
        </b-card>
    </b-card-group>
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
    },
    computed: {
    }
}
</script>
<style>
</style>