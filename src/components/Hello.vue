<template>
<v-container>
    <v-layout row wrap class="mb-2">
    <v-flex xs12 sm6 class="text-sm-right text-xs-center">
    <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
    </v-flex> 
    <v-flex xs12 sm6 class="text-sm-left text-xs-center">
    <v-btn large router to="/createmeetup" class="info">Organize Meetup</v-btn> 
    </v-flex>
    </v-layout>    
    <v-layout row wrap class="mt-2">
    <v-flex xs12>
     <v-carousel>
     <v-carousel-item 
        v-for="meetup in meetups" 
        v-bind:src="meetup.imageURL" 
        :key="meetup.id">
        <div class="title">
            {{meetup.title}}
        </div>
     </v-carousel-item>
     </v-carousel>  
    </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-4">
    <v-flex xs12 class="text-xs-center">
        <p style="font-size: 26px">Join our awesome meetups!</p>
    </v-flex>
    </v-layout>    
</v-container>
</template>

<script>
export default {
  data () {
    return {
        meetups: [
            {imageURL: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg', id: '1', title: 'Meetup in New York'},
            {imageURL: 'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-attractions-xlarge.jpg', id: '2', title: 'Meetup in Paris'}
        ]
    }
  }
}
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0,0,0,0.5);
        color: white;
        font-size: 2em;
        padding: 15px;
    }    
</style>
