// Programacion para crear tareas

const app = new Vue({
    el: '#app',
    data: {
      titulo: 'Tareas del DIOS REY😎',
      tareas: [],
      nuevaTarea: ''
    },
    methods: {
        agregarTarea:function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado:false
            });
            this.nuevaTarea = "";
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea:function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea:function(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let dataDB = JSON.parse(localStorage.getItem('gym.vue'));
        if (dataDB === null) {
            this.tareas = [];
        } else {
            this.tareas = dataDB;
        }
    }
  })