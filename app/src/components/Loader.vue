<template>
    <div id="pre-load" v-if="!hide" :class="state">
        <div class="pre-load-background">
            <div class="pre-loader-effect">
              <div class="wave-1"></div>
              <div class="wave-2"></div>
            </div>
            <div class="pre-load-main">
                <div class="img-container">
                    <div class="img-animation">
                        <img src="@/assets/images/owl-logo-blink.png" class="blink"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loader',
    data() {
        return {
            hide: true,
            state: 'hide',
        };
    },
    mounted() {
        this.removeOutsideLoader();
    },
    methods: {
        removeOutsideLoader() {
            const outsideLoader = document.querySelector('#pre-load.__outside');
            if (!outsideLoader) { return; }
            setTimeout(() => {
                outsideLoader.querySelector('.pre-loader-effect').remove();
                outsideLoader.querySelector('.initial-load-state').style.height = '254px';
                outsideLoader.querySelector('.initial-load-state').style['margin-left'] = '-23px';
            }, 100);
            setTimeout(() => {
                outsideLoader.classList.add('leave');
            }, 700);
            setTimeout(() => {
                outsideLoader.classList.add('hide');
            }, 1450);
            setTimeout(() => {
                outsideLoader.remove();
            }, 1750);
        },
        showLoader() {
            this.state = this.state.replace('leave ', '');
            this.hide = false;
            setTimeout(() => {
                this.state = 'enter';
            }, 500);
        },
        hideLoader() {
            setTimeout(() => {
                this.state = 'leave ';
            }, 700);
            setTimeout(() => {
                this.state += 'hide ';
            }, 1450);
            setTimeout(() => {
                this.hide = true;
            }, 1750);
        },
    },
    props: [
        'show',
    ],
    watch: {
        show(value) {
            if (value) {
                this.showLoader();
            } else {
                this.hideLoader();
            }
        },
    },
};
</script>
<style lang="scss">
    .img-animation{
        overflow: hidden;
        width: 200px;
        height: 200px;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-50%,0);
        img{
            height: 200px;
            display: block;
            left:0;
            position: absolute;
            &.blink{
                animation: blink 5s infinite;
                animation-timing-function: steps(1);
            }
        }
    }
</style>
