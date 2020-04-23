<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter> </app-counter>
                <app-another-counter> </app-another-counter>
                <hr>
                <input type="text" :value="value" @input="updateValue">
                {{ value }}
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        computed: {
            value(){
                return this.$store.getters.value;
            }
        },
        methods: {
            updateValue(event){
                this.$store.dispatch('updateValue', event.target.value)
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherCounter: AnotherCounter,
            appAnotherResult: AnotherResult,
        }
    }
</script>

