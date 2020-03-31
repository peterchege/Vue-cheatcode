<template>
    <div class="container">
        <app-new-quote @aquoteAdded="NewQuote"> </app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deletedQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Click on the quote to delet it
                </div>
            </div>
        </div> 
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
            },
            deletedQuote(index){
                this.quotes.splice(index,1);
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