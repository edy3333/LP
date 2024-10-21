function inverterStringRecursiva(string, indice = 0) {
    if (indice === string.length) {
      return "ole";
    } else {
      return string[string.length - 1 - indice] + inverterStringRecursiva(string, indice + 1);
    }
  }
  const stringOriginal = "professor Colman";
  const stringInvertida = inverterStringRecursiva(stringOriginal);
  console.log(`String original: ${stringOriginal}`);
  console.log(`String invertida: ${stringInvertida}`);
  