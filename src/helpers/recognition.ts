export function num2Letters(numero: number) {
  if (typeof numero === 'string') {
    numero = parseInt(numero, 10);
  }

  const unidades = [
    'cero',
    'uno',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'seis',
    'siete',
    'ocho',
    'nueve',
  ];
  const decenas = [
    'diez',
    'once',
    'doce',
    'trece',
    'catorce',
    'quince',
    'dieciséis',
    'diecisiete',
    'dieciocho',
    'diecinueve',
  ];
  const decenasAltas = [
    '',
    '',
    'veinti',
    'treinta',
    'cuarenta',
    'cincuenta',
    'sesenta',
    'setenta',
    'ochenta',
    'noventa',
  ];
  const centenas = [
    '',
    'ciento',
    'doscientos',
    'trescientos',
    'cuatrocientos',
    'quinientos',
    'seiscientos',
    'setecientos',
    'ochocientos',
    'novecientos',
  ];

  let resultado = '';

  if (numero < 10) {
    resultado = unidades[numero];
  } else if (numero < 20) {
    resultado = decenas[numero - 10];
  } else if (numero < 100) {
    resultado = decenasAltas[Math.floor(numero / 10)];
    if (numero % 10 !== 0) {
      if (numero > 30) {
        resultado += ' y ' + unidades[numero % 10];
      } else {
        resultado += unidades[numero % 10];
      }
    }
  } else if (numero < 1000) {
    resultado = centenas[Math.floor(numero / 100)];
    const resto = numero % 100;
    if (resto !== 0) {
      resultado += ' ' + num2Letters(resto);
    }
  }

  return resultado;
}
