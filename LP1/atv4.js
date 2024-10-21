function quicksort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    return [...quicksort(left), pivot, ...quicksort(right)];
}
let numeros = [5, 3, 8, 1, 2, 7];
let ordenados = quicksort(numeros);
console.log(ordenados); 
