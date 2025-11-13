---
title: Módulo 1 - Clase 1: Conceptos básicos de Algoritmos y Estructuras de Datos
date: 2025-11-12
status: reviewed
tags: #bootcamp #data-structures #algorithms #bigO #complexity
---

# 🧠 Módulo 1 - Clase 1 
## Conceptos básicos de Algoritmos y Estructuras de Datos

> “La eficiencia de un programa depende tanto del algoritmo como de la estructura de datos elegida.”

---

## 📘 ¿Qué es una Estructura de Datos (Data Structure)?

Una **estructura de datos** es una forma organizada de **almacenar, gestionar y acceder a información** en memoria, optimizando el uso de recursos según el problema que se quiera resolver.

### 🎯 Objetivos principales:
- Representar los datos de manera eficiente.
- Facilitar operaciones rápidas (búsqueda, inserción, borrado, recorrido).
- Reducir el consumo de tiempo, memoria o energía.

### 🔹 Ejemplos comunes:
| Tipo | Descripción breve | Ejemplo visual |
|------|-------------------|----------------|
| **Array (Arreglo)** | Colección de elementos contiguos en memoria. | `[10, 20, 30]` |
| **List (Lista)** | Colección ordenada, puede cambiar de tamaño. | `[A, B, C, D]` |
| **Linked List (Lista Enlazada)** | Cada elemento apunta al siguiente. | `A → B → C` |
| **Stack (Pila)** | LIFO (último en entrar, primero en salir). | `push → [A, B] ← pop` |
| **Queue (Cola)** | FIFO (primero en entrar, primero en salir). | `enqueue → [A, B, C] → dequeue` |
| **Set (Conjunto)** | Elementos únicos, sin orden. | `{1, 2, 3}` |
| **Map / Dictionary** | Pares clave-valor. | `{ "nombre": "David" }` |
| **Tree / Graph** | Estructuras jerárquicas o de relaciones. | Árbol binario, grafo dirigido |

---

## ⚙️ ¿Qué es un Algoritmo?

Un **algoritmo** es una secuencia finita y ordenada de pasos que permiten resolver un problema o realizar una tarea. Lo importante no es solo que _funcione_, sino **qué tan eficiente** es cuando crece el tamaño del problema.

---

## ⏱️ Complejidad de un algoritmo

La **complejidad** mide cuánto “cuesta” ejecutar un algoritmo en función del tamaño del problema (por ejemplo, cuántas operaciones hace si hay `n` elementos).

Existen dos tipos principales:
- **Complejidad temporal:** cuánto tarda en ejecutarse (tiempo).
- **Complejidad espacial:** cuánta memoria usa.

Se expresa con la **notación Big O (O grande)**, que indica el crecimiento aproximado del costo cuando el problema crece.

---

### 📊 Ejemplos de órdenes de complejidad

| Notación | Nombre | Ejemplo intuitivo | Crecimiento |
|-----------|---------|-------------------|--------------|
| **O(1)** | Constante | Acceder a un elemento en un array. | Siempre tarda lo mismo. |
| **O(log n)** | Logarítmica | Búsqueda binaria. | Aumenta muy lento. |
| **O(n)** | Lineal | Recorrer una lista completa. | Duplica el tiempo si duplicás el tamaño. |
| **O(n log n)** | Cuasi lineal | Ordenamientos eficientes (merge sort). | Rápido incluso con muchos datos. |
| **O(n²)** | Cuadrática | Doble bucle anidado. | Se vuelve lento con muchos datos. |
| **O(2ⁿ)** | Exponencial | Algoritmo recursivo sin optimización (como Fibonacci). | Crece explosivamente. |

---

## 🌀 Ejemplo didáctico: Fibonacci recursivo

```js
function fibonacciRec(n) {
  if (n <= 1) return n; // Casos base
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}
```

### ¿Qué hace?

Calcula el número `n` de la secuencia de Fibonacci, donde:

    F(0) = 0, F(1) = 1, y F(n) = F(n-1) + F(n-2)

---

### 🔍 Paso a paso para `n = 4`

    f(4)
    ├─ f(3)
    │  ├─ f(2)
    │  │  ├─ f(1)
    │  │  └─ f(0)
    │  └─ f(1)
    └─ f(2)
       ├─ f(1)
       └─ f(0)

Cada llamada genera **dos nuevas llamadas**, salvo en los casos base.  
Esto hace que el número total de llamadas crezca **como una potencia** de 2.

📈 **Complejidad:**

- Tiempo: **O(2ⁿ)** (exponencial, muy lenta).
- Espacio: **O(n)** (por la profundidad de la recursión).

---

⚡ Mejora con memoización
------------------------

Si guardamos los resultados ya calculados, evitamos repetir trabajo:

```js
function fibMemo(n, cache = {}) {
  if (n <= 1) return n;
  if (cache[n]) return cache[n];
  cache[n] = fibMemo(n - 1, cache) + fibMemo(n - 2, cache);
  return cache[n];
}
```

🧩 Ahora cada valor de `fib(k)` se calcula **una sola vez**.

📊 **Complejidad con memoización:**

- Tiempo: **O(n)**
- Espacio: **O(n)**

👉 Este patrón (guardar resultados previos) se llama **Programación Dinámica (Top-Down)**.

---

💡 Cómo estimar la complejidad en recursión
-------------------------------------------

1.  Mirá cuántas llamadas nuevas hace la función.
    - 2 llamadas por paso → probablemente exponencial.
    - 1 llamada → probablemente lineal.
2.  Verificá si se repiten cálculos.
    - Si sí → se vuelve exponencial.
    - Si no (o usás memo) → se vuelve lineal.
3.  Contá el tamaño de la entrada (`n`) para estimar cómo crece el costo.

---

🧩 Resumen visual
-----------------

| Versión | Qué hace | Tiempo | Espacio | Observaciones |
|---|---|---|---|---|
| Recursiva simple | Calcula todo desde cero cada vez | O(2ⁿ) | O(n) | Repite los mismos cálculos. |
| Con memoización | Guarda resultados previos | O(n) | O(n) | Cada valor se calcula una vez. |
| Iterativa (bottom-up) | Usa bucle y variables | O(n) | O(1) | Más eficiente y sencilla. |

---

> 📘 En programación, **entender la complejidad** es tan importante como que el código funcione.  
> Te permite predecir el rendimiento, optimizar y elegir la mejor estructura de datos para cada problema.

---

## 📈 Big-O Complexity Chart

![Big-O Complexity Chart](../assets/big-o-complexity-chart.png)
