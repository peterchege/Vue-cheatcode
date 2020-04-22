<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
         methods: {
             ...mapActions([
                 'increment',
                 'decrement'
             ])
        }
    }
</script>