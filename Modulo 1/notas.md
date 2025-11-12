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
