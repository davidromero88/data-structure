---
title: Módulo 1 - Clase 1: Conceptos básicos de Algoritmos y Estructuras de Datos
date: 2025-11-12
status: to-review
tags: #bootcamp #data-structures #algorithms #bigO #complexity
---

# 🧠 Módulo 1 - Clase 1  
## Conceptos básicos de Algoritmos y Estructuras de Datos

> “La eficiencia de un programa depende tanto del algoritmo como de la estructura de datos elegida.”

---

## 📘 ¿Qué es una Estructura de Datos (Data Structure)?

Una **estructura de datos** es una forma organizada de **almacenar, gestionar y acceder a información** en memoria, optimizando el uso de recursos según el problema a resolver.

### 🎯 Objetivos principales:
- Representar datos de manera eficiente.  
- Facilitar operaciones rápidas (búsqueda, inserción, borrado, recorrido).  
- Reducir el consumo de tiempo, memoria o energía.

### 🔹 Ejemplos comunes:
| Tipo | Descripción breve | Ejemplo visual |
|------|-------------------|----------------|
| **Array (Arreglo)** | Colección de elementos contiguos en memoria. | `[10, 20, 30]` |
| **List (Lista)** | Colección ordenada, puede cambiar de tamaño. | `[A, B, C, D]` |
| **Linked List (Lista Enlazada)** | Cada elemento apunta al siguiente. | `A → B → C` |
| **Stack (Pila)** | LIFO (último en entrar, primero en salir). | push/pop |
| **Queue (Cola)** | FIFO (primero en entrar, primero en salir). | enqueue/dequeue |
| **Set (Conjunto)** | Elementos únicos, sin orden. | `{1, 2, 3}` |
| **Map / Dictionary** | Pares clave-valor. | `{ "nombre": "David" }` |
| **Tree / Graph** | Estructuras jerárquicas o de relaciones. | Árbol binario, Grafo dirigido |

---

## ⚙️ ¿Qué es un Algoritmo?

Un **algoritmo** es un conjunto finito y ordenado de pasos lógicos que permiten resolver un problema o realizar una tarea.

### Ejemplo básico: algoritmo para encontrar el número máximo en una lista

```python
def maximo(lista):
    max = lista[0]
    for num in lista:
        if num > max:
            max = num
    return max
```

---

⏱️ Complejidad de un Algoritmo
------------------------------

La **complejidad algorítmica** mide la **eficiencia** de un algoritmo en función de:

1.  **Tiempo** — cuánto tarda en ejecutarse.
2.  **Espacio** — cuánta memoria utiliza.
3.  **Energía** _(cada vez más considerada en sistemas embebidos y sostenibles)_.

---

### 🧮 Complejidad Temporal

Mide **cuántas operaciones** ejecuta el algoritmo según el tamaño de entrada `n`.

| Notación | Nombre | Descripción | Ejemplo |
|---|---|---|---|
| O(1) | Constante | Tiempo independiente del tamaño. | Acceder a un índice de un array. |
| O(log n) | Logarítmica | Crece lentamente. | Búsqueda binaria. |
| O(n) | Lineal | Crece proporcionalmente a la entrada. | Recorrer una lista. |
| O(n log n) | Lineal-logarítmica | Típico en algoritmos de ordenamiento eficientes. | Merge Sort, Quick Sort. |
| O(n²) | Cuadrática | Crece rápidamente. | Bubble Sort, comparaciones dobles. |
| O(2ⁿ) | Exponencial | Crecimiento explosivo. | Fuerza bruta en recursión. |
| O(n!) | Factorial | Muy costoso, poco práctico. | Permutaciones completas. |

---

### 💾 Complejidad Espacial

Evalúa la **cantidad de memoria** que un algoritmo necesita (variables, estructuras auxiliares, recursión, etc.).

Ejemplo:

- **O(1)** → sin estructuras adicionales (uso constante).
- **O(n)** → usa memoria proporcional al tamaño de la entrada.
- **O(n²)** → matriz o tabla de `n x n`.

---

### ⚡ Complejidad Energética (opcional, avanzada)

En hardware o sistemas embebidos se evalúa el **consumo energético** en función del número de operaciones y accesos a memoria.

Ejemplo de heurística:

- Procesamiento CPU → consumo proporcional a las operaciones aritméticas.
- Accesos a memoria o disco → más costosos energéticamente.
- Reducción de operaciones → menos consumo y calor.

---

📊 Ejemplo de análisis de complejidad
-------------------------------------

```js
// Suma todos los elementos de un array
function suma(arr) {
  let total = 0;       // O(1)
  for (let i = 0; i < arr.length; i++) { // O(n)
    total += arr[i];   // O(1)
  }
  return total;        // O(1)
}
```

**Análisis:**

- Tiempo total ≈ `O(n)`
- Espacio adicional ≈ `O(1)` (solo una variable `total`)
- Energía: proporcional al número de iteraciones `n`.

---

📚 Conceptos clave a recordar
-----------------------------

- **Trade-off** entre tiempo y espacio: a veces un algoritmo más rápido usa más memoria.
- **Big O** mide el peor caso; existen también **Ω (Omega)** y **Θ (Theta)**:
  - **O(f(n))** → límite superior (peor caso).
  - **Ω(f(n))** → límite inferior (mejor caso).
  - **Θ(f(n))** → caso promedio o acotado.
- El objetivo es siempre: **minimizar recursos y maximizar legibilidad y mantenimiento.**

---

