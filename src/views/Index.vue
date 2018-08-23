<template>
    <div id="index">
        <h1>Lucas da Silva Souto</h1>
        <h2><typewriter text="Welcome to a Vue Painel ^.^" delay="500" /></h2>
        <h2><typewriter text="This is the OWL" start="2000" /></h2>
        <h2><typewriter text="^.~" start="4000" duration="500" /></h2>
        <h2><typewriter text="my mascot" start="4500" duration="800"/></h2>
        <!--<h2><typewriter text="This is the ultimate mega plus advanced ..."
                            start="5300"
                            duration="4000"
                            delay="600"
                            type="both" />
            </h2>-->
    </div>
</template>
<script>
    import Typewriter from '@/components/Typewriter.vue';

    export default {
        name: 'Homepage',
        components: {
            Typewriter,
        },
    };
</script>
<style lang="scss">
</style>
