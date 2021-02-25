<template>
  <div id="slogan">
    <div class="text-center">
      <h1>THS</h1>
      <br/>
      <h4 class="text-seondary">
          Treino de Habilidades Sociais
      </h4>
    </div>
    <!-- <router-view></router-view> -->
    <div id="main">
      <div class="container">
          <div class="row">
            <div class="col-md">
              <h5>Prefixos: <span class="badge badge-info">{{prefixes.length}}</span></h5>
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item" v-for="prefix in prefixes" v-bind:key="prefix">
                      <div class="row">
                        <div class="col-md"> 
                        {{prefix}}
                        </div>
                        <div class="col-md text-right">
                          <button v-on:click="deletePrefix(prefix)" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <br/>
                    {{prefix}}
                  <div class="input-group">
                    <input class="form-control" type="text" v-on:keyup.enter="addPrefix(prefix)" v-model="prefix" placeholder="Digite o Prefixo"/>
                    <div class="input-group-append">
                      <button class="btn btn-info" v-on:click="addPrefix(prefix)"><span class="fa fa-plus"></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md">
              <h5>Sufixos: <span class="badge badge-info">{{sufixes.length}}</span></h5>
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item" v-for="sufix in sufixes" v-bind:key="sufix">
                     <div class="row">
                        <div class="col-md"> 
                        {{sufix}}
                        </div>
                        <div class="col-md text-right">
                          <button v-on:click="deleteSufix(sufix)" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <br/>
                  {{sufix}}
                  <div class="input-group">
                    <input class="form-control" type="text" v-on:keyup.enter="addSufix(sufix)" v-model="sufix" placeholder="Digite o Sufixo"/>
                    <div class="input-group-append">
                      <button class="btn btn-info" v-on:click="addSufix(sufix)"><span class="fa fa-plus"></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <h5>Domains: <span class="badge badge-info">{{domains.length}}</span></h5>
          <div class="card">
            <div class="card-body">
              <div class="list-group-item" v-for=" domain in domains" v-bind:key="domain">
                {{domain}}
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="text-center">
            <!-- <p id="res-dice">{{cube}}</p> -->
            <transition name="anime"><!-- Elemento(tag) de animação do Vue.js -->
              <img v-if="isLogoVisible" id="img-dice" src="./assets/dado-8-lados.png"/>
            </transition>
            </div>
            <br/>
            <div class="row">
                <button class="btn btn-info" v-on:click="rolarDado()">Rolar o dado</button>
              <div class="col-md-1"></div>
                <button class="btn btn-success" v-on:click="handleClick">Animação</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css"; 
// import hello-world from './components/HelloWorld.vue';

export default {
  // components: { hello-world },
  name: 'App',
  data: () => {
    return{
      prefix: '',
      sufix: '',
      cube: '0',
      prefixes:['Air','Jet','Flight'],
      sufixes:['Hub','Station','Mart'],
      domains:['AirHub','AirStation','AirMart','JetHub','JetStation','JetMart','FlightHub','FlightStation','FlightMart'],
      isLogoVisible: false,


    };
  },
  methods: {
    addPrefix(prefix){
      this.prefixes.push(prefix);
      this.prefix = '';
      this.generate();
    },
    addSufix(sufix){
      this.sufixes.push(sufix);
      this.sufix = '';
      this.generate();
    },
    handleClick(){
      this.isLogoVisible = !this.isLogoVisible;
    },
    generate(){
      this.domains = [];
      for(const prefix of this.prefixes){
        for(const sufix of this.sufixes){
          this.domains.push(prefix + sufix);
        }
      }
    },
    deletePrefix(prefix){
      this.prefixes.splice(this.prefixes.indexOf(prefix),1);
      this.generate();
    },
    deleteSufix(sufix){
      this.sufixes.splice(this.sufixes.indexOf(sufix),1);
      this.generate();
    },
    rolarDado(){
      // this.cube = setInterval(() => { Math.ceil(Math.random() * (7 - 0) + 0) }, 500);
        this.cube = Math.ceil(Math.random() * (7 - 0) + 0);
    },
  },
}
</script>

<style>
.anime-enter-active, 
.anime-leave-active{
  transition: transform 2.0s, opacity 1.0s;
}

.anime-leave-to,
.anime-enter{
  /* transform: translateX(200%); */
  transform: rotateZ(-360deg);
  /* transition: 2.0s; */
  opacity: 0;
}

.anime-leave,
.anime-enter-to{
  /* transform: translateX(0); */
  transform: rotateZ(360deg);
  /* transition: 2.0s; */
  opacity: 1; 
}

*, 
*::before, *::after{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* html{
  font-size: 62.5%;
} */

#slogan {
  margin-top:30px;
  margin-bottom: 30px;
}

#main {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f1f1f1;
}

#img-dice {
  size: 50%;
}

#res-dice {
  top: 15%;
  left: 40%;
  font-size: 70px;
  color: white;
  text-align:center;
  position: absolute;
}
</style>
