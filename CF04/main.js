new Vue({
    el: "#app",
    data:{
        numero: 0
    },
    methods:{
        sumarUno(){
            this.numero++
        },
        restarUno(){
            this.numero--
        }
    }
})