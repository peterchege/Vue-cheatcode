<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
        </div>
        <div class="panel-body">
            <div class="pull-left">
                <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        >
            </div>
                <div class="pull-right">
                    <button
                            class="btn btn-success"
                            >Buy Now</button>
                </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },        
    }
</script>