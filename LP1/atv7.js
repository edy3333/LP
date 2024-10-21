function contarVogais(string) {
    const vogaisMaiusculas = "AEIOU"; 
    const vogaisMinusculas = "aeiou";
    let contadorVogais = 0;
  for (let i = 0; i < string.length; i++) {
      const caractere = string[i]; 
      if (vogaisMaiusculas.includes(caractere)) {
        contadorVogais++;
      } else if (vogaisMinusculas.includes(caractere)) {
        contadorVogais++; 
      }
    }
   return contadorVogais; 
  }
  const stringComVogais = "Acabou Férias";
  const numeroVogais = contarVogais(stringComVogais);
  console.log(`A string "${stringComVogais}" contém ${numeroVogais} vogais.`);
  