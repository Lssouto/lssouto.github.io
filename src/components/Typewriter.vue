<template>
    <div id="typewriter" class='container-typewriter'>
        <span :class="{'blink-caret' : blinkCaret}">{{value}}</span>
    </div>
</template>

<script>
export default {
    name: 'Typewriter',
    data() {
        return {
            blinkCaret: true,
            value: '',
        };
    },
    mounted() {
        const vm = this;
        const content = this.text;
        switch (this.type) {
            case 'reverse':
                setTimeout(() => {
                    vm.typeDelete(content, (vm.duration || 2000));
                }, (this.start || 0));
                break;
            case 'both':
                setTimeout(() => {
                    vm.typeBoth(content, (vm.duration || 2000), vm.delay);
                }, (this.start || 0));
                break;
            default:
                setTimeout(() => {
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
    span{
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
    }
}
span.blink-caret{
    padding: 0 10px 0 0;
    display: inline-block;
    border-right: .15em solid #ccc;
    animation: blink-caret .75s step-end infinite;
}

</style>
