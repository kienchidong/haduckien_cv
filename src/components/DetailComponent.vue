<template>
    <div class="root">
        <b-row>
            <b-col cols="6">
                <strong><slot name="school-name"></slot></strong>
            </b-col>
            <b-col cols="6" align="right">
                <slot name="time"></slot>
            </b-col>
            <b-col cols="12">
                <p><em>Chuy&ecirc;n ng&agrave;nh: <slot name="specialized"></slot></em></p>
            </b-col>
            <b-col cols="12">
                <slot name="content"></slot>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "DetailComponent"
    }
</script>

<style scoped>

</style>
