<template>
    <div class="root container paper">
        <header-cv></header-cv>
        <router-view></router-view>
    </div>
</template>

<script>
    import HeaderCv from "./HeaderCv";
    export default {
        name: "MasterLayout",
        components: {
            HeaderCv
        }
    }
</script>

<style scoped>
    .paper{
        /*  border: red solid 1px;*/
        min-height: 750px;
        padding: 2%;
        box-shadow: 10px 10px 14px 0px grey;
        background-color: #ffffff;
    }
</style>
