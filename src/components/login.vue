<template>
    <div id="main-login">
        <div class="alert ligth-info alert-top">
            <h1 class="text-center"><i class="fa fa-odnoklassniki"></i> - Treino de Habilidades Sociais</h1>
        </div>
        <div class="container">
            <div class="justify-content-center align-items-center row">
                <div class="col-4">
                    <form class="form-login">
                        <div class="text-center mb-2">
                            <h2> <i class="fa fa-odnoklassniki"></i> - THS</h2>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Nome:"/>
                        </div>
                        <div class="form-group"> 
                            <input type="text" class="form-control" placeholder="Senha da sala:"/>
                        </div>
                        <button class="btn btn-info btn-block btn-lg">Entrar</button>
                    </form>
                </div>
            </div>
        </div>


        <div v-if="showModal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Modal de Comfirmação</h4>
                                    <button type="button" class="btn btn-danger" @click="showModal=false">
                                    <span aria-hidden="true">X</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Modal Apareceu!!!!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <div>
        <button id="show-modal" @click="showModal = true">Show Modal</button>
        </div>
    </div>


</template>


<script>
export default {
  name: 'login',
  props: {
    msg: String
    
  },
  data: () => {
      return{
      showModal: false,
  };
},
}
</script>

<style scoped>

 html{
    height: 100%;
}
.container{
    margin-top: 20%;
}

body{
    display: flex;
    align-items: center;
}


.form-login{
    background-color: cornflowerblue;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 10px 10px .6em darkgray;

}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.alert-top{
    background-color: cornflowerblue;
    border-radius: 0px;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}



</style>