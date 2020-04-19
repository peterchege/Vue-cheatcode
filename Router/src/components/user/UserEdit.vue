<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <button class="btn btn-primary"> confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some extra data</p>
    </div>
   
</template>