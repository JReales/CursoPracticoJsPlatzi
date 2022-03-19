function altura(a, b) {
  a = Number(a);
  b = Number(b);
  h = Math.sqrt((a * a) - (b * b) / 4);
  return h;
}

function calcularAltura() {
  const lado1 = document.getElementById("lado1");
  const valorLado1 = lado1.value;

  const lado2 = document.getElementById("lado2");
  const valorLado2 = lado2.value;

  const base = document.getElementById("base");
  const valorBase = base.value;
  
  if (valorLado1 == valorLado2) {
    const h = altura(valorLado1, valorBase);
    alert(h);
  } else {
    const mensaje = "Los lados no pertenecen a un triángulo isóceles.";
    alert(mensaje);
  }
}