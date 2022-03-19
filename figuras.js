console.group("Cuadrado")
/**
 * * Calculos del cuadrado
 */
/*
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")
*/

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm²")

console.groupEnd()


console.group("Triangulo")

/**
 * * Calculos del triangulo
 */

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm")

//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
} 
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
} 
//console.log("El área del cuadrado es: " + areaTriangulo + "cm²")

console.groupEnd()


console.group("Circulo")

/**
 * * Calculos del circulo
 */

// radio
//function radioCirculo() {
  //return 
//} = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

// diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// pi
const PI = Math.PI;

// circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
//console.log("El área del circulo es: " + areaCirculo + "cm");


console.groupEnd()

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}


