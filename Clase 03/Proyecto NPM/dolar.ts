import axios from "axios";


axios({
    method:"GET",
    url:"https://api-dolar-argentina.herokuapp.com/api/all"
}).then(r => console.log(`Oficial compra: ${r.data.valores.Dolar.casa344.compra._text} \nOficial venta: ${r.data.valores.Dolar.casa344.venta._text}\nBlue compra: ${r.data.valores.Dolar.casa380.compra._text} \nBlue venta: ${r.data.valores.Dolar.casa380.venta._text}`))
