<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address {{ email }} </p>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return{
        email:''
      }
    },
    created(){
      axios.get('https://axios-11287.firebaseio.com/user.json')
      .then(res => {
        const data = res.data;
        users = [];
        for(let key in data){
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log(users)
        this.email = users[0].email;
        
      })
      .catch(err => console.log(err))
    }
  }
</script>
<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>