function fibonacci(n) {
  // Casos base con convención F(0)=0, F(1)=1
  if (n <= 1) return n;

  let a = 0; // F(0)
  let b = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    const next = a + b; // F(i) = F(i-1) + F(i-2)
    a = b;
    b = next;
  }

  return b; // F(n)
}

function fibonacciRec(n, memo = {}) {
  if (n <= 1) return n; // F(0)=0, F(1)=1
  if (memo[n]) return memo[n];
  const val = fibonacciRec(n - 1, memo) + fibonacciRec(n - 2, memo);
  memo[n] = val;
  return val;
}

// Versión recursiva simple (sin memoización)
function fibonacciRecSimple(n) {
  if (n <= 1) return n;
  return fibonacciRecSimple(n - 1) + fibonacciRecSimple(n - 2);
}

// Programación dinámica (tabulación) con arreglo O(n) tiempo, O(n) espacio
function fibonacciDP(n) {
  if (n <= 1) return n;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// llamadas
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
  console.log(fibonacciRec(i));
  console.log(fibonacciRecSimple(i));
  console.log(fibonacciDP(i));
}
