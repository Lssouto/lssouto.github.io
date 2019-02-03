<template>
    <div class='container-typewriter typewriter'>
        <span :class="{'blink-caret' : blinkCaret}">{{value}}</span>
        <!--Examples-->
        <!--<h1>Lucas da Silva Souto</h1>-->
        <!--<h2><typewriter text="Welcome to a Vue Painel ^.^" delay="500" /></h2>-->
        <!--<h2><typewriter text="This is the OWL" start="2000" /></h2>-->
        <!--<h2><typewriter text="^.~" start="4000" duration="500" /></h2>-->
        <!--<h2><typewriter text="my mascot" start="4500" duration="800"/></h2>-->
        <!--<h2><typewriter text="This is the ultimate mega plus advanced ..."
                            start="5300"
                            duration="4000"
                            delay="600"
                            type="both" />
            </h2>-->
    </div>
</template>

<script>
export default {
    name: 'Typewriter',
    data() {
        return {
            blinkCaret: false,
            value: '',
        };
    },
    mounted() {
        const vm = this;
        const content = this.text;
        switch (this.type) {
            case 'reverse':
                setTimeout(() => {
                    vm.blinkCaret = true;
                    vm.typeDelete(content, (vm.duration || 2000));
                }, (this.start || 0));
                break;
            case 'both':
                setTimeout(() => {
                    vm.blinkCaret = true;
                    vm.typeBoth(content, (vm.duration || 2000), vm.delay);
                }, (this.start || 0));
                break;
            default:
                setTimeout(() => {
                    vm.blinkCaret = true;
                    vm.typeWriter(content, (vm.duration || 2000));
                }, (this.start || 0));
                break;
        }
    },
    methods: {
        typeWriter(content, duration) {
            const vm = this;
            const size = content.length;
            const timePerChar = duration / size;

            for (let index = 0; index <= size; index += 1) {
                setTimeout(() => {
                    vm.newValue(index, content);
                }, timePerChar * index);
            }
        },
        typeDelete(content, duration) {
            const vm = this;
            const size = content.length;
            const timePerChar = duration / size;

            for (let index = size; index >= 0; index -= 1) {
                setTimeout(() => {
                    vm.newValue(index, content);
                }, (timePerChar * (size - index)));
            }
        },
        typeBoth(content, duration, delay) {
            const vm = this;
            const DURATION = duration / 2;

            this.typeWriter(content, DURATION);

            setTimeout(() => {
                vm.typeDelete(content, DURATION);
            }, (DURATION + parseInt(delay, 10)));
        },
        newValue(position, content) {
            this.value = content.substring(0, position);

            if (position === content.length) {
                this.removeBlinkCaret();
            }
        },
        removeBlinkCaret() {
            this.blinkCaret = false;
        },
        isContentArray: value => value.split(/'(?:\s*),(?:\s*)'/).map(position => position.replace(/'/g, '')),
        //  the RegExp allow blank spaces between the ' and ,
    },
    props: [
        'text',
        'duration',
        'start',
        'type',
        'delay',
    ],
};
</script>


<style lang="scss" scoped>
.container-typewriter{
    display: inline-block;
    overflow: hidden;
    min-height: 50px;
    span{
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
    }
}
span.blink-caret:after{
    content: '';
    padding: 0 10px 0 0;
    position: absolute;
    display: inline-block;
    height: 60px;
    z-index: 0;
    border-right: 4px solid #ccc;
    animation: blink-caret .75s step-end infinite;
}

</style>
