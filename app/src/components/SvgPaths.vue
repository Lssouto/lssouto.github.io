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
                mobileBreakpoint: 768,
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

            // Mobile/Desktop
            if (window.innerWidth > this.mobileBreakpoint) {
                this.setWebConfig(p1, p2);
            } else {
                this.setMobileConfig(p1, p2);
            }
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
            setMobileConfig(p1, p2) {
                this.pathPosition.first.startPosition = {
                    horizontal: p1.offsetWidth * 0.2,
                    vertical: p1.offsetHeight * 0.6,
                };
                this.pathPosition.first.endPosition = {
                    horizontal: p2.offsetWidth * 0.2,
                    vertical: p2.offsetHeight + (p2.offsetTop - p1.offsetTop),
                };

                this.pathPosition.second.startPosition = {
                    horizontal: p2.offsetWidth * 0.8,
                    vertical: p2.offsetHeight + (p2.offsetTop - p1.offsetTop),
                };
                this.pathPosition.second.endPosition = {
                    horizontal: p2.offsetWidth * 0.8,
                    vertical: p1.offsetHeight * 0.6,
                };
                this.animations = {
                    first: 900,
                    second: 0,
                };
            },
            setWebConfig(p1, p2) {
                this.pathPosition.first.startPosition = {
                    horizontal: p1.offsetLeft,
                    vertical: p1.offsetHeight / 3,
                };
                this.pathPosition.first.midPosition = {
                    horizontal: p2.offsetLeft + (p2.offsetWidth / 2),
                    vertical: p1.offsetHeight / 3,
                };
                this.pathPosition.first.endPosition = {
                    horizontal: p2.offsetLeft + (p2.offsetWidth / 2),
                    // 30 = diff between start and end line
                    vertical: (p2.offsetTop - p1.offsetTop) + 30,
                };

                this.pathPosition.second.startPosition = {
                    horizontal: p2.offsetLeft + p2.offsetWidth,
                    vertical: (p2.offsetHeight) + (p2.offsetTop - p1.offsetTop),
                };
                this.pathPosition.second.midPosition = {
                    horizontal: p1.offsetLeft + (p2.offsetWidth / 2),
                    vertical: (p2.offsetHeight) + (p2.offsetTop - p1.offsetTop),
                };
                this.pathPosition.second.endPosition = {
                    horizontal: p1.offsetLeft + (p2.offsetWidth / 2),
                    vertical: p1.offsetHeight,
                };
                this.animations = {
                    first: 430,
                    second: 460,
                };
            },
            getFirstSvgs() {
                return {
                    top: document.querySelector('.paths .first-paths .path-top'),
                    middle: document.querySelector('.paths .first-paths .path-middle'),
                    bottom: document.querySelector('.paths .first-paths .path-bottom'),
                };
            },
            getSecondSvgs() {
                return {
                    top: document.querySelector('.paths .second-paths .path-top'),
                    middle: document.querySelector('.paths .second-paths .path-middle'),
                    bottom: document.querySelector('.paths .second-paths .path-bottom'),
                };
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
                const svg = this.getSecondSvgs();

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
            createMobilePathEffect() {
                const svg = this.getFirstSvgs();

                const { startPosition, endPosition } = this.pathPosition.first;


                svg.top.setAttribute('d', `M ${startPosition.horizontal - 15} ${startPosition.vertical}`);
                svg.middle.setAttribute('d', `M ${startPosition.horizontal} ${startPosition.vertical}`);
                svg.bottom.setAttribute('d', `M ${startPosition.horizontal + 15} ${startPosition.vertical}`);

                // First Path
                const distance = endPosition.vertical - startPosition.vertical;

                this.pathEffect({
                    top: {
                        el: svg.top,
                        actualValue: `M ${startPosition.horizontal - 15} ${startPosition.vertical}`,
                        field: 'v',
                    },
                    middle: {
                        el: svg.middle,
                        actualValue: `M ${startPosition.horizontal} ${startPosition.vertical}`,
                        field: 'v',
                    },
                    bottom: {
                        el: svg.bottom,
                        actualValue: `M ${startPosition.horizontal + 15} ${startPosition.vertical}`,
                        field: 'v',
                    },
                }, { distance, duration: this.animations.first }, 0);
            },
            createMobileSecondPathEffect() {
                const svg = this.getSecondSvgs();

                const { startPosition, endPosition } = this.pathPosition.second;

                svg.top.setAttribute('d', `M ${startPosition.horizontal - 15} ${startPosition.vertical}`);
                svg.middle.setAttribute('d', `M ${startPosition.horizontal} ${startPosition.vertical}`);
                svg.bottom.setAttribute('d', `M ${startPosition.horizontal + 15} ${startPosition.vertical}`);

                // First Path
                const distance = startPosition.vertical - endPosition.vertical;
                this.pathEffect({
                    top: {
                        el: svg.top,
                        actualValue: `M ${startPosition.horizontal - 15} ${startPosition.vertical}`,
                        field: 'v-',
                    },
                    middle: {
                        el: svg.middle,
                        actualValue: `M ${startPosition.horizontal} ${startPosition.vertical}`,
                        field: 'v-',
                    },
                    bottom: {
                        el: svg.bottom,
                        actualValue: `M ${startPosition.horizontal + 15} ${startPosition.vertical}`,
                        field: 'v-',
                    },
                }, { distance, duration: this.animations.first }, 0);
            },
        },
        props: [
            'status',
        ],
        watch: {
            status(value) {
                switch (value) {
                    case 'first':
                        if (window.innerWidth > this.mobileBreakpoint) {
                            this.createPathEffect();
                        } else {
                            this.createMobilePathEffect();
                        }
                        break;

                    case 'second':
                        if (window.innerWidth > this.mobileBreakpoint) {
                            this.createSecondPathEffect();
                        } else {
                            this.createMobileSecondPathEffect();
                        }
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
