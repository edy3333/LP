function calcularPotenciaRecursiva(base, expoente) {
    if (expoente === 0) {
      return 1; 
    } else if (expoente === 1) {
      return base; 
    } else if (expoente > 0) {
      return base * calcularPotenciaRecursiva(base, expoente - 1); 
    } else {
      return 1 / calcularPotenciaRecursiva(base, -expoente); 
    }
  }
  const base = 2;
  const expoente = 5;
  const potencia = calcularPotenciaRecursiva(base, expoente);
  console.log(`${base} elevado à potência ${expoente} é: ${potencia}`);
  