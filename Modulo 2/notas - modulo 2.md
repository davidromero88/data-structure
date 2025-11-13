---
title: "Programación Dinámica: Top-Down y Bottom-Up"
date: "2025-11-12"
tags: ["algorithms", "dynamic-programming", "recursion", "optimization"]
status: "in-progress"
---

# 🧮 Programación Dinámica (Dynamic Programming)

La **programación dinámica (DP)** es una técnica de diseño de algoritmos usada para **resolver problemas complejos dividiéndolos en subproblemas más pequeños**, **guardando los resultados** de estos subproblemas para **evitar cálculos repetidos**.

Se aplica principalmente cuando:
- El problema tiene **subproblemas superpuestos**.  
- Tiene una **estructura óptima**: la solución global se construye a partir de soluciones óptimas parciales.

---

## 🔁 ¿Cómo funciona?

1. **Dividir** el problema en subproblemas más pequeños.  
2. **Resolver** cada subproblema (recursiva o iterativamente).  
3. **Guardar (memorizar)** los resultados intermedios.  
4. **Reutilizar** esos resultados cuando vuelvan a ser necesarios.

De este modo, **cada subproblema se resuelve una sola vez**, reduciendo la complejidad de exponencial a polinómica.

---

## 🧩 Ejemplo intuitivo — Fibonacci

El número Fibonacci `n` se define como:

F(n) = F(n-1) + F(n-2)  
F(0) = 0  
F(1) = 1

### 🚫 Recursión simple (sin DP)
```python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
```

- Recalcula muchas veces los mismos valores (por ejemplo `fib(3)` aparece en varios caminos).
- Complejidad: **O(2ⁿ)**.

---

✅ Programación Dinámica
-----------------------

### 🧠 Top-Down (Memoization)

El enfoque **Top-Down** parte del problema general y **va descomponiéndolo recursivamente**, guardando los resultados (memorizando) para no repetirlos.

```python
# Top-Down con memoization
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]
```

- Se **usa recursión**.
- Se **almacenan resultados** en una estructura (como un diccionario).
- Complejidad temporal: **O(n)**.
- Complejidad espacial: **O(n)** (por la pila de recursión y el almacenamiento).

---

### ⚙️ Bottom-Up (Tabulation)

El enfoque **Bottom-Up** parte de los **casos base** y **construye la solución iterativamente** hacia arriba.

```python
# Bottom-Up con tabulación
def fib_bottom_up(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[0], dp[1] = 0, 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]
```

- **No usa recursión**.
- Se **rellena una tabla (array)** con resultados intermedios.
- Complejidad temporal: **O(n)**.
- Complejidad espacial: **O(n)** (puede optimizarse a O(1) usando dos variables).

---

📉 Comparación: Top-Down vs Bottom-Up
-------------------------------------

| Característica | Top-Down (Memoization) | Bottom-Up (Tabulation) |
|---|---|---|
| Estrategia | Divide recursivamente desde el problema grande. | Construye iterativamente desde casos base. |
| Implementación | Recursiva + caché (diccionario o array). | Iterativa + tabla (array). |
| Complejidad temporal | O(n) | O(n) |
| Complejidad espacial | O(n) (por recursión) | O(n) (puede optimizarse a O(1)) |
| Ventaja | Más intuitiva si ya hay una versión recursiva. | Más eficiente en memoria y ejecución. |
| Desventaja | Riesgo de stack overflow en recursión profunda. | Menos intuitiva en problemas naturalmente recursivos. |

---

🎯 Cuándo usar Programación Dinámica
------------------------------------

Usá DP cuando el problema cumple **ambas condiciones:**

1. **Subproblemas superpuestos**
   - El problema se puede dividir en subproblemas que **se repiten**.
   - Ejemplo: Fibonacci, Caminos mínimos, Subconjuntos de suma específica.

2. **Estructura óptima**
   - La solución óptima global **depende de soluciones óptimas parciales**.
   - Ejemplo: Mochila (Knapsack), Caminos más cortos (Dijkstra/Bellman-Ford), Longest Common Subsequence (LCS).

---

⚡ Ejemplos clásicos de problemas con DP
---------------------------------------

| Problema | Descripción | Tipo |
|---|---|---|
| Fibonacci | Serie numérica con subproblemas repetidos. | Top-Down / Bottom-Up |
| Knapsack 0/1 | Seleccionar ítems maximizando valor sin exceder peso. | Bottom-Up |
| Longest Common Subsequence (LCS) | Subcadena más larga común entre dos strings. | 2D DP |
| Coin Change | Mínimo número de monedas para un monto dado. | Bottom-Up |
| Matrix Chain Multiplication | Orden óptimo de multiplicación de matrices. | Top-Down |
| Edit Distance | Mínimas operaciones para convertir un string en otro. | 2D DP |

---

🧩 Visualización conceptual
---------------------------

Top-Down (Memoization):

```
      f(5)
     /    \
  f(4)   f(3)
  / \     / \
f(3)f(2) f(2)f(1)
    ↓
Cache guarda resultados intermedios
```

Bottom-Up (Tabulation):

```
dp[0]=0, dp[1]=1
dp[2]=1, dp[3]=2, dp[4]=3, dp[5]=5 ...
Construcción secuencial
```

---

🧠 Resumen rápido
-----------------

| Concepto | Descripción |
|---|---|
| **Programación Dinámica** | Técnica para evitar recomputar subproblemas. |
| **Top-Down** | Usa recursión y memoización. |
| **Bottom-Up** | Usa iteración y tabulación. |
| **Condiciones** | Subproblemas superpuestos + estructura óptima. |
| **Ventaja clave** | Reduce la complejidad de O(2ⁿ) → O(n) o O(n²). |

---

## 🔍 Cuándo usar Programación Dinámica

DP se aplica cuando el problema cumple **dos condiciones clave:**

### 1️⃣ Subestructura Óptima
La solución óptima del problema puede construirse a partir de soluciones óptimas de sus subproblemas.

**Ejemplo:** Camino mínimo en un grafo
- Divide el problema en caminos del origen a nodos intermedios
- Y de estos nodos al destino
- La combinación óptima de sub-caminos da el camino óptimo total

### 2️⃣ Subproblemas Superpuestos
Los mismos subproblemas se resuelven múltiples veces durante la recursión.

**Ejemplo:** Fibonacci
- `Fib(n)` requiere `Fib(n-1)` y `Fib(n-2)`
- `Fib(n-2)` se calcula múltiples veces
- Sin DP: crecimiento exponencial O(2ⁿ)
- Con DP: crecimiento lineal O(n)

---

## 🎯 Cómo Funciona la Programación Dinámica

### Paso 1: Identificar subproblemas
Dividir el problema principal en subproblemas más pequeños e independientes.

### Paso 2: Almacenar soluciones
Resolver cada subproblema y guardar su solución en una tabla o arreglo.

### Paso 3: Construir la solución
Utilizar las soluciones almacenadas para construir la solución del problema principal.

### Paso 4: Evitar recalculaciones
Al guardar las soluciones, DP asegura que cada subproblema se resuelva solo una vez, reduciendo el tiempo de cálculo.

---

## 🆚 Comparativa Detallada: Memoización vs Tabulación

| Característica | Top-Down (Memoización) | Bottom-Up (Tabulación) |
|----------------|------------------------|------------------------|
| **Enfoque** | Recursivo desde el problema grande | Iterativo desde casos base |
| **Almacenamiento** | Cache/diccionario para resultados | Tabla (array) con todos los subproblemas |
| **Implementación** | Más intuitiva si ya existe versión recursiva | Requiere pensar el orden de llenado |
| **Complejidad temporal** | O(n) típicamente | O(n) típicamente |
| **Complejidad espacial** | O(n) por recursión + cache | O(n) optimizable a O(1) |
| **Stack overflow** | Riesgo en recursiones profundas | No usa pila de recursión |
| **Subproblemas calculados** | Solo los necesarios | Todos los subproblemas |
| **Casos de uso** | Problemas con overlapping natural | Entradas grandes, sin limitación de stack |
| **Ventaja** | Calcula solo lo necesario | Más eficiente, sin overhead de recursión |
| **Desventaja** | Overhead de llamadas recursivas | Puede calcular subproblemas innecesarios |

---

## 📚 Problemas Clásicos de Programación Dinámica

### 1. 🔢 Fibonacci
**Descripción:** Calcular el n-ésimo número de la secuencia de Fibonacci

```python
# Recursión simple - O(2ⁿ)
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n-1) + fib_recursive(n-2)

# Top-Down con memoización - O(n)
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# Bottom-Up con tabulación - O(n)
def fib_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[0], dp[1] = 0, 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Bottom-Up optimizado - O(n) tiempo, O(1) espacio
def fib_optimized(n):
    if n <= 1:
        return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr
```

**Complejidades:**
- Recursión simple: Tiempo O(2ⁿ), Espacio O(n)
- Memoización: Tiempo O(n), Espacio O(n)
- Tabulación: Tiempo O(n), Espacio O(n)
- Optimizada: Tiempo O(n), Espacio O(1)

---

### 2. 📈 Longest Increasing Subsequence (LIS)

**Descripción:** Encontrar la longitud de la subsecuencia más larga en orden estrictamente creciente.

**Ejemplo:**
- Entrada: `[3, 10, 2, 1, 20]`
- Salida: `3` (subsecuencias: `[3, 10, 20]`)

**Ejemplo 2:**
- Entrada: `[10, 22, 9, 33, 21, 50, 41, 60]`
- Salida: `5` (subsecuencia: `[10, 22, 33, 50, 60]`)

```cpp
// Recursión - O(2ⁿ)
int lisEndingAtIdx(vector<int>& arr, int idx) {
    if (idx == 0)
        return 1;

    int mx = 1;
    for (int prev = 0; prev < idx; prev++)
        if (arr[prev] < arr[idx])
            mx = max(mx, lisEndingAtIdx(arr, prev) + 1);

    return mx;
}

// Top-Down con memoización - O(n²)
int lisEndingAtIdx(vector<int>& arr, int idx, vector<int>& memo) {
    if (idx == 0)
        return 1;

    if (memo[idx] != -1)
        return memo[idx];

    int mx = 1;
    for (int prev = 0; prev < idx; prev++)
        if (arr[prev] < arr[idx])
            mx = max(mx, lisEndingAtIdx(arr, prev, memo) + 1);

    memo[idx] = mx;
    return memo[idx];
}

// Bottom-Up - O(n²)
int lis(vector<int>& arr) {
    int n = arr.size();
    vector<int> dp(n, 1);

    for (int i = 1; i < n; i++) {
        for (int prev = 0; prev < i; prev++) {
            if (arr[i] > arr[prev] && dp[i] < dp[prev] + 1) {
                dp[i] = dp[prev] + 1;
            }
        }
    }

    return *max_element(dp.begin(), dp.end());
}
```

**Complejidades:**
- Recursión: Tiempo O(2ⁿ), Espacio O(n)
- Memoización: Tiempo O(n²), Espacio O(n)
- Tabulación: Tiempo O(n²), Espacio O(n)
- Optimizada (Binary Search): Tiempo O(n log n), Espacio O(n)

---

### 3. 🎒 0/1 Knapsack (Mochila 0/1)

**Descripción:** Dados N objetos con peso y ganancia, y una mochila de capacidad W, seleccionar objetos para maximizar la ganancia sin exceder la capacidad.

**Restricción:** Cada objeto debe incluirse completo o no incluirse (no se puede dividir).

**Ejemplo:**
- N = 3, W = 4
- profit[] = {1, 2, 3}
- weight[] = {4, 5, 1}
- Salida: 3 (elegir el objeto con peso 1 y ganancia 3)

```cpp
// Recursión - O(2ⁿ)
int knapSack(int W, vector<int>& wt, vector<int>& val, int n) {
    if (n == 0 || W == 0)
        return 0;

    // Si el peso del n-ésimo ítem es mayor que W,
    // no puede ser incluido
    if (wt[n - 1] > W)
        return knapSack(W, wt, val, n - 1);

    // Retorna el máximo de dos casos:
    // (1) n-ésimo ítem incluido
    // (2) no incluido
    return max(val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1),
               knapSack(W, wt, val, n - 1));
}

// Top-Down con memoización - O(n*W)
int knapSackUtil(int W, vector<int>& wt, vector<int>& val,
                 int n, vector<vector<int>>& memo) {
    if (n == 0 || W == 0)
        return 0;

    if (memo[n][W] != -1)
        return memo[n][W];

    if (wt[n - 1] > W)
        return memo[n][W] = knapSackUtil(W, wt, val, n - 1, memo);

    return memo[n][W] = max(
        val[n - 1] + knapSackUtil(W - wt[n - 1], wt, val, n - 1, memo),
        knapSackUtil(W, wt, val, n - 1, memo)
    );
}

// Bottom-Up - O(n*W)
int knapSack(int W, vector<int>& wt, vector<int>& val, int n) {
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (wt[i - 1] <= w) {
                dp[i][w] = max(
                    val[i - 1] + dp[i - 1][w - wt[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][W];
}

// Optimizado en espacio - O(n*W) tiempo, O(W) espacio
int knapSackOptimized(int W, vector<int>& wt, vector<int>& val, int n) {
    vector<int> dp(W + 1, 0);

    for (int i = 0; i < n; i++) {
        for (int w = W; w >= wt[i]; w--) {
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]]);
        }
    }

    return dp[W];
}
```

**Complejidades:**
- Recursión: Tiempo O(2ⁿ), Espacio O(n)
- Memoización: Tiempo O(n×W), Espacio O(n×W)
- Tabulación: Tiempo O(n×W), Espacio O(n×W)
- Optimizada: Tiempo O(n×W), Espacio O(W)

---

## 💡 Otros Problemas Clásicos

| Problema | Descripción | Complejidad DP |
|----------|-------------|----------------|
| **Coin Change** | Mínimo número de monedas para un monto | O(n×amount) |
| **Edit Distance** | Mínimas operaciones para convertir string A en B | O(m×n) |
| **Longest Common Subsequence (LCS)** | Subsecuencia más larga común entre dos strings | O(m×n) |
| **Matrix Chain Multiplication** | Orden óptimo de multiplicación de matrices | O(n³) |
| **Subset Sum** | ¿Existe un subconjunto con suma específica? | O(n×sum) |
| **Rod Cutting** | Maximizar ganancia al cortar una varilla | O(n²) |
| **Partition Problem** | Dividir array en dos subconjuntos de suma igual | O(n×sum) |

---

## 🎓 Estrategias para Resolver Problemas de DP

### 1. Identificar el problema como DP
- ¿Hay subproblemas superpuestos?
- ¿Hay subestructura óptima?

### 2. Definir el estado
- ¿Qué parámetros cambian en cada subproblema?
- Ejemplo: `dp[i]` = solución para los primeros i elementos

### 3. Escribir la recurrencia
- ¿Cómo se relaciona `dp[i]` con estados anteriores?
- Ejemplo: `dp[i] = max(dp[i-1], arr[i] + dp[i-2])`

### 4. Identificar casos base
- ¿Cuáles son los valores iniciales conocidos?
- Ejemplo: `dp[0] = 0`, `dp[1] = arr[0]`

### 5. Decidir el enfoque
- **Top-Down:** Si la recursión es natural
- **Bottom-Up:** Si quieres evitar recursión y optimizar espacio

### 6. Optimizar espacio si es posible
- ¿Solo necesitas los últimos k estados?
- Ejemplo: Fibonacci solo necesita los últimos 2 valores

---
