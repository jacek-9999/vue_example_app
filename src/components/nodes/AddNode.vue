<template>
    <div class="AddNode">
        <h1>cmp</h1>
        <div
                v-for="n in 12"
                v-bind:key="n"
                class="color"
                :style="{ backgroundColor: getColor(n) }">
            {{n}}
        </div>
    </div>
</template>

<script>
export default {
    name: "AddNode",
    methods: {
        getColor(n) {
            return `hsl(${(n - 1) * 30}, 100%, 75%)`;
        }
    }
}
</script>