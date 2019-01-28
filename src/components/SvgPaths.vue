<template>
    <svg class="paths">
        <g class="first-paths">
            <path   class="path-top"
                    stroke="#262730"
                    stroke-width="2"
                    fill="none"
            />
            <path   class="path-middle"
                    stroke="#262730"
                    stroke-width="2"
                    fill="none"
            />
            <path   class="path-bottom"
                    stroke="#262730"
                    stroke-width="2"
                    fill="none"
            />
        </g>
        <g class="second-paths">
            <path   class="path-top"
                    stroke="#1b84aa"
                    stroke-width="2"
                    fill="none"
            />
            <path   class="path-middle"
                    stroke="#1b84aa"
                    stroke-width="2"
                    fill="none"
            />
            <path   class="path-bottom"
                    stroke="#1b84aa"
                    stroke-width="2"
                    fill="none"
            />
        </g>
    </svg>
</template>
<script>
    export default {
        name: 'Svg-paths',
        data() {
            return {
                animations: {
                    first: 430,
                    second: 460,
                },
                pathPosition: {
                    first: {
                        startPosition: {
                            horizontal: 0,
                            vertical: 0,
                        },
                        midPosition: {
                            horizontal: 0,
                            vertical: 0,
                        },
                        endPosition: {
                            horizontal: 0,
                            vertical: 0,
                        },
                    },
                    second: {
                        startPosition: {
                            horizontal: 0,
                            vertical: 0,
                        },
                        midPosition: {
                            horizontal: 0,
                            vertical: 0,
                        },
                        endPosition: {
                            horizontal: 0,
                            vertical: 0,
                        },
                    },
                },
            };
        },
        mounted() {
            const p1 = document.querySelector('.details .section-text p:first-child');
            const p2 = document.querySelector('.details .section-text p:last-child');

            this.pathPosition.first.startPosition = {
                horizontal: p1.offsetLeft,
                vertical: p1.offsetHeight / 2,
            };
            this.pathPosition.first.midPosition = {
                horizontal: p2.offsetLeft + (p2.offsetWidth / 2),
                vertical: p1.offsetHeight / 2,
            };
            this.pathPosition.first.endPosition = {
                horizontal: p2.offsetLeft + (p2.offsetWidth / 2),
                vertical: p2.offsetHeight,
            };

            this.pathPosition.second.startPosition = {
                horizontal: p2.offsetLeft + p2.offsetWidth,
                vertical: 55 + p1.offsetHeight + (p2.offsetHeight / 2),
            };
            this.pathPosition.second.midPosition = {
                horizontal: p1.offsetLeft + (p2.offsetWidth / 2),
                vertical: 55 + p1.offsetHeight + (p2.offsetHeight / 2),
            };
            this.pathPosition.second.endPosition = {
                horizontal: p1.offsetLeft + (p2.offsetWidth / 2),
                vertical: p1.offsetHeight,
            };
        },
        methods: {
            pathEffect(elements, { distance, duration }, delay) {
                let current = 0;
                const stepTime = 10;
                const amount = distance / (duration / stepTime);
                // stepConfig.time = duration / 10;
                // stepConfig.amount = distance / stepConfig.time;
                for (let step = 0; step < distance; step += amount) {
                    setTimeout(() => {
                        elements.top.el.setAttribute('d', `
                            ${elements.top.actualValue}
                            ${elements.top.field}${step}
                        `);
                        elements.middle.el.setAttribute('d', `
                            ${elements.middle.actualValue}
                            ${elements.middle.field}${step}
                        `);
                        elements.bottom.el.setAttribute('d', `
                            ${elements.bottom.actualValue}
                            ${elements.bottom.field}${step}
                        `);
                    }, current + delay);
                    current += 10;
                }
            },
            createPathEffect() {
                const svg = {
                    top: document.querySelector('.paths .first-paths .path-top'),
                    middle: document.querySelector('.paths .first-paths .path-middle'),
                    bottom: document.querySelector('.paths .first-paths .path-bottom'),
                };

                const { startPosition, midPosition, endPosition } = this.pathPosition.first;


                svg.top.setAttribute('d', `M ${startPosition.horizontal} ${startPosition.vertical - 15}`);
                svg.middle.setAttribute('d', `M ${startPosition.horizontal + 15} ${startPosition.vertical}`);
                svg.bottom.setAttribute('d', `M ${startPosition.horizontal + 30} ${startPosition.vertical + 15}`);

                // First Path
                let distance = startPosition.horizontal - midPosition.horizontal;

                this.pathEffect({
                    top: {
                        el: svg.top,
                        actualValue: `M ${startPosition.horizontal} ${startPosition.vertical - 15}`,
                        field: 'h-',
                    },
                    middle: {
                        el: svg.middle,
                        actualValue: `M ${startPosition.horizontal + 15} ${startPosition.vertical}`,
                        field: 'h-',
                    },
                    bottom: {
                        el: svg.bottom,
                        actualValue: `M ${startPosition.horizontal + 30} ${startPosition.vertical + 15}`,
                        field: 'h-',
                    },
                }, { distance, duration: this.animations.first }, 0);

                // Second Path
                distance = ((-midPosition.vertical + endPosition.vertical) * 1.55) + 30;

                this.pathEffect({
                    top: {
                        el: svg.top,
                        actualValue:
                            `M ${startPosition.horizontal} ${startPosition.vertical - 15}
                             h -${startPosition.horizontal - midPosition.horizontal}`,
                        field: 'v',
                    },
                    middle: {
                        el: svg.middle,
                        actualValue:
                            `M ${startPosition.horizontal + 15} ${startPosition.vertical}
                             h -${startPosition.horizontal - midPosition.horizontal}`,
                        field: 'v',
                    },
                    bottom: {
                        el: svg.bottom,
                        actualValue:
                            `M ${startPosition.horizontal + 30} ${startPosition.vertical + 15}
                             h -${startPosition.horizontal - midPosition.horizontal}`,
                        field: 'v',
                    },
                }, { distance, duration: this.animations.second }, this.animations.first);
            },
            createSecondPathEffect() {
                const svg = {
                    top: document.querySelector('.paths .second-paths .path-top'),
                    middle: document.querySelector('.paths .second-paths .path-middle'),
                    bottom: document.querySelector('.paths .second-paths .path-bottom'),
                };

                const { startPosition, midPosition, endPosition } = this.pathPosition.second;

                svg.top.setAttribute('d', `M ${startPosition.horizontal - 30} ${startPosition.vertical - 15}`);
                svg.middle.setAttribute('d', `M ${startPosition.horizontal - 15} ${startPosition.vertical}`);
                svg.bottom.setAttribute('d', `M ${startPosition.horizontal} ${startPosition.vertical + 15}`);

                // First Path
                let distance = -startPosition.horizontal + midPosition.horizontal;

                this.pathEffect({
                    top: {
                        el: svg.top,
                        actualValue: `M ${startPosition.horizontal - 30} ${startPosition.vertical - 15}`,
                        field: 'h',
                    },
                    middle: {
                        el: svg.middle,
                        actualValue: `M ${startPosition.horizontal - 15} ${startPosition.vertical}`,
                        field: 'h',
                    },
                    bottom: {
                        el: svg.bottom,
                        actualValue: `M ${startPosition.horizontal} ${startPosition.vertical + 15}`,
                        field: 'h',
                    },
                }, { distance, duration: this.animations.first }, 0);

                // Second Path
                distance = ((midPosition.vertical - endPosition.vertical) * 1.55);

                this.pathEffect({
                    top: {
                        el: svg.top,
                        actualValue:
                            `M ${startPosition.horizontal - 30} ${startPosition.vertical - 15}
                             h ${-startPosition.horizontal + midPosition.horizontal}`,
                        field: 'v-',
                    },
                    middle: {
                        el: svg.middle,
                        actualValue:
                            `M ${startPosition.horizontal - 15} ${startPosition.vertical}
                             h ${-startPosition.horizontal + midPosition.horizontal}`,
                        field: 'v-',
                    },
                    bottom: {
                        el: svg.bottom,
                        actualValue:
                            `M ${startPosition.horizontal} ${startPosition.vertical + 15}
                             h ${-startPosition.horizontal + midPosition.horizontal}`,
                        field: 'v-',
                    },
                }, { distance, duration: this.animations.second }, this.animations.first);
            },
        },
        props: [
            'status',
        ],
        watch: {
            status(value) {
                switch (value) {
                    case 'first':
                        this.createPathEffect();
                        break;

                    case 'second':
                        this.createSecondPathEffect();
                        break;

                    default:
                        break;
                }
            },
        },
    };
</script>
<style lang="scss">
svg {
    @extend .slow-e;
    position: absolute;
    /*z-index: 999;*/
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
