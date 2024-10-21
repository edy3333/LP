function recursiveFatorial(n){
    if (n == 0)
        return 1;
    else
        return n * recursiveFatorial(n-1);
    }
    
    
    console.log("Resultado da funcao recursiva Fatorial: ",recursiveFatorial(10));