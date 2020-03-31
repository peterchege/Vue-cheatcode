<template>
    <div class="container">
        <app-header :quoteCount="quote.lenght" :maxQuotes="maxQuotes"> </app-header>
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
    import NewQuote from './components/QuoteNew.vue';
    import Header from './components/Header.vue';
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
                if( this.quotes.lenght >= this.maxQuotes){
                    return alert('please Delete quote first')
                }
                this.quotes.push(quote);
            },
            deletedQuote(index){
                this.quotes.splice(index,1);
            }
        },
        components: {
            appQuoteGrid : QuoteGrid,
            appNewQuote : NewQuote,
            appHeader : Header
        }
    }
</script>

<style>
</style