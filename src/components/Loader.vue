<template>
    <div id="pre-load">
        <div class="pre-load-background">
            <div class="pre-load-main">
                <span class="pre-load-dot">.</span>
                <span class="pre-load-dot">.</span>
                <span class="pre-load-dot">.</span>
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
        };
    },
    mounted() {
        this.el = document.getElementById('pre-load');
        this.hideLoader();
    },
    methods: {
        showLoader() {
            const vm = this;
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
            }, 500);
            setTimeout(() => {
                vm.el.classList.add('hide');
            }, 1250);
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

