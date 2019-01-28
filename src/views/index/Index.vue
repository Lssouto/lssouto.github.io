<template>
    <div id="index">
        <owl :styles="owlStyle" :animationClass="owlState" />
        <section class="typewriter">
            <div class="container">
                <div class="typewriter-container">
                    <typewriter text="^.~, Tudo bom?" start="2300" duration="800"  />
                    <typewriter text="Este é meu ajudante" start="3000" duration="1400" />
                    <!--<typewriter text="^.~, Tudo bom?" start="1750" duration="800" />-->
                    <!--<typewriter text="Este é meu ajudante" start="2600" duration="1400" />-->
                    <!--<typewriter text="Clique nele se quiser navegar" -->
                    <!--            start="5000" -->
                    <!--            duration="1800" -->
                    <!--/>-->
                </div>
            </div>
        </section>
        <section class="details">
            <div class="container">
                <div class="section-text">
                    <p class="text-left owl-to-center">
                        Prazer, sou Lucas da Silva Souto. <br>
                        Desenvolvedor front-end.
                    </p>
                    <svg-paths :status="pathStatus"/>
                    <p class="text-left">
                        Me dedico ao desenvolvimento web/mobile desde 2016
                        e atualmente trabalho com Angular 2/5 e Ionic 3.
                    </p>

                </div>
            </div>
        </section>
        <section class="work-details bg-primary">
            <div class="container">
                <p>
                    Já participei do desenvolvimento de aplicações
                    com Jquery, VanillaJs, Laravel, CodeIgniter e Spring Bot. <br>
                    Atualmente meu foco está em aplicações utilizando Vuejs e ExpressJs.
                </p>
            </div>
        </section>
        <portifolio />
        <schoolage />
        <c-footer />
        <!--<section class="goals">-->
        <!--    <div class="container"></div>-->
        <!--</section>-->
    </div>
</template>
<script>
    import { debounce } from 'lodash-es';
    import Typewriter from '@/components/Typewriter.vue';
    import Owl from '@/components/Owl.vue';
    import SvgPaths from '@/components/SvgPaths.vue';
    import Note from '@/components/Note.vue';
    import cFooter from '@/views/includes/Footer.vue';
    import Portifolio from './Portifolio.vue';
    import Schoolage from './Schoolage.vue';

    export default {
        name: 'Homepage',
        components: {
            Typewriter,
            Owl,
            SvgPaths,
            Note,
            cFooter,
            Portifolio,
            Schoolage,
        },
        data() {
            return {
                owlState: '',
                owlAnimationBreakpoints: {},
                owlStyle: {
                    transform: '',
                },
                pathStatus: '',
            };
        },
        mounted() {
            window.scrollTo(0, 0);
            this.getOwlAnimationBreakpoints();
            this.createChainAnimation();
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
                this.owlAnimationHandler(scrollValue);
                this.pageAnimationHandler(scrollValue);
            }, 30, { leading: true }),
            owlAnimationHandler(scrollValue) {
                const breakpoints = Object.keys(this.owlAnimationBreakpoints);
                for (let index = 0; index < breakpoints.length; index += 1) {
                    if (
                        scrollValue >= this.owlAnimationBreakpoints[breakpoints[index]]
                        && scrollValue < this.owlAnimationBreakpoints[breakpoints[index + 1]]
                    ) {
                        this.changeOwlState(breakpoints[index]);
                        return;
                    }
                }
                // Saiu do loop, verifica se pode ser a ultima animacao
                if (
                        scrollValue >=
                        this.owlAnimationBreakpoints[breakpoints[breakpoints.length - 1]]
                ) {
                    this.changeOwlState(breakpoints[breakpoints.length - 1]);
                } else {
                    this.changeOwlState('');
                }
            },
            changeOwlState(state) {
                new Promise((resolve) => {
                    this.owlState = 'reset';
                    resolve();
                }).then(() => {
                    this.owlState = state;
                });
            },
            pageAnimationHandler(scrollValue) {
                let list = document.querySelectorAll('.skills-list > li');
                list = Array.prototype.slice.call(list);
                list.forEach((li) => {
                    const distanceFromTop = li.offsetTop;
                    if (distanceFromTop < (window.innerHeight * 0.7) + scrollValue) {
                        li.classList.add('active');
                    } else {
                        li.classList.remove('active');
                    }
                });
            },
            getOwlAnimationBreakpoints() {
                this.owlAnimationBreakpoints.initial = 0;
                this.owlAnimationBreakpoints['owl-to-center'] = this.getElementBreakpoint('.owl-to-center');
                this.owlAnimationBreakpoints.curious =
                    (this.getElementBreakpoint('section.work-details') +
                    document.querySelector('section.work-details').offsetHeight) + 75;
                console.log(this.owlAnimationBreakpoints);
            },
            getElementBreakpoint(identifier) {
                const el = document.querySelector(identifier);
                const showBreakpoint = window.innerHeight * 0.3;
                if (el.offsetTop < showBreakpoint) {
                    return Math.round(el.offsetTop);
                }
                    return Math.round(el.offsetTop - showBreakpoint - el.offsetHeight);
            },
            createChainAnimation() {
                setTimeout(() => {
                    document.querySelector('section.typewriter').classList.add('active');
                    setTimeout(() => {
                        document.querySelector('section.details p:first-child').classList.add('active');
                        this.pathStatus = 'first';
                        setTimeout(() => {
                            document.querySelector('section.details p:last-child').classList.add('active');
                            setTimeout(() => {
                                this.pathStatus = 'second';
                                document.querySelector('section.work-details').classList.add('active');
                            }, 300);
                        }, 850);
                    }, 480);
                }, 2000);
            },
        },
    };
</script>
<style lang="scss">
section {
    padding: 55px 0;
}
section.typewriter {
    color: $white;
    position: relative;
    padding: 40px 0;
    /*min-height: 420px;*/
    overflow: hidden;
    @extend .fast-e;
    .container {
        display: flex;
        flex-wrap: nowrap;
        & > *{
            flex: 1 1 50%;
        }
    }
    &:before {
        @include pseudo(absolute, block);
        @include animation-spd(.65s);
        left: 0;
        top: -100%;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: $black-2;
    }
    &.active {
        &:before {
            transform: translate3d(0, 100%,0);
        }
    }
    .typewriter-container {
        font-size: 45px;
        margin-left: 13%;
        margin-top: 15px;
        .typewriter{
            display: block;
            min-height: 65px;
            margin-bottom: 6px;
        }
    }
}
section.details {
    padding: 25px 0;
    position: relative;
    .section {
        &-title {
            margin-bottom: 50px;
        }
        &-text {
            p {
                margin: 0;
                font-size: 22px;
                padding: 15px 25px;
                background-color: $white;
                position: relative;
                z-index: 21;
                opacity: 0;
                @include animation-spd(.55s);
                &.active {
                    opacity: 1;
                }
            }
            p:first-child {
                width: 40%;
                font-size: 26px;
                margin-left: 55%;
                transform: translate(0, -50%);
                border: 1px solid $black-2;
            }
            p:last-child {
                width: 45%;
                font-size: 22px;
                text-align: justify;
                transform: translate(0, 35%);
                border: 1px solid $primary;
            }
        }
    }
}
section.work-details {
    @include animation-spd(.22);
    position: relative;
    z-index: 20;
    opacity: 0;

    &.active{
        opacity: 1
    }
    p {
        margin: 25px 0 45px 0;
        font-size: 24px;
        text-align: center;
        width: 75%;
        margin: 0 auto;
    }
}
</style>
