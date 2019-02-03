<template>
    <div    class="circle-img-container"
            :class="animationState"
            :style="animationStyle"
            @click="changeOwlPosition()">
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
            handleWebAnimation() {
                let el;
                switch (this.animationClass) {
                    case 'owl-to-center': {
                        el = document.querySelector('.details');
                        this.setOwlTranslate(
                            (el.offsetWidth / 2) - (document.querySelector('.circle-img-container').offsetWidth / 1.7),
                            (el.getBoundingClientRect().top + (el.offsetHeight / 6)),
                        );
                        return 'initial';
                    }

                    case 'initial': {
                        el = document.querySelector('section.typewriter');
                        this.setOwlTranslate(
                            (el.offsetWidth * 0.6),
                            20,
                        );
                        return 'initial';
                    }

                    default: {
                        const isUnderEffectOfClick = /rotate/;
                        if (!isUnderEffectOfClick.test(this.animationStyle)) {
                            this.updateStyle('translate3d( -70px, 200px, 0) rotate(90deg)');
                        }
                        return 'min';
                    }
                }
            },
            handleMobileAnimation() {
                let el;
                switch (this.animationClass) {
                    case 'initial':
                    case 'owl-to-center': {
                        el = document.querySelector('.details');
                        const p1 = document.querySelector('.details .section-text p:first-child');
                        const p2 = document.querySelector('.details .section-text p:last-child');
                        this.setOwlTranslate(
                            (el.offsetWidth / 2) - (150 / 2),
                            (p1.offsetTop + (p2.offsetTop - p1.offsetTop)) - 40,
                        );
                        break;
                    }
                    default: {
                        const isUnderEffectOfClick = /rotate/;
                        if (!isUnderEffectOfClick.test(this.animationStyle)) {
                            this.updateStyle('translate3d( -90px, 200px, 0) rotate(90deg)');
                        }
                        break;
                    }
                }
            },
            changeOwlPosition() {
                if (!this.animationClass !== 'curious') {
                  const hPosition = (Math.round(Math.random()) === 1)
                                        ? -70
                                        : window.innerWidth - 70;
                    let vPosition = (Math.round(Math.random() * 1000));
                    while (vPosition > (window.innerHeight - 150)) { // 150 -> OwlSize
                        vPosition -= window.innerHeight / 2;
                    }
                    this.updateStyle(`translate3d( ${hPosition}px, ${vPosition}px, 0) rotate(${hPosition > 0 ? '-90deg' : '90deg'})`);
                }
            },
        },
        watch: {
            styles(value) {
                this.updateStyle(value);
            },
        },
        computed: {
            animationState() {
                if (window.innerWidth > 768) {
                    return this.handleWebAnimation();
                }
                    this.handleMobileAnimation();
                    return 'min';
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
