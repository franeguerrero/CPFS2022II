Vue.component("app",{
    data:function() {
        return{
            personas:[
                {nombre: "Juan", edad: 25},
                {nombre: "Clara", edad: 23},
                {nombre: "Maria", edad: 32},
                {nombre: "Pepe", edad: 50},
                {nombre: "Ete Sech", edad: 27}
            ]
        }
    },
    template: `
        <ul>
            <li v-for="persona in personas">{{persona.nombre}} tiene {{persona.edad}} años</li>
        </ul>
    `
    
})
new Vue({el: "#app"})