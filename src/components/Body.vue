<template>
    <div class="container pb-4">
          <div class="box bg-blanco rounded my-4">
        <div class="row">
            <div class="col-md-8">
                <div class="p-4">
                    <img class="img" src="https://imgs.xkcd.com/comics/complexion.png" alt="msg">
                  
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-end p-3">
                    <p class="color-gris">num</p>
                </div>
                <div class="text-start">
                     <h2 class="color-azul">Comic Name</h2>
                     <p class="color-azul-2">Year</p>
                      <div class="my-2">
                          <p class="color-gris py-2">What do tou think? Rate it!</p>
                        <vue-star-rate
                          :rateRange="3"
                          :maxIcon="5"
                          :iconHeight="40"
                          :iconWidth="40"
                          :hasCounter="true"
                          iconColor="#108fe3"
                          iconColorHover="#1029e3"
                          iconShape="star"
                        ></vue-star-rate>
                      </div>
                     
                </div>
            </div>
        </div>

        </div>
    </div>
</template>

<script>
import vueStarRate from "vue-js-star-rating";
import axios from 'axios';

export default {
  components: { vueStarRate },
  data(){
    return{
      comics:[]
    }
  },
  methods: {
    leerApi(){
      axios.get('https://xkcd.com/json.html')
      .then(response => {
        this.comics = response.data.data
        console.log(this.comics);
      }).catch( e => {
        console.log(e);
      })
    }
  },
  created(){
    this.leerApi()
  }

};
</script>