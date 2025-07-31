function calcularTotal() {
  const nombre = document.getElementById("nombre").value.trim();
  const cantidad = parseInt(document.getElementById("ce").value) || 0;
  const tipo = document.getElementById("tipo").value;
  const codigo = document.getElementById("codigo").value.trim().toUpperCase();
  const resultado = document.getElementById("resultado");

  if (nombre === "" || tipo === "" || cantidad <= 0) {
    resultado.textContent = `Por favor, comlete los campos`;
    resultado.style.color = "#ff0000ff";
    return;
  }

  let precioUnitario = 0;

  switch (tipo) {
    case "general":
      precioUnitario = 1000;
      break;
    case "vip":
      precioUnitario = 2000;
      break;
  }

  let total = precioUnitario * cantidad;

  if (codigo === "ROCK10") {
    total *= 0.9;
  }

  resultado.textContent = `Gracias por tu reserva ${nombre}. Total a pagar: $${total.toFixed(2)}`;
  resultado.style.color = "#00ff40ff";
}
