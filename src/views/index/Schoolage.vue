<template>
    <section class="schoolage bg-light-gray">
        <div class="container">
            <div class="section-title">
                Habilidades
            </div>
            <div class="section-content">
                <ul class="skills-list">
                    <li>
                        <div class="sub-title certificate-title">Formação</div>
                        <ul class="__simple certificate-list">
                            <li>
                                <div> IFSP - Campus Cubatão</div>
                                <p>Curso Técnico em Informática Integrado ao Ensino Médio</p>
                            </li>
                            <li>
                                <div> Fatec - Rubens Lara</div>
                                <p>Curso Superior em Análise e Desenvolvimento de Sistemas</p>
                            </li>
                        </ul>
                    </li>
                    <li v-for="skill in skillsList" :key="skill.id">
                        <template v-if="skill.note">
                            <note collapsedHeight="270">
                                <div class="sub-title" slot="title">{{skill.title}}</div>
                                <ul class="__simple" slot="content">
                                    <li v-for="sk in skill.items" :key="sk">{{ sk }}</li>
                                </ul>
                            </note>
                        </template>
                        <template v-else>
                            <div class="sub-title">{{skill.title}}</div>
                            <ul class="__simple">
                                <li v-for="sk in skill.items" :key="sk">{{ sk }}</li>
                            </ul>
                        </template>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
    import note from '@/components/Note.vue';

    export default {
        name: 'index-schoolage',
        components: {
            note,
        },
        data() {
            return {
                skillsList: [
                    {
                        id: 0,
                        title: 'Front-end/Mobile',
                        items: [
                            'Criação de Grid e Flex Layout responsivos',
                            'Configuração de Gulp e Webpack',
                            'Utilização de pré-processadores: Sass e Stylus',
                            'Criação e otimização de efeitos',
                            'VanillaJs e ES6',
                            'Frameworks: VueJs, Angular 2/5 e Ionic 3',
                            'Manipulação de svg usando d3',
                            'Manipulação e criação de animações',
                        ],
                        note: true,
                    },
                    {
                        id: 1,
                        title: 'Back-end',
                        items: [
                            'Uso de NodeJs e ExpressJs para criação de web services',
                            'Utilização de Jwt para controle de acesso',
                            'Criação de Rest APIs',
                            'Integrações com banco de dados Sql e NoSql',
                        ],
                    },
                    {
                        id: 2,
                        title: 'Outras',
                        items: [
                            'Utiliação de TDD e BDD no desenvolvimento de projetos',
                            'Criação de teste unitários',
                            'Atuação com métodos ágeis - Scrum',
                            'Versionamento e organização - GIT e GIT Flow',
                        ],
                    },
                ],
            };
        },
    };
</script>
<style lang="scss">
section.schoolage {
    .section {
        &-title {
            text-align: center;
            font-size: 30px;
            text-transform: uppercase;
            color: $black-2;
        }
        &-content {
            padding-top: 60px;
            .certificate {
                &-list {
                    padding: 0 !important;
                    li {
                        padding: 15px 25px;
                        &:not(:last-child) {
                            border-bottom: 1px solid $white;
                        }
                        div {
                            font-size: 17px;
                            margin-bottom: 10px;
                        }
                    }
                    p {
                        margin: 15px 0 0 0;
                    }
                }
            }
            .sub-title {
                font-size: 24px;
                text-transform: capitalize;
                text-align: center;
                padding: 15px 25px;
            }
            .skills-list {
                justify-content: space-around;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                .__simple {
                    padding: 10px 25px;
                    min-height: 270px;
                    margin-bottom: 15px;
                }
                & > li {
                    width: 250px;
                    &:nth-child(1) {
                        @include note($primary);
                    }
                    &:nth-child(2) {
                        @include note($dark-secundary);
                        margin-bottom: 20px;
                        .action {
                            background-color: $light-gray;
                            color: $black;
                            transition: all linear .22s .44s;
                        }
                        &.active {
                            .action {
                                background-color: darken($dark-secundary, 10%);
                                color: $white;
                                bottom: -10px;
                            }
                        }
                    }
                    &:nth-child(3) {
                        @include note($accent);
                    }
                    &:nth-child(4) {
                        @include note($dark-primary);
                    }
                }
            }
        }
    }
}
</style>
