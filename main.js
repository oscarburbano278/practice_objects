// constructor de objetos en este caso de Shoes

function Shoes (estilo, color, talla, existencia, nationality){
    this.estilo = estilo;
    this.color = color;
    this.talla = talla;
    this.existencia = existencia;
    this.nationality = nationality;
};

// construccion de objetos a partir de un constructor en este caso "Shoes" 

var shoes1 = new Shoes("casual", "cafe", 40, true, ["Colombia", "Mexico"]);
console.log(shoes1);
var shoes2 = new Shoes("escolar", "negro", 36, false);
console.log(shoes2);

// podemos llevar los objetos en un array nos muestra cuantos array hay 

var shoesStore = [shoes1, shoes2];
console.log(shoesStore);

// crear objetos dentro de un array

var users = [
    {
        nameClient: "Carlos",
        age: 30
    },

    {
        nameClient: "Andres",
        age: 25,
    }
]
console.log(users);

// formas de acceder a los atributos de los objetos con respecto a Shoes

console.log(shoes1.color);
//con corchetes
console.log(shoes1["color"]);
// cuando un atributo es un array
console.log(shoes1["nationality"][1]);
// sin corchetes
console.log(shoes1.nationality[0]);