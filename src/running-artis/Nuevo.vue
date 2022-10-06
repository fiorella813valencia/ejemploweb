<template>
  <div>
    <h1>NEW ARTISTS</h1>
    <div class="container">
      <pv-card style="width: 60vw; border-radius: 1rem; height: 80vh">
        <template #content>
          <h2>Name</h2>
          <div style="display: flex;margin-bottom:30px; justify-content:center">
            <pv-input-text id="name" style="width:500px" v-model="artist.name" />
          </div>
          <h2>Photo</h2>
          <div style="display: flex;margin-bottom:30px; justify-content:center">
            <pv-input-text id="name" style="width:500px" v-model="artist.photo" />
          </div>
          <h2>Favorite Sport</h2>
          <div style="display: flex;margin-bottom:30px; justify-content:center">
            <pv-input-text id="name" style="width:500px" v-model="artist.favsport" />
          </div>
          <h2>Points</h2>
          <div style="display: flex;margin-bottom:30px; justify-content:center">
            <pv-input-number id="name" style="width:500px" v-model="artist.points" :min="0" :max="40" />
          </div>

          <div class="buttons" >
            <router-link style="text-decoration:none" to="/business/challenges" class="rw" ><pv-button style="border-radius: 1rem;color: white;background-color: #D6A049;border-color: #D6A049" @click="addArtist">Save</pv-button ></router-link>
          </div>

        </template>

      </pv-card>
    </div>


  </div>
</template>

<script>

export default {
    name: "Nuevo",
    data(){
      return{
        artist:{
          id:0,
          name:null,
          photo:null,
          favsport:null,
          points:null,
        }
      }
    },
    methods:{
      addArtist(){
        console.log("nombre temporalmente guardado: ",this.artist.name)
        console.log("nombre temporalmente guardado: ",this.artist.photo)
        console.log("nombre temporalmente guardado: ",this.artist.favsport)
        console.log("nombre temporalmente guardado: ",this.artist.points)
        localStorage.setItem("artist",JSON.stringify(this.artist))
      }
    }
  }
</script>