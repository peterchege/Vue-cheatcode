<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>

                <div class="form-group">
                  <label for="">username</label>
                  <input type="text" name="" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                  <label for="">mail</label>
                  <input type="text" name="" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <br><hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                
                <ul class="list-group">
                    <br>
                    <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user:{
                    username: '',
                    email: ''
                },
                users:[]
            }
        },
        methods: {
            submit(){
                this.$http.post('', this.user)
                        .then(response=>{
                            console.log(response)
                        }, error=>{
                            console.log(error);
                        });
            },
            fetchData(){
                this.$http.get('')
                    .then(response =>{
                             return response.json();
                        })
                    .then(data=>{
                        const resultArray = [];
                        for(let key in data){
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;

                    });
                                                          
            }
        },
    }
</script>

<style>
</style>
