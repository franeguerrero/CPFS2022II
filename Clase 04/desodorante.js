var Desodorante = /** @class */ (function () {
    function Desodorante(marca) {
        this.carga = 100;
        this.marca = marca;
    }
    Desodorante.prototype.usar = function (n) {
        if (n === void 0) { n = 5; }
        if (this.carga > 0) {
            this.carga -= n;
            console.log("A tu desodorante ".concat(this.marca, " le queda ").concat(this.carga, "%"));
        }
        else {
            this.estaLleno = false;
            console.log("Se te acab\u00F3 el ".concat(this.marca, ", rey."));
        }
    };
    return Desodorante;
}());
var dove = new Desodorante("Dove");
dove.usar();
dove.usar(90);
dove.usar();
dove.usar();
