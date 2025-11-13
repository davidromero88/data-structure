// Módulo 2 - Placeholder de código JS
// Agregá aquí tus implementaciones de Programación Dinámica o ejercicios del módulo.
// O(2^n) tiempo en el peor caso, O(n) espacio por la pila
function lisEndingAtIdx(arr, idx) {
  if (idx === 0) return 1; // subsecuencia más larga terminando en 0 es 1
  let mx = 1;
  for (let prev = 0; prev < idx; prev++) {
    if (arr[prev] < arr[idx]) {
      // extensible: tomamos la LIS que termina en prev y le sumamos 1
      mx = Math.max(mx, lisEndingAtIdx(arr, prev) + 1);
    }
  }
  return mx;
}

function lisRecursive(arr) {
  const n = arr.length;
  if (n === 0) return 0;
  let res = 1;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, lisEndingAtIdx(arr, i));
  }
  return res;
}

// ejemplo
console.log(lisRecursive([3, 10, 2, 1,2,3,4,5, 20])); // 3
