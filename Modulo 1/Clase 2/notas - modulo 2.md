---
title: "Programación Dinámica: Top-Down y Bottom-Up"
date: "2025-11-12"
tags: ["algorithms", "dynamic-programming", "recursion", "optimization"]
status: "in-progress"
---

# 🧮 Programación Dinámica (Dynamic Programming)

## 💡 La idea central

**Problema:** Algunos algoritmos recursivos repiten los mismos cálculos miles de veces.

**Solución:** Guardar los resultados la primera vez que los calculamos y reutilizarlos.

**Resultado:** Pasar de algoritmos muy lentos (exponenciales) a rápidos (polinómicos).

---

## 📖 Definición formal

La **programación dinámica (DP)** es una técnica para **resolver problemas complejos dividiéndolos en subproblemas más pequeños** y **guardando sus resultados** para evitar recalcularlos.

### ¿Cuándo usar DP?

Necesitas **ambas condiciones:**

1️⃣ **Subproblemas superpuestos**
→ Los mismos subproblemas aparecen varias veces

2️⃣ **Subestructura óptima**
→ La solución óptima se construye con soluciones óptimas de subproblemas

---

## 🎓 Resumen para repaso rápido

| Concepto | Explicación |
|----------|-------------|
| **¿Qué es DP?** | Técnica para optimizar algoritmos recursivos guardando resultados |
| **¿Cuándo usarla?** | Cuando hay subproblemas repetidos + subestructura óptima |
| **Top-Down** | Recursión + caché (memoización) |
| **Bottom-Up** | Bucle + tabla (tabulación) |
| **Ganancia** | De O(2ⁿ) exponencial → O(n) o O(n²) polinomial |

---

## 🔁 ¿Cómo funciona?

La Programación Dinámica funciona en **cuatro pasos clave:**

### Paso 1: Identificar subproblemas
Dividir el problema principal en subproblemas más pequeños e independientes que se pueden resolver por separado.

### Paso 2: Resolver subproblemas
Resolver cada subproblema de manera recursiva (Top-Down) o iterativa (Bottom-Up).

### Paso 3: Almacenar soluciones
Guardar (memorizar) los resultados de cada subproblema en una estructura de datos (diccionario, tabla, array).

### Paso 4: Reutilizar resultados
Cuando un subproblema se vuelve a encontrar, usar el resultado almacenado en lugar de recalcularlo.

De este modo, **cada subproblema se resuelve una sola vez**, reduciendo la complejidad de exponencial a polinómica.

## 🎯 ¿Cómo reconocer un problema de DP?

Hacete estas preguntas:

### ❓ Pregunta 1: ¿Se repiten cálculos?
Si resolvés el problema recursivamente, ¿llamás varias veces a la misma función con los mismos parámetros?

**Ejemplo - Fibonacci:**
```
fib(5) llama a fib(4) y fib(3)
fib(4) llama a fib(3) y fib(2)
                ↑
            ¡fib(3) se calcula 2 veces!
```
✅ Hay subproblemas superpuestos

### ❓ Pregunta 2: ¿La solución óptima usa soluciones óptimas menores?
¿Podés construir la mejor solución global combinando las mejores soluciones parciales?

**Ejemplo - Camino más corto:**
- El camino más corto de A → C pasando por B
- Es: (camino más corto A → B) + (camino más corto B → C)

✅ Hay subestructura óptima

### 🎯 Si respondiste SÍ a ambas → Usá Programación Dinámica

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

## ✅ Dos formas de aplicar DP

### 🧠 Top-Down (Memoización)

**Idea:** "Empiezo del problema grande y voy bajando"

- Usás **recursión** como siempre
- Agregás un **caché** (diccionario/array) para guardar resultados
- Antes de calcular, verificás si ya está en el caché

**Ventaja:** Fácil de implementar si ya tenés la versión recursiva

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

**Complejidad:**
- Tiempo: **O(n)** - Cada valor se calcula solo una vez
- Espacio: **O(n)** - Caché + pila de recursión

---

### ⚙️ Bottom-Up (Tabulación)

**Idea:** "Empiezo de los casos más simples y voy subiendo"

- **NO usás recursión**, usás un bucle
- Llenás una **tabla (array)** con los resultados desde el principio
- Construís la solución paso a paso

**Ventaja:** Más eficiente, no hay riesgo de stack overflow

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

**Complejidad:**
- Tiempo: **O(n)** - Un bucle simple
- Espacio: **O(n)** - Solo el array (puede optimizarse a O(1) usando dos variables)

---

## 📊 ¿Cuál usar? Top-Down vs Bottom-Up

| Aspecto | Top-Down (Memoización) | Bottom-Up (Tabulación) |
|---------|------------------------|------------------------|
| **¿Cómo funciona?** | Recursión + caché | Bucle + tabla |
| **Dirección** | Del problema grande → casos base | De casos base → problema grande |
| **Facilidad** | ⭐⭐⭐ Más fácil de implementar | ⭐⭐ Requiere pensar el orden |
| **Eficiencia** | ⭐⭐ Overhead de recursión | ⭐⭐⭐ Más rápido |
| **Espacio** | O(n) + pila de llamadas | O(n) optimizable a O(1) |
| **Cuándo usar** | Cuando ya tenés la versión recursiva | Cuando querés máxima eficiencia |
| **Riesgo** | Stack overflow con n muy grande | Puede calcular subproblemas innecesarios |

### 🎯 Recomendación práctica:
1. **Empezá con Top-Down** → Es más fácil de pensar y escribir
2. **Si funciona bien** → Dejalo así
3. **Si necesitás más velocidad** → Convertilo a Bottom-Up

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
