new Vue({
    el: "#app",
    data: {
        mostrar: false
    },
    methods: {
        saludar(){
            this.mostrar = !this.mostrar
        }
    }
})