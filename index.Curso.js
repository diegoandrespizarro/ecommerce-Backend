
// const mostrarLista = (elementos) =>{
//     if (elementos.length == 0) {
//         return "lista vacia"
//     } else {
//         let newArr = elementos.filter((elem)=>{
//             return typeof elem == "string"
//         })
//         return newArr
//     }
// }
// console.log(mostrarLista([]))

// class ConexionABaseDatos {
//     constructor(){
//         this.name= "pepe"
//         this.type = "perro"
//        }
// }

// let valoresExponencial = [1,5,12,20,9];

// let valoresExponenciados = valoresExponencial.map((valor, indice)=> valor ** 2);

// console.log(valoresExponenciados);

// let listaSuper = ["fideos", "arroz", "leche", "pan", "coca-cola"];
// let valorABuscar = "fideos";
// if(listaSuper.includes(valorABuscar)){
//     console.log("encontre el valor a buscar")
// }else{
//     console.log("no se encontro")
// }

// let objet1 ={
//     propiedad1: "PropiedadObjeto1",
//     propiedad2: 2,
//     propiedad3: true,
// };

// let objet2 ={
//     propiedad1: "PropiedadObjeto2",
//     propiedad2: 4,
// };

// let {propiedad1, propiedad2} = objet1;
// console.log(propiedad1, propiedad2);


//spread operator

// let objeto3 = {...objet1, ...objet2};
// console.log(objeto3);

// let objeto4 = {
//     a:1,
//     b:2,
//     c:3,
// };

// let{a, ... pepe} = objeto4;
// console.log(pepe, objeto4);




// let listaVerduleria = ["manzana", "pera", "uva", "banana",];
// let Buscar = "uva";
// // if(listaVerduleria.includes(Buscar)){
// //     console.log("encontre la fruta")
// // }else{
// //     console.log("no hay fruta")
// // }


// let soloPropiedades = listaVerduleria.keys(listaVerduleria)
// console.log(soloPropiedades)






// let listaCompra1 = {
//     fideo: 300,
//     pepsi: 200,
//     arroz: 500,
//     servilleta: 1000,
//     carne: 600,
//   };
  
//   let listaCompra2 = {
//     choclo: 300,
//     arveja: 200,
//     papa: 500,
//     zanahoria: 1000,
//     perejil: 600,
//   };
  
//   let listaCompra3 = { ...listaCompra1, ...listaCompra2 };
  
//   let resultadoEntries = Object.entries(listaCompra1);
  
//   console.log(resultadoEntries);
  
//   let resultadoValues = Object.values(listaCompra1);
  
//   console.log(resultadoValues);
  
//   let resultadoKeys = Object.keys(listaCompra1);
  
//   let valorABuscar = 'PERFUME';
  
//   if (resultadoKeys.includes(valorABuscar.toLowerCase())) {
//     console.log('Compraste ' + valorABuscar);
//   } else {
//     console.log('Te olvidaste de comprar ' + valorABuscar);
//   }
  
//   console.log(listaCompra3);
  
//   let listaCompra3Entries = Object.entries(listaCompra3);
  
//   console.log(listaCompra3Entries);
  
//   let resultadoValues3 = Object.values(listaCompra3);
//   let valorGastadoABuscar = 1300;
  
//   if (resultadoValues3.includes(valorGastadoABuscar)) {
//     console.log('GASTASTE ' + valorGastadoABuscar);
//   } else {
//     console.log('NO GASTASTE ' + valorGastadoABuscar);
//   }




//   let mensajeChat = `    HOLAA COMO ESTASSS   `;

// console.log(mensajeChat.trim().length); //QUITA ESPACIOS AL INICIO Y FINAL

// console.log(mensajeChat.trimEnd().length); //QUITA ESPACIOS AL FINAL

// console.log(mensajeChat.trimStart().length); //QUITA ESPACIOS AL INICIO

// let mensajeVacio = `          `;

// console.log(mensajeVacio.trim().length); //NOS DEVUELVE 0 DEBIDO A QUE NO HAY LONGITUD



// let arrayFlatEjemplo = [10, 4, 5, 20, ['A', 400, 20, false  ], 0, [100, 2000, 5]];

// console.log(arrayFlatEjemplo.flat()); //NOS DEVUELVE UN NUEVO ARRAY CON LOS VALORES



// let variablePrueba = 0;

// // let variableAsignable = variablePrueba || 'Sin Asignar';

// // console.log(variableAsignable);

// let variableNullish = variablePrueba ?? 'Sin Asignar';

// console.log(variableNullish);






// class Persona {
//     #fullName;
//     constructor(nombre, apellido) {
//       this.nombre = nombre;
//       this.apellido = apellido;
//       this.#fullName = `${this.nombre}  ${this.apellido}`;
//     }
  
//     getFullName = () => {
//       return this.#fullName;
//     };
//   }
  
//   let instaciaPersona = new Persona('raul', 'Ahumada');
  
//   console.log(instaciaPersona.getFullName());





// class Persona {
//     #fullName;
//     constructor(nombre, apellido, edad) {
//       this.nombre = nombre;
//       this.apellido = apellido;
//       this.edad = edad;
//       this.#fullName = `${this.nombre}  ${this.apellido}`;
//     }
  
//     #getFullName = () => {
//       return this.#fullName;
//     };
  
//     getNombreCompletoYEdad = () => {
//       return `${this.#fullName}  ${this.edad}`;
//     };
//   }
  
//   let instaciaPersona = new Persona('raul', 'Ahumada', 23);
  
//   console.log(instaciaPersona.getNombreCompletoYEdad());
