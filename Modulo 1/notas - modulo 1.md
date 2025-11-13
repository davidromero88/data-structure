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

![Big-O Complexity Chart](./assets/big-o-complexity-chart.png)

---

## 🎯 Ejercicios Prácticos: Selección de Estructuras de Datos

### Ejercicio 1: Lista de años ordenados
**Problema:** Tenemos una lista de años: 2020, 2021, 2022
- **Requisito:** Siempre mostrar todos de menor a mayor
- **Estructura recomendada:** Array/Lista ordenada
- **Razón:** Los datos ya están ordenados y el acceso es O(1)

### Ejercicio 2: Jerarquía de ejecutivos
**Problema:** Lista de ejecutivos según rol y jerarquía
- **Requisito:** Acceder a responsable directo y subordinados dado un nombre
- **Estructura recomendada:** Árbol (Tree)
- **Razón:** Representa relaciones jerárquicas naturalmente, permite navegación padre-hijos

### Ejercicio 3: Fichas técnicas de drones
**Problema:** Cientos de drones con fichas técnicas
- **Requisito:** Dado el ID del dron, acceder a su ficha técnica
- **Estructura recomendada:** Hash Map / Dictionary
- **Razón:** Búsqueda O(1) por clave (ID del dron)

### Ejercicio 4: Playlist de música dinámica
**Problema:** Playlist con operaciones dinámicas durante reproducción
- **Requisitos:**
  - Agregar canciones al inicio o al final
  - Eliminar canción de cualquier posición
  - Insertar en posición específica
  - Iterar en orden
- **Estructura recomendada:** Lista Enlazada (Linked List) o Lista Doblemente Enlazada
- **Razón:** Inserción/eliminación eficiente O(1) en extremos, O(n) en posición específica

### Ejercicio 5: Sistema de geolocalización
**Problema:** Calcular ruta más corta dado origen y destino
- **Requisito:** Devolver la ruta más corta
- **Estructura recomendada:** Grafo con algoritmo de caminos mínimos (Dijkstra/A*)
- **Razón:** Representa conexiones entre ubicaciones, permite calcular rutas óptimas

### Ejercicio 6: Sistema de imágenes con prioridad
**Problema:** Recibir cientos de imágenes por segundo
- **Requisitos:**
  - Algunas imágenes tienen más prioridad
  - Consultar imágenes más importantes en un rango de tiempo
- **Estructura recomendada:** Priority Queue (Heap) + Índice temporal
- **Razón:** Heap mantiene prioridades O(log n), índice permite consultas por tiempo

### Ejercicio 7: Logs de invocaciones a LLM
**Problema:** Almacenar logs con entrada, salida y parámetros
- **Requisitos:**
  - Buscar por parámetros específicos
  - Buscar por fecha
  - Buscar por rango de tiempo
  - Buscar por longitud de prompts
- **Estructura recomendada:** Base de datos indexada o estructura multi-índice
- **Razón:** Múltiples criterios de búsqueda requieren índices compuestos

---

## 🧪 Ejercicios de Análisis de Complejidad

### Ejercicio 1
```python
def func1(n):
    return n + 1
```
**Complejidad:** O(1) - Operación constante

### Ejercicio 2
```python
def func2(n):
    count = 0
    while n > 1:
        n //= 2
        count += 1
    return count
```
**Complejidad:** O(log n) - División sucesiva por 2

### Ejercicio 3
```python
def func3(n):
    total = 0
    for i in range(n):
        total += i
    return total
```
**Complejidad:** O(n) - Un solo bucle

### Ejercicio 4
```python
def func4(n):
    total = 0
    for i in range(n):
        temp = n
        while temp > 1:
            temp //= 2
            total += 1
    return total
```
**Complejidad:** O(n log n) - Bucle O(n) con operación O(log n) interna

### Ejercicio 5
```python
def func5(n):
    total = 0
    for i in range(n):
        for j in range(n):
            total += i + j
    return total
```
**Complejidad:** O(n²) - Dos bucles anidados

### Ejercicio 6
```python
def func6(n):
    if n <= 1:
        return 1
    return func6(n - 1) + func6(n - 2)
```
**Complejidad:** O(2ⁿ) - Fibonacci recursivo sin memoización

### Ejercicio 7
```python
def func7(n):
    if n == 0:
        return 1
    return n * func7(n - 1)
```
**Complejidad:** O(n) - Factorial recursivo lineal

---

## ⚠️ Limitaciones de Big O

La notación Big O **no considera** factores que afectan el rendimiento en la práctica:

### 1. Acceso a memoria
- Tiempo de acceso a caché vs RAM vs disco
- Localidad de referencia
- Cache misses

### 2. Latencia del hardware
- Tiempo de procesamiento de instrucciones en CPU
- Diferencias entre arquitecturas

### 3. Costos ocultos del sistema
- Operaciones del sistema operativo
- Concurrencia y sincronización
- Garbage collection
- Manejo de memoria (malloc/free)

**Ejemplo:** Dos algoritmos con O(n) pueden tener rendimiento muy diferente dependiendo de:
- Constantes multiplicativas
- Patrones de acceso a memoria
- Overhead de operaciones individuales

---

## 🔬 Mini Proyecto: Small Language Models (SLMs)

### Objetivo
Evaluar y mejorar la fiabilidad de Small Language Models en la resolución de problemas algorítmicos.

### Problemas a evaluar:
1. **Ordenar lista de números** (menor a mayor o viceversa)
2. **Encontrar el número mayor** de una lista
3. **Calcular el promedio** de una lista

### Restricciones:
- Los números pueden ser enteros o decimales
- Puede haber números negativos y positivos
- Una lista puede contener números repetidos

### Consideraciones
- Evaluar la precisión del SLM en diferentes escenarios
- Identificar patrones de fallo
- Proponer mejoras mediante técnicas de prompting o fine-tuning

---

## 📈 Big-O Complexity Chart

![Big-O Complexity Chart](./assets/big-o-complexity-chart.png)
