<template>
    <div class="card">
        <div class="isAvailable">
            <p>In Stock</p>
        </div>
        <p id="title">{{ title }}</p>
        <Rating :rating="rating"/>
        <div class="price">
            <p>${{ price }}</p>
            <p>${{ discounted_price }}</p>
        </div>
        <p id="detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!</p>
        <div class="options">
            <button class="btnAdd">1
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="10" height="10" viewBox="0 0 256 256" xml:space="preserve">
                        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	                        <path d="M 89.028 68.045 l -4.264 3.93 c -1.225 1.129 -3.132 1.051 -4.261 -0.174 l -34.473 -37.4 c -0.555 -0.602 -1.505 -0.602 -2.06 0 l -34.473 37.4 c -1.129 1.225 -3.037 1.302 -4.261 0.174 l -4.263 -3.93 c -1.225 -1.129 -1.302 -3.037 -0.174 -4.261 l 42.04 -45.609 c 1.164 -1.263 3.159 -1.263 4.323 0 l 42.04 45.609 C 90.331 65.008 90.253 66.916 89.028 68.045 z" style="stroke: #3BB77E; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(59,183,126); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                        </g>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="10" height="10" viewBox="0 0 256 256" xml:space="preserve">
                        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	                        <path d="M 89.028 21.955 l -4.264 -3.93 c -1.225 -1.129 -3.132 -1.051 -4.261 0.174 l -34.473 37.4 c -0.555 0.602 -1.505 0.602 -2.06 0 l -34.473 -37.4 c -1.129 -1.225 -3.037 -1.302 -4.261 -0.174 l -4.263 3.93 c -1.225 1.129 -1.302 3.037 -0.174 4.261 l 42.04 45.609 c 1.164 1.263 3.159 1.263 4.323 0 l 42.04 -45.609 C 90.331 24.992 90.253 23.084 89.028 21.955 z" style="stroke: #3BB77E; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(59,183,126); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                        </g>
                    </svg>
                </div>
            </button>

            <button class="btnCart">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2H2.828L2.8 1.766C2.7427 1.27961 2.50892 0.831155 2.14299 0.505652C1.77706 0.180149 1.30442 0.000227862 0.814667 0L0 0V1.33333H0.814667C0.977956 1.33335 1.13556 1.3933 1.25758 1.50181C1.3796 1.61032 1.45756 1.75983 1.47667 1.922L2.53333 10.9007C2.59063 11.3871 2.82441 11.8355 3.19034 12.161C3.55627 12.4865 4.02891 12.6664 4.51867 12.6667H13.3333V11.3333H4.51867C4.35528 11.3333 4.19759 11.2733 4.07555 11.1646C3.95351 11.056 3.87562 10.9063 3.85667 10.744L3.76933 10H14.5573L16 2ZM13.4427 8.66667H3.61267L2.98533 3.33333H14.4047L13.4427 8.66667Z" fill="white"/>
                    <path d="M4.66659 16C5.40297 16 5.99992 15.4031 5.99992 14.6667C5.99992 13.9303 5.40297 13.3333 4.66659 13.3333C3.93021 13.3333 3.33325 13.9303 3.33325 14.6667C3.33325 15.4031 3.93021 16 4.66659 16Z" fill="white"/>
                    <path d="M11.3333 16C12.0697 16 12.6667 15.4031 12.6667 14.6667C12.6667 13.9303 12.0697 13.3333 11.3333 13.3333C10.597 13.3333 10 13.9303 10 14.6667C10 15.4031 10.597 16 11.3333 16Z" fill="white"/>
                </svg>
                <p>Add To Cart</p>
            </button>

            <button class="additional_btn">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 0C10.916 0.0116766 10.1817 0.221236 9.5379 0.607514C8.8941 0.993793 8.36363 1.54311 8.00005 2.2C7.63648 1.54311 7.10601 0.993793 6.46221 0.607514C5.81841 0.221236 5.08409 0.0116766 4.33339 0C3.13668 0.0519938 2.00919 0.575503 1.19724 1.45615C0.385293 2.33681 -0.0451135 3.50302 5.35741e-05 4.7C5.35741e-05 9.21667 7.30405 14.4333 7.61472 14.6547L8.00005 14.9273L8.38539 14.6547C8.69605 14.4347 16.0001 9.21667 16.0001 4.7C16.0452 3.50302 15.6148 2.33681 14.8029 1.45615C13.9909 0.575503 12.8634 0.0519938 11.6667 0ZM8.00005 13.286C5.83139 11.666 1.33339 7.686 1.33339 4.7C1.28781 3.85648 1.57763 3.02915 2.13963 2.39847C2.70163 1.76778 3.49021 1.3849 4.33339 1.33333C5.17656 1.3849 5.96515 1.76778 6.52714 2.39847C7.08914 3.02915 7.37896 3.85648 7.33339 4.7H8.66672C8.62115 3.85648 8.91096 3.02915 9.47296 2.39847C10.035 1.76778 10.8235 1.3849 11.6667 1.33333C12.5099 1.3849 13.2985 1.76778 13.8605 2.39847C14.4225 3.02915 14.7123 3.85648 14.6667 4.7C14.6667 7.68733 10.1687 11.666 8.00005 13.286Z" fill="#B6B6B6"/>
                </svg>
            </button>

            <button class="additional_btn">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4148 8L12.4722 8.94267L14.0002 10.4713H13.7455C11.4895 10.4713 10.0548 9.45 8.7815 8.13267L8.5815 8.36467C8.36283 8.618 8.1375 8.87867 7.90283 9.14067C8.62762 9.9799 9.52516 10.6527 10.534 11.1129C11.5429 11.5732 12.6393 11.81 13.7482 11.8073H14.0002L12.4715 13.336L13.4142 14.2787L15.6095 12.0833C15.8595 11.8333 15.9999 11.4942 15.9999 11.1407C15.9999 10.7871 15.8595 10.448 15.6095 10.198L13.4148 8Z" fill="#B6B6B6"/>
                    <path d="M13.7461 3.80467H14.0001L12.4721 5.33333L13.4147 6.276L15.6101 4.08067C15.86 3.83063 16.0004 3.49155 16.0004 3.138C16.0004 2.78445 15.86 2.44537 15.6101 2.19533L13.4147 0L12.4721 0.942667L14.0001 2.47133H13.7454C10.4407 2.47133 8.63405 4.25133 6.99472 6.12333C5.37539 4.29467 3.42872 2.47133 -0.0266113 2.47133V3.80467C2.94939 3.80467 4.55539 5.362 6.11272 7.138C4.55539 8.914 2.94939 10.4713 -0.0266113 10.4713V11.8047C3.84539 11.8047 5.82405 9.514 7.57339 7.494C9.20939 5.59667 10.7581 3.80467 13.7461 3.80467Z" fill="#B6B6B6"/>
                </svg>
            </button>
        </div>

        <div class="additional_detail">
            <p><span>Vendor:</span>NestMart</p>
            <p><span>SKU:</span>FWM15VKT</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Rating from '@/components/ProductRating.vue';
    export default {
        name: 'ProductDetail',
        props: {
            title: String,
            rating: Number,
            price: Number,
            promotionAsPercentage: Number
        },
        components: {
            Rating
        },

        computed: {
            discounted_price(): number {
                return Number((this.price - (this.price * (this.promotionAsPercentage / 100))).toFixed(2));
            }
        }
    }
</script>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
    }
    .isAvailable {
        width: 101px;
        height: 29px;
        border-radius: 4px;
        background-color: #DEF9EC;
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #3BB77E;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #title {
        font-family: 'Quicksand', sans-serif;
        font-size: 40px;
        font-weight: 700;
        color: #253D4E;
        min-width: 650px;
        margin-top: 23px;
        margin-bottom: 28px;
    }

    .price {
        display: flex;
        align-items: last baseline;
        gap: 60px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        margin-top: 20px;
    }

    .price > :nth-child(1) {
        font-size: 72px;
        color: #3BB77E;
        line-height: 72px;
    }

    .price > :nth-child(2) {
        font-size: 32px;
        color: #B6B6B6;
        text-decoration: line-through;
        line-height: 32px;
    }

    #detail {
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #7E7E7E;
        margin-top: 31px;
    }

    .options {
        margin-top: 70px;
        display: flex;
        gap: 10px;

    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-family: 'Quicksand', sans-serif;
        height: 50px;
    }

    .btnAdd {
        width: 117px;
        gap: 40px;
        padding-left: 20px;
        background: #ffffff;
        color: #3BB77E;
        border: 2px solid #3BB77E;
        border-radius: 7px;
        font-size: 20px;
    }

    .btnAdd div {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .btnCart {
        width: 175px;
        font-size: 18px;
        background-color: #3BB77E;
        border: none;
        border-radius: 4px;
        gap: 13px;
        color: white;
    }

    .additional_btn {
        width: 50px;
        height: 50px;
        border: 1.5px solid #F2F3F4;
        border-radius: 5px;
        background-color: white;
    }

    .additional_detail {
        margin-top: 105px;
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        font-weight: 400;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .additional_detail span {
        color: #253D4E;
    }

    .additional_detail p {
        display: flex;
        gap: 16px;
        color: #B6B6B6;
    }

</style>