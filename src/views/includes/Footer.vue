<template>
    <footer class="page-footer">
        <div class="container">
            <div class="contacts">
                <ul class="contact-list">
                    <li>
                        <a href="mailto:lssouto96@gmail.com">
                            <span class="icon-mail"></span>
                            <span class="description">
                                lssouto96@gmail.com
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lucas-da-silva-souto-bb9856115/">
                            <span class="icon-linkedin"></span>
                            <span class="description">
                                Lucas da Silva Souto
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/lssouto">
                            <span class="icon-github"></span>
                            <span class="description">
                                LSSouto
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <span class="made-by">
                Desenvolvido por <b>LSSouto</b>
            </span>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'c-footer',
    };
</script>
<style lang="scss">
footer.page-footer {
    padding: 12px 0;
    background-color: lighten($black-2, 5%);
    text-align: center;
    font-size: 12px;
    color: $white;

    .container {
        @include flex-align(1 0 auto);
        justify-content: space-between;
    }

    span b{
        font-size: 14px;
    }

    .made-by {
        padding-top: 3px;
    }

    .contact-list {
        @include flex-align(1 1 33%);
        justify-content: space-around;
        li {
            margin-right: 15px;
            @include media($md, 'max') {
                margin-bottom: 10px;
            }
        }
        a  {
            color: $white;
            font-size: 13px;
            span[class^="icon-"] {
                @extend .slow-e;
                color: $primary;
                display: inline-block;
                vertical-align: middle;
                font-size: 26px;
                margin-right: 6px;
            }
            .description {
                @extend .fast-e;
                opacity: .3;
            }
            &:hover {
                span[class^="icon-"]  {
                    color: $secundary;
                }
                .description {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
