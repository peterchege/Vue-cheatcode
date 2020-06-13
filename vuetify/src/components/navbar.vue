<template >
   <nav>
       <v-toolbar app>
           <v-toolbar-side-icon @click = "drawer = !drawer"></v-toolbar-side-icon>
           <v-toolbar-title class="text--uppercase grey--text">
                <span class="font-weight-light">Todo </span>
                <span > Ninja</span>                
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <v-btn depressed >
               <span>Sign Out</span>
           </v-btn>
       </v-toolbar>
       <v-navigation-drawer app v-model="drawer">
           <v-list>
               <v-list-tile>
                   <v-list-tile-action>
                       <v-icon>dashboard</v-icon>
                       <v-list-tile-content></v-list-tile-content>
                   </v-list-tile-action>
               </v-list-tile>

           </v-list>
       </v-navigation-drawer>

   </nav>
</template>



<script>
export default {
    data(){
        return{
            drawer : false,
        }
    }
}
</script>