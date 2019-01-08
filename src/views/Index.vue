<template>
    <div id="index">
        <div class="circle-img-container" :class="owlState" :style="owlStyle">
            <div class="circle-img">
                <img src="@/assets/images/owl-logo-blink.png" class="blink" />
            </div>
            <div class="back-to-top">
                <div class="bordered"></div>
            </div>
        </div>
        <section class="nav-owl bg-primary">
            <div class="container">
                <div class="typewriter-container">
                    <typewriter text="^.~, Tudo bom?" start="2000" duration="1000" />
                    <typewriter text="da um clique ali => " start="3200" duration="1800" />
                </div>
            </div>
        </section>
        <section class="details">
            <div class="container">
                <div class="section-text">
                    <!--{{ owlAnimationBreakpoints }} -->
                    <p class="text-left owl-to-left">
                        Prazer, sou Lucas da Silva Souto. <br>
                        Desenvolvedor front-end.
                    </p>
                    <p class="text-left owl-to-right">
                        Comecei a me dedicar ao desenvolvimento web no início de 2016
                        e atualmente trabalho com Angular2/5 e Ionic 3.
                    </p>
                    <p>
                        Já participei do desenvolvimento de aplicações
                        com Jquery, VanillaJs, Laravel, CodeIgniter e atualmente
                        meu foco está em aplicações utilizando Vuejs e ExpressJs.
                    </p>

                </div>
            </div>
        </section>
        <section class="bg-secundary">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </section>
        <section class="bg-primary">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </section>
        <section>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </section>
    </div>
</template>
<script>
    import { debounce } from 'lodash-es';
    import Typewriter from '@/components/Typewriter.vue';

    export default {
        name: 'Homepage',
        components: {
            Typewriter,
        },
        data() {
            return {
                owlState: '',
                owlAnimationBreakpoints: {},
                owlStyle: {
                    transform: '',
                },
            };
        },
        mounted() {
            const el = document.querySelector('.nav-owl');

            this.owlStyle.transform = `translate3d( ${el.offsetWidth * 0.6}px, 30px, 0) scale(0,0)`;
            setTimeout(() => {
                this.owlStyle.transform = `translate3d( ${el.offsetWidth * 0.6}px, 30px, 0) scale(1,1)`;
            }, 2000);

            this.getOwlAnimationBreakpoints();

            console.log('mounted');
        },
        beforeMount() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll: debounce(function handler() {
                const scrollValue = window.scrollY;
                // console.log(scrollValue);
                if (
                    scrollValue >= this.owlAnimationBreakpoints['owl-to-left']
                    && scrollValue < this.owlAnimationBreakpoints['owl-to-right']
                ) {
                    this.owlState = 'min';
                    const el = document.querySelector('.owl-to-left');
                    this.setOwlTranslate(
                        (el.offsetLeft * 0.6),
                        (el.getBoundingClientRect().top * 0.9),
                    );
                } else if (scrollValue >= this.owlAnimationBreakpoints['owl-to-right']) {
                        this.owlState = 'min';
                        const el = document.querySelector('.owl-to-right');
                        this.setOwlTranslate(
                            (el.offsetLeft + el.offsetWidth) * 1.1,
                            el.getBoundingClientRect().top,
                        );
                    } else {
                        this.owlState = 'initial';
                        const el = document.querySelector('.nav-owl');
                        this.setOwlTranslate(
                            (el.offsetWidth * 0.6),
                            30,
                        );
                    }
            }, 30, { leading: true }),
            getOwlAnimationBreakpoints() {
                this.owlAnimationBreakpoints['owl-to-left'] = this.getElementBreakpoint('.owl-to-left');
                this.owlAnimationBreakpoints['owl-to-right'] = this.getElementBreakpoint('.owl-to-right');
            },
            getElementBreakpoint(identifier) {
                const el = document.querySelector(identifier);
                const showBreakpoint = window.innerHeight * 0.3;
                return el.offsetTop - showBreakpoint - el.offsetHeight;
            },
            setOwlTranslate(horizontal, vertical) {
                this.owlStyle.transform = `translate3d( ${horizontal}px, ${vertical}px, 0)`;
            },
        },
    };
</script>
<style lang="scss">
section.nav-owl {
    color: $white;
    padding: 70px 0;
    min-height: 270px;
    .container {
        display: flex;
        flex-wrap: nowrap;
        & > *{
            flex: 1 1 50%;
        }
    }
    .typewriter-container {
        font-size: 45px;
        margin-left: 13%;
        .typewriter{
            display: block;
            min-height: 65px;
            margin-bottom: 6px;
        }
    }
}
section {
    padding: 55px 0;
}
.section {
    &-title,
    &-text {
        text-align: center;
    }
    &-title {
        font-size: 30px;
        margin-bottom: 35px;
        font-weight: bolder;
        text-transform: uppercase;
    }
    &-text {
        font-size: 18px;
        width: 70%;
        margin: 0 auto;
    }
}
section.details {
    .section {
        &-title {
            margin-bottom: 50px;
        }
        &-text {
            p {
                margin: 25px 0 45px 0;
                font-size: 20px;
            }
            p:first-child {
                width: 50%;
                font-size: 26px;
                margin-bottom: 70px;
                margin-left: 50%;
            }
            p:nth-child(2) {
                width: 50%;
                font-size: 26px;
            }
        }
    }
}
.circle-img-container {
    position: fixed;
    transform: translate3d(-50%,-50%,0);
    @include animation-spd(.6s);
    &.min {
        top: 0;
        left: 0;
        .circle-img {
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
    box-shadow: 0 0 12px 1px rgba(0,0,0,.4);
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
