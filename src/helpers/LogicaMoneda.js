export function formatearResultado(valor) {
  if (valor === null || valor === undefined || isNaN(valor)) {
    return "0";
  }

  if (typeof valor === 'string') {
    valor = parseFloat(valor);
  }

  if (isNaN(valor)) {
    return "0";
  }

  return formatearNumero(valor);
} 