<template>
    <div class="container">
        <app-new-quote @aquoteAdded="NewQuote"> </app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue' ;
    import NewQuote from './components/QuoteNew.vue'
    export default {
        data: function(){
            return{
                quote:[
                    'this is my quote test'
                ],
                maxQuotes:10
            }
        },
        methods:{
            NewQuote(quote){
                this.quotes.push(quote);
            }
        },
        components: {
            appQuoteGrid : QuoteGrid,
            appNewQuote : NewQuote
        }
    }
</script>

<style>
</style