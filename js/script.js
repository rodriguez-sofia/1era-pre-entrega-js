
//algoritmo con condicional

//let elegirCaffe = parseInt(prompt("elija que cafe quiere llevar: 1:cafe amargo $1000 opcion 2 : cafe latte  $1000 opcion 3: capuchino $1000"))
//let cantidadCaffe = parseInt(prompt("elija la cantidad que quiere llevar solo se puede hasta 4 unidades"))


//let precioCaffe = 1000
//function multiplicacion(cantidadCaffe, precioCaffe) {
//  let resultado = cantidadCaffe * precioCaffe;
// return resultado
//}

//if (elegirCaffe === 1) {
//   alert("elegiste el caffe amargo");
//   console.log(multiplicacion(cantidadCaffe, 1000))

//} else if (elegirCaffe === 2) {
//   alert("elegiste caffe late ")
// console.log(multiplicacion(cantidadCaffe, 2000))

//} else {
//  alert("elegiste el capucchino")
//console.log(multiplicacion(cantidadCaffe, 3000))
//}


// algoritmo con ciclo for


//alert("Usted va a ingresar la edad de cada uno de sus 5 amigos para ingresar al boliche")
//for (let i = 0; i < 5; i++) {
//   edad = parseInt(prompt("Ingrese edad de la persona " + (i + 1)))

//   if (edad >= 18 && edad <= 40) {
//       alert("podes pasar con 2 consumiciones gratis  ")
//  
//  }
//  else (edad > 40) {
//      alert("No podes pasar")
// }
//}



alert("elija en que banco quiere depositar su dinero 1 : banco rio   2 : banco provincia  3 :banco  frances ")
for (let i = 0; i < 3; i++) {
    let opcionBanco = parseInt(prompt(" 1 : banco rio  descuento de $5000 2 : banco provincia descuento de $4000 3 :banco ciudad frances descuento de $6000"))

    let cantidadDinero = parseInt(prompt("ingrese el monto que desea depositar"))
    if (cantidadDinero >= 1000 && cantidadDinero <= 5000) {
        alert("tu monto se ingreso con exito ")
    } else {
        alert("tu monto tiene un limite de capacidad para ingresar por dia ")
    }

    const returnDiscountString = (opcion) => {
        switch (opcion) {
            case 1:
                return 5000
            case 2:
                return 4000
            case 3:
                return 6000

            default:
                return 0
        }
    }

    function resta(banco, descuento) {
        return banco - descuento
    }


    const desc = returnDiscountString(opcionBanco)

    const total = resta(cantidadDinero, desc)

    alert("El total con el descuento es: " + total)

}




