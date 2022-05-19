function suma_vectores() {
  let numeros1: number[] = [1, 30, 30, 40, 50, 2, 12, 18];
  let numeros2: number[] = [1, 30, 30, 40, 50, 2, 12, 18];
  let suma: number[] = [];
  let i: number;

  for (i = 0; i <= numeros1.length; i++) {
    suma[i] = numeros1[i] + numeros2[i];
  }
  console.log(suma);
}

console.log(suma_vectores());
