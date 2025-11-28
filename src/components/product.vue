<template>
    <div :class="{'isClicked': clicked}" class="card">
        <div :style="{ background: bgColor }" class="productLabel">
            <p v-show="index === 0">-17%</p>
            <p v-show="index === 1">Hot</p>
            <p v-show="index === 2">Sale</p>
        </div>
        <div class="content">
            <img id="img" :src="image" alt="">
            <div class="product_details">
                <p>Hodo Foods</p>
                <p>{{ name }}</p>
                <p>{{ size }}</p>
                <div class="star">
                    <div class="star_icon" :class="stars_color">
                        <svg v-for="(_, index) in 5" :key="index" :class="stars_color(index)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="12" height="12" viewBox="0 0 256 256" xml:space="preserve">
                            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	                            <path d="M 47.755 3.765 l 11.525 23.353 c 0.448 0.907 1.313 1.535 2.314 1.681 l 25.772 3.745 c 2.52 0.366 3.527 3.463 1.703 5.241 L 70.42 55.962 c -0.724 0.706 -1.055 1.723 -0.884 2.72 l 4.402 25.667 c 0.431 2.51 -2.204 4.424 -4.458 3.239 L 46.43 75.47 c -0.895 -0.471 -1.965 -0.471 -2.86 0 L 20.519 87.588 c -2.254 1.185 -4.889 -0.729 -4.458 -3.239 l 4.402 -25.667 c 0.171 -0.997 -0.16 -2.014 -0.884 -2.72 L 0.931 37.784 c -1.824 -1.778 -0.817 -4.875 1.703 -5.241 l 25.772 -3.745 c 1.001 -0.145 1.866 -0.774 2.314 -1.681 L 42.245 3.765 C 43.372 1.481 46.628 1.481 47.755 3.765 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            </g>
                        </svg>
                    </div>
                    <p>(4.0)</p>
                </div>

                <div class="buy_section">
                    <div class="price">
                        <p>${{ discounted_price}}</p>
                        <p>${{ price }}</p> 
                    </div>
                    <button v-if="!clicked" class="bttV1">Add 
                        <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="9" height="9" viewBox="0 0 256 256" xml:space="preserve">
                            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	                            <path d="M 45 90 c -2.761 0 -5 -2.238 -5 -5 V 5 c 0 -2.761 2.239 -5 5 -5 c 2.762 0 5 2.239 5 5 v 80 C 50 87.762 47.762 90 45 90 z" style="stroke: #3BB77E; stroke-width: 4; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #3BB77E; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	                            <path d="M 85 50 H 5 c -2.761 0 -5 -2.238 -5 -5 c 0 -2.761 2.239 -5 5 -5 h 80 c 2.762 0 5 2.239 5 5 C 90 47.762 87.762 50 85 50 z" style="stroke: #3BB77E; stroke-width: 4; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #3BB77E; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            </g>
                        </svg></span>
                    </button>

                    <button v-else class="bttV2">1
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="6" height="6" viewBox="0 0 256 256" xml:space="preserve">
                                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	                                <path d="M 89.028 68.045 l -4.264 3.93 c -1.225 1.129 -3.132 1.051 -4.261 -0.174 l -34.473 -37.4 c -0.555 -0.602 -1.505 -0.602 -2.06 0 l -34.473 37.4 c -1.129 1.225 -3.037 1.302 -4.261 0.174 l -4.263 -3.93 c -1.225 -1.129 -1.302 -3.037 -0.174 -4.261 l 42.04 -45.609 c 1.164 -1.263 3.159 -1.263 4.323 0 l 42.04 45.609 C 90.331 65.008 90.253 66.916 89.028 68.045 z" style="stroke: #3BB77E; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(59,183,126); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                </g>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="6" height="6" viewBox="0 0 256 256" xml:space="preserve">
                                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	                                <path d="M 89.028 21.955 l -4.264 -3.93 c -1.225 -1.129 -3.132 -1.051 -4.261 0.174 l -34.473 37.4 c -0.555 0.602 -1.505 0.602 -2.06 0 l -34.473 -37.4 c -1.129 -1.225 -3.037 -1.302 -4.261 -0.174 l -4.263 3.93 c -1.225 1.129 -1.302 3.037 -0.174 4.261 l 42.04 45.609 c 1.164 1.263 3.159 1.263 4.323 0 l 42.04 -45.609 C 90.331 24.992 90.253 23.084 89.028 21.955 z" style="stroke: #3BB77E; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(59,183,126); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Product',

        props: {
            image: {
                type: String,
                required: true
            },

            name: {
                type: String,
                required: true
            },

            rating: {
                type: Number,
                required: true
            },

            size: {
                type: String,
                required: true
            },

            promotionAsPercentage: {
                type: Number,
                required: true
            },

            price: {
                type: Number,
                required: true
            },

            clicked: {
                type: Boolean,
                default: false
            },

            index: {
                type: Number,
                required: false
            }
        },

        computed: {
            discounted_price(): number {
                return Number((this.price - (this.price * (this.promotionAsPercentage / 100))).toFixed(2));
            },

            bgColor(): string {
                if (this.index === 0) return '#3BB77E'
                if (this.index === 1) return '#FD6E6E'
                if (this.index === 2) return '#FDC040'
                return ''
            }

        },

        methods: {
            stars_color(index: number) {
                return index < this.rating ? 'filled_star' : 'empty_star';
            }
        }
    }
</script>

<style scoped>
    .card {
        border: 1px solid #E5E5E5;
        border-radius: 15px;
        width: 100%;
        max-width: 298px;
        height: 402px;
        background: #ffffff;
    }

    .productLabel {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 58px;
        height: 32px;
        border-radius: 0px 30px 30px 0px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        color: white;
        font-size: 12px;
        margin-top: 20px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 246px;
    }

    .isClicked {
        border: 1px solid #BCE3C9;
        box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.07);
    }

    #img {
        width: auto;
        height: 183px;
        padding-top: 10px;
        padding-bottom: 25px;
    }

    .product_details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 19px;
    }

    .product_details > :first-child {
        color: #7E7E7E;
        font-size: 12px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
    .product_details > :nth-child(2) {
        width: 261px;
        font-size: 14px;
        font-weight: bold;
        font-family: 'Quicksand', sans-serif;
        color: #253D4E;
    }
    .product_details > :nth-child(3) {
        font-size: 12px;
        font-weight: 400;
        font-family: 'Lato', sans-serif;
        color: #7E7E7E;
    }
    .star {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #7E7E7E;
        margin-bottom: 10px;
    }
    .star_icon{
        display: flex;
        gap: 3px;
    }

    .filled_star path {
        fill: #FDC040 !important;
    }

    .empty_star path {
        fill: #CDCDCD !important;
    }

    .buy_section {
        width: 260px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Quicksand', sans-serif;
    }

    .price {
        display: flex;
        align-items: last baseline;
        gap: 6px;
    }

    .price > p:first-child {
        font-size: 20px;
        font-weight: bold;
        color: #3BB77E;
    }

    .price > p:nth-child(2) {
        font-size: 12px;
        font-weight: 700;
        font-family: 'Quicksand', sans-serif;
        color: #7E7E7E;
        text-decoration: line-through;
    }

    button {
        display: flex;
        align-items: center;
        width: 67px;
        height: 29px;
        font-weight: 700;
        font-family: 'Quicksand', sans-serif;
    }

    .bttV1 {
        justify-content: space-between;
        background: #DEF9EC;
        color: #3BB77E;
        border: none;
        border-radius: 4px;
        padding: 1px 10px;
    }

    .bttV2 {
        gap: 22px;
        padding-left: 20px;
        background: #ffffff;
        color: #3BB77E;
        border: 1.5px solid #3BB77E;
        border-radius: 4px;
    }

    .bttV2 div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>