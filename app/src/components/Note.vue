<template>
    <div class="note-container">
        <slot name="title">no-title</slot>
        <div ref="note" class="collapse-container" :style='{height: elementHeight}'>
            <slot name="content">no-content</slot>
        </div>
        <div class="action"
             :class="{collapsed: isCollapsed}"
             v-show="extend != false"
             @click="changeState"
        >
            <span>{{ isCollapsed ? 'Ver Mais' : 'Ver Menos'}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Note',
        data() {
            return {
                isCollapsed: false,
                initialHeight: '',
                elementHeight: '',
            };
        },
        mounted() {
            this.initialHeight =
                parseInt(getComputedStyle(this.$refs.note).height.replace('px', ''), 10);
            this.changeState();
        },
        methods: {
            changeState() {
                if (this.isCollapsed) {
                    this.elementHeight = `${this.initialHeight}px`;
                } else {
                    this.elementHeight = `${this.collapsedHeight}px`;
                }
                this.isCollapsed = !this.isCollapsed;
            },
        },
        props: [
            'collapsedHeight',
            'extend',
        ],
    };
</script>
<style lang="scss">
    .note{
        &-container {
            /*overflow: hidden;*/
            position: relative;
            .collapse-container {
                @include animation-spd(.44s);
                overflow: hidden;

            }
            .action {
                margin-bottom: 10px;
                position: absolute;
                bottom: -20px;
                width: 100%;
                right: 0;
                z-index: 10;
                text-align: center;
                padding: 0 3px;
                cursor: pointer;
                @extend .fast-e;
                &.collapsed {
                    bottom: -10px;
                }
            }
        }
    }
</style>
