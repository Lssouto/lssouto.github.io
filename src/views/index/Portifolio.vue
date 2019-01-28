<template>
    <section class="portifolio">
        <div class="section-title">
            Portifólio
        </div>
        <div class="container">
            <ul class="portifolio-list">
                <li v-for="portifolio in portifolioList" :key="portifolio.id">
                    <img :src="portifolio.image.link"
                         :alt="portifolio.image.alt"
                         target="_blank"
                    />
                    <div class="hover-container">
                        <div class="portifolio-item-title">
                            {{portifolio.title}}
                        </div>
                        <div class="portifolio-item-description">
                            {{portifolio.description}}
                        </div>
                        <div class="portifolio-item-btn">
                            <a :href='portifolio.link' class="btn bg-primary">
                                Visualizar
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'index-portifolio',
        data() {
            return {
                portifolioList: [
                    {
                        id: 0,
                        title: 'Trabalhe nos EUA',
                        image: {
                            // eslint-disable-next-line
                            link: require('@/assets/images/portifolio-trabalhar-nos-eua-2.png'),
                            alt: 'Site trabalhar nos Estados Unidos',
                        },
                        link: 'http://trabalharnoseua.com.br/',
                        description: 'Aprensentando muitos textos o site do trabalhar nos EUA ' +
                            'foi feito de uma maneira que deixe a leitura menos cansativa e ' +
                            'simples de ser entendida.',
                    },
                    {
                        id: 1,
                        title: 'Tec Gelo Santos',
                        image: {
                            // eslint-disable-next-line
                            link: require('@/assets/images/portifolio-tec-gelo.png'),
                            alt: 'Site Tec Gelo Santos',
                        },
                        link: 'http://www.tecgelo.com.br/',
                        description: 'Um site com layout simples, ' +
                            'mas pontual e claro para mostrar os serviços do cliente.',
                    },
                    {
                        id: 2,
                        title: 'Diário Oficial de Cubatão',
                        image: {
                            // eslint-disable-next-line
                            link: require('@/assets/images/portifolio-diario-oficial-2.png'),
                            alt: 'Site Diario Oficial',
                        },
                        link: 'http://www.cubatao.sp.gov.br/diariooficial/',
                        description: 'Um site que apresenta um layout um pouco diferente, ' +
                            'focado na visualização dos anúcios feitos pela prefeitura de Cubatão.',
                    },
                    {
                        id: 3,
                        title: 'Front-dev template',
                        image: {
                            // eslint-disable-next-line
                            link: require('@/assets/images/gulp.png'),
                            alt: 'Front-dev template',
                        },
                        link: 'https://github.com/Lssouto/front-dev',
                        description: 'Um projeto de desenvolvimento front-end utilizando gulp, sass e babel. ' +
                            'Fácil de integrar com outras estruturas, você pode definir onde exportar os arquivos ' +
                            'ou apenas minimizar os arquivos e fazer o upload.',
                    },
                ],
            };
        },
    };
</script>
<style lang="scss">
.section-title {
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    color: $black-2;
}
section.portifolio {
    .portifolio-list {
        margin-top: 60px;
        @include flex-align(0 1 50%);
        flex-wrap: wrap;
        & > li {
            overflow: hidden;
            position: relative;
            height: 300px;
            img {
                width: 100%;
                /*height: 100%;*/
            }
            .hover-container{
                @extend .fast-e;
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0;
                z-index: 11;
                color: $white;
                font-weight: bolder;
                text-align: center;
                padding: 15px 25px;
                width: 100%;
            }
            .portifolio-item {
                &-title {
                    font-size: 22px;
                }
                &-description {
                    margin: 20px 0;
                    font-size: 16px;
                }
                &-btn a{
                    margin-top: 10px;
                }
            }
            /*Dark Mask*/
            &:before {
                @include pseudo(absolute,block);
                @extend .fast-e;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                z-index: 10;
                background-color: rgba($black,.65);
            }
            &:hover {
                &:before,
                .hover-container {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
