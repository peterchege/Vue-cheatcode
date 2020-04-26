<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import { mapGetter } from 'vue';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetter({
                stocks: 'stockPortfolio'
            })
        },
        components:{
            appStock: Stock
        }    
    }
</script>