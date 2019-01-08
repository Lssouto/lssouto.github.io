<template>
    <div id="pre-load" :class="{'hidden': hide}">
        <div class="pre-load-background">
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
            el: null,
            hide: false,
        };
    },
    mounted() {
        this.el = document.getElementById('pre-load');
        this.hideLoader();
    },
    methods: {
        showLoader() {
            const vm = this;
            this.hide = false;
            this.el.classList.remove('hide');
            setTimeout(() => {
                vm.el.classList.add('enter');
                vm.el.classList.remove('leave');
            }, 500);
        },
        hideLoader() {
            const vm = this;
            setTimeout(() => {
                vm.el.classList.add('leave');
            }, 700);
            setTimeout(() => {
                vm.el.classList.add('hide');
            }, 1450);
            setTimeout(() => {
                vm.hide = true;
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
