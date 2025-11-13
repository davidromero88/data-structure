# 🏋️ Ejercicios Prácticos - Módulo 1

## Ejercicio 1: Contar elementos pares (Dificultad: Fácil)
**Objetivo:** Practicar iteración básica y complejidad O(n)

**Problema:** Dado un array de números, cuenta cuántos son pares.

**Ejemplo:**
- Entrada: `[1, 2, 3, 4, 5, 6]`
- Salida: `3`

**Complejidad esperada:** O(n) tiempo, O(1) espacio

---

## Ejercicio 2: Encontrar el máximo (Dificultad: Fácil)
**Objetivo:** Practicar búsqueda lineal

**Problema:** Encuentra el número más grande en un array.

**Ejemplo:**
- Entrada: `[3, 7, 2, 9, 1]`
- Salida: `9`

**Complejidad esperada:** O(n) tiempo, O(1) espacio

---

## Ejercicio 3: Búsqueda binaria (Dificultad: Media)
**Objetivo:** Practicar complejidad O(log n)

**Problema:** Implementa búsqueda binaria en un array ordenado.

**Ejemplo:**
- Entrada: `arr = [1, 3, 5, 7, 9, 11]`, `target = 7`
- Salida: `3` (índice del elemento)

**Complejidad esperada:** O(log n) tiempo, O(1) espacio

---

## Ejercicio 4: Eliminar duplicados (Dificultad: Media)
**Objetivo:** Practicar uso de estructuras de datos (Set)

**Problema:** Dado un array, devuelve un array sin duplicados.

**Ejemplo:**
- Entrada: `[1, 2, 2, 3, 4, 4, 5]`
- Salida: `[1, 2, 3, 4, 5]`

**Complejidad esperada:** O(n) tiempo, O(n) espacio

---

## Ejercicio 5: Palíndromo (Dificultad: Fácil)
**Objetivo:** Practicar manipulación de strings

**Problema:** Verifica si una palabra es un palíndromo.

**Ejemplo:**
- Entrada: `"radar"`
- Salida: `true`

**Complejidad esperada:** O(n) tiempo, O(1) espacio

---

# 📝 Guía de Sintaxis: Python, Kotlin y JavaScript

## 🐍 Python

```python
# Variables y tipos de datos
numero = 42
texto = "Hola"
lista = [1, 2, 3, 4, 5]
diccionario = {"nombre": "Juan", "edad": 25}

# Condicionales
if numero > 0:
    print("Positivo")
elif numero < 0:
    print("Negativo")
else:
    print("Cero")

# Bucles
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

for elemento in lista:
    print(elemento)

while numero > 0:
    numero -= 1

# Funciones
def suma(a, b):
    return a + b

resultado = suma(3, 5)

# Listas (Arrays dinámicos)
lista.append(6)        # Agregar al final
lista.pop()            # Eliminar del final
lista.insert(0, 0)     # Insertar en posición
elemento = lista[0]    # Acceder por índice

# Diccionarios (Hash Maps)
diccionario["ciudad"] = "Madrid"  # Agregar/modificar
valor = diccionario.get("nombre", "default")  # Obtener con default
del diccionario["edad"]  # Eliminar

# Sets (Conjuntos)
conjunto = {1, 2, 3}
conjunto.add(4)
conjunto.remove(2)
existe = 3 in conjunto  # True

# Comprensión de listas
pares = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]
```

---

## 🟣 Kotlin

```kotlin
fun main() {
    // Variables y tipos de datos
    var numero = 42              // Variable mutable
    val texto = "Hola"          // Variable inmutable (recomendado)
    val lista = mutableListOf(1, 2, 3, 4, 5)
    val diccionario = mutableMapOf("nombre" to "Juan", "edad" to 25)

    // Condicionales
    if (numero > 0) {
        println("Positivo")
    } else if (numero < 0) {
        println("Negativo")
    } else {
        println("Cero")
    }

    // Expresión when (similar a switch)
    when {
        numero > 0 -> println("Positivo")
        numero < 0 -> println("Negativo")
        else -> println("Cero")
    }

    // Bucles
    for (i in 0 until 5) {      // 0, 1, 2, 3, 4
        println(i)
    }

    for (i in 0..4) {           // 0, 1, 2, 3, 4 (inclusivo)
        println(i)
    }

    for (elemento in lista) {
        println(elemento)
    }

    lista.forEach { elemento ->
        println(elemento)
    }

    while (numero > 0) {
        numero--
    }

    // Funciones
    fun suma(a: Int, b: Int): Int {
        return a + b
    }

    // Función de expresión
    fun sumaExpr(a: Int, b: Int) = a + b

    // Lambda
    val sumaLambda = { a: Int, b: Int -> a + b }

    val resultado = suma(3, 5)

    // Listas (Arrays dinámicos)
    lista.add(6)                 // Agregar al final
    lista.removeAt(lista.size - 1)  // Eliminar del final
    lista.add(0, 0)              // Insertar en posición
    val elemento = lista[0]      // Acceder por índice
    val primerElemento = lista.first()
    val ultimoElemento = lista.last()

    // Maps (Hash Maps)
    diccionario["ciudad"] = "Madrid"  // Agregar/modificar
    val edad = diccionario["edad"]    // Acceder (retorna Int?)
    val edadSegura = diccionario.getOrDefault("edad", 0)
    diccionario.remove("edad")        // Eliminar

    // Sets (Conjuntos)
    val conjunto = mutableSetOf(1, 2, 3)
    conjunto.add(4)
    conjunto.remove(2)
    val existe = conjunto.contains(3)  // true
    val existeAlternativo = 3 in conjunto  // true

    // Null safety (característica importante de Kotlin)
    var textoNulable: String? = null
    val longitud = textoNulable?.length ?: 0  // Elvis operator

    // Funciones de extensión útiles
    val pares = (0..9).filter { it % 2 == 0 }  // [0, 2, 4, 6, 8]
    val dobles = lista.map { it * 2 }
    val sumaTotal = lista.sum()
    val maximo = lista.maxOrNull()
}
```

---

## 🟨 JavaScript

```javascript
// Variables y tipos de datos
let numero = 42;
const texto = "Hola";
let lista = [1, 2, 3, 4, 5];
let diccionario = {nombre: "Juan", edad: 25};

// Condicionales
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Cero");
}

// Bucles
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let elemento of lista) {
    console.log(elemento);
}

lista.forEach(elemento => {
    console.log(elemento);
});

while (numero > 0) {
    numero--;
}

// Funciones
function suma(a, b) {
    return a + b;
}

// Arrow function
const sumaArrow = (a, b) => a + b;

let resultado = suma(3, 5);

// Arrays
lista.push(6);           // Agregar al final
lista.pop();             // Eliminar del final
lista.unshift(0);        // Agregar al inicio
let elemento = lista[0]; // Acceder por índice

// Objetos (Hash Maps)
diccionario.ciudad = "Madrid";  // Agregar/modificar
diccionario["pais"] = "España"; // Sintaxis alternativa
let edad = diccionario.edad;    // Acceder
delete diccionario.edad;        // Eliminar

// Sets (Conjuntos)
let conjunto = new Set([1, 2, 3]);
conjunto.add(4);
conjunto.delete(2);
let existe = conjunto.has(3);  // true

// Map (Hash Map)
let mapa = new Map();
mapa.set("nombre", "Juan");
mapa.set("edad", 25);
let valor = mapa.get("nombre");
mapa.delete("edad");

// Métodos útiles de arrays
let pares = lista.filter(x => x % 2 === 0);
let dobles = lista.map(x => x * 2);
let suma_total = lista.reduce((acc, x) => acc + x, 0);
```

---

## 🔄 Equivalencias entre lenguajes

| Operación | Python | Kotlin | JavaScript |
|-----------|--------|--------|------------|
| **Imprimir** | `print(x)` | `println(x)` | `console.log(x)` |
| **Array/Lista** | `[1, 2, 3]` | `listOf(1,2,3)` / `mutableListOf()` | `[1, 2, 3]` |
| **Agregar** | `lista.append(x)` | `lista.add(x)` | `lista.push(x)` |
| **Eliminar último** | `lista.pop()` | `lista.removeAt(lista.size-1)` | `lista.pop()` |
| **Tamaño** | `len(lista)` | `lista.size` | `lista.length` |
| **Hash Map** | `dict()` o `{}` | `mapOf()` / `mutableMapOf()` | `{}` o `new Map()` |
| **Set** | `set()` | `setOf()` / `mutableSetOf()` | `new Set()` |
| **For loop** | `for i in range(n)` | `for(i in 0 until n)` | `for(let i=0; i<n; i++)` |
| **For each** | `for x in lista` | `for(x in lista)` | `for(let x of lista)` |
| **Function** | `def func(x):` | `fun func(x: Type)` | `function func(x)` |
| **Lambda** | `lambda x: x*2` | `{ x -> x * 2 }` | `x => x * 2` |
| **Condicional** | `if-elif-else` | `if-else` / `when` | `if-else if-else` |
| **Null check** | `if x is None` | `if (x == null)` / `x?.method()` | `if (x === null)` / `x?.method` |

---

## 💡 Características Únicas de Cada Lenguaje

### 🐍 Python
- **Comprensión de listas:** `[x*2 for x in lista if x > 0]`
- **Unpacking:** `a, b = b, a` (swap sin variable temporal)
- **Multiple return:** `return x, y, z`
- **Indentación obligatoria** (no llaves)

### 🟣 Kotlin
- **Null Safety:** `String?` para valores que pueden ser null
- **Elvis operator:** `val len = str?.length ?: 0`
- **When expression:** Más poderoso que switch
- **Data classes:** `data class Person(val name: String, val age: Int)`
- **Extension functions:** Agregar métodos a clases existentes
- **Ranges:** `1..10`, `0 until 5`
- **Smart casts:** El compilador infiere tipos automáticamente

### 🟨 JavaScript
- **Destructuring:** `const [a, b] = [1, 2]`
- **Spread operator:** `[...array1, ...array2]`
- **Template literals:** `` `Hola ${nombre}` ``
- **Promises/async-await:** Para operaciones asíncronas
- **Optional chaining:** `obj?.prop?.method?.()`
- **Truthy/Falsy:** `if (valor)` evalúa varios tipos como false

---

## 🎯 Ejemplos de Programación Dinámica en los 3 Lenguajes

### Fibonacci - Python
```python
def fibonacci(n, memo={}):
    if n <= 1:
        return n
    if n in memo:
        return memo[n]
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]
```

### Fibonacci - Kotlin
```kotlin
fun fibonacci(n: Int, memo: MutableMap<Int, Int> = mutableMapOf()): Int {
    if (n <= 1) return n
    if (memo.containsKey(n)) return memo[n]!!
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]!!
}
```

### Fibonacci - JavaScript
```javascript
function fibonacci(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
```
