<template>
    <div class="circle-img-container" :class="animationState" :style="animationStyle">
        <div class="circle-img">
            <img src="@/assets/images/owl-logo-blink.png" class="blink" />
        </div>
        <div class="back-to-top">
            <div class="bordered"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Owl',
        data() {
            return {
                animationStyle: '',
            };
        },
        props: [
            'styles',
            'animationClass',
        ],
        mounted() {
            const el = document.querySelector('section.typewriter');

            this.updateStyle(`translate3d( ${el.offsetWidth * 0.6}px, 20px, 0) scale(0,0)`);
            document.querySelector('.circle-img-container').classList.remove('min');
            setTimeout(() => {
                this.updateStyle(`translate3d( ${el.offsetWidth * 0.6}px, 20px, 0) scale(1,1)`);
            }, 2000);
        },
        methods: {
            setOwlTranslate(horizontal, vertical) {
                this.updateStyle(`translate3d( ${horizontal}px, ${vertical}px, 0)`);
            },
            updateStyle(style) {
                this.animationStyle = `transform: ${style}`;
            },
        },
        watch: {
            styles(value) {
                this.updateStyle(value);
            },
        },
        computed: {
            animationState() {
                let el;

                switch (this.animationClass) {
                    case 'owl-to-center':
                        el = document.querySelector('.details');
                        this.setOwlTranslate(
                            (el.offsetWidth / 2) - (document.querySelector('.circle-img-container').offsetWidth / 2),
                            (el.getBoundingClientRect().top + (el.offsetHeight / 6)),
                        );
                        return 'initial';


                    case 'initial':
                        el = document.querySelector('section.typewriter');
                        this.setOwlTranslate(
                            (el.offsetWidth * 0.6),
                            20,
                        );
                        return 'initial';

                    default:
                        this.updateStyle('translate3d( -70px, 200px, 0) rotate(90deg)');
                        return 'min';
                }
            },
        },
    };
</script>
<style lang="scss">
.circle-img-container {
    position: fixed;
    transform: translate3d(-50%,-50%,0);
    z-index: 50;
    @include animation-spd(.6s);
    &.min {
        top: 0;
        left: 0;
        .circle-img {
            box-shadow: 0 0 12px 1px rgba(0,0,0,.4);
            height: 150px;
            width: 150px;
            img {
                height: 150px;
                &.blink {
                    animation: blink-min 5s infinite;
                    animation-timing-function: steps(1);
                }
            }
        }
    }
}
.circle-img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    background-color: $white;
    text-align: center;
    overflow: hidden;
    position: relative;
    transition: transform .3s cubic-bezier(0.4, 0.0, 0.2, 1) .2s,
                height .3s cubic-bezier(0.4, 0.0, 0.2, 1) .2s,
                width .3s cubic-bezier(0.4, 0.0, 0.2, 1) .2s;
    @extend .fast-e;
    img {
        height: 200px;
        width: auto;
        display: block;
        left: 0;
        position: absolute;
        transition: transform .3s cubic-bezier(0.4, 0.0, 0.2, 1) .2s,
                    height .3s cubic-bezier(0.4, 0.0, 0.2, 1) .2s,
                    width .3s cubic-bezier(0.4, 0.0, 0.2, 1) .2s;
        &.blink {
            animation: blink 5s infinite;
            animation-timing-function: steps(1);
        }
    }
}
.animate-out {
    transform: scale(0,0);
}
.animate-in {
    transform: scale(1,1);
}
</style>
