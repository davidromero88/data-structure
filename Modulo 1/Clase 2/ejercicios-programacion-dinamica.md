# 🏋️ Ejercicios Prácticos - Módulo 2: Programación Dinámica

## Ejercicio 1: Subir escaleras (Dificultad: Fácil)
**Objetivo:** Introducción a DP con un problema simple

**Problema:** Tienes una escalera con `n` escalones. Puedes subir 1 o 2 escalones a la vez. ¿De cuántas formas diferentes puedes llegar a la cima?

**Ejemplo:**
- Entrada: `n = 3`
- Salida: `3` (formas: [1,1,1], [1,2], [2,1])

- Entrada: `n = 5`
- Salida: `8`

**Pista:** Muy similar a Fibonacci!

**Complejidad esperada:** O(n) tiempo, O(n) o O(1) espacio

**Solución con Bottom-Up:**
```python
def subir_escaleras(n):
    if n <= 2:
        return n

    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2

    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]
```

---

## Ejercicio 2: Casa robada (House Robber) (Dificultad: Media)
**Objetivo:** Practicar decisión óptima con restricciones

**Problema:** Eres un ladrón que planea robar casas en una calle. Cada casa tiene cierta cantidad de dinero. No puedes robar dos casas adyacentes (activarías la alarma). ¿Cuál es la máxima cantidad que puedes robar?

**Ejemplo:**
- Entrada: `casas = [2, 7, 9, 3, 1]`
- Salida: `12` (robas casa 0, casa 2 y casa 4: 2 + 9 + 1 = 12)

- Entrada: `casas = [1, 2, 3, 1]`
- Salida: `4` (robas casa 0 y casa 2: 1 + 3 = 4)

**Pista:** Para cada casa, decides si robarla o no.
- Si la robas, tomas su dinero + el máximo de las casas anteriores (excluyendo la adyacente)
- Si no la robas, tomas el máximo de la casa anterior

**Complejidad esperada:** O(n) tiempo, O(n) o O(1) espacio

---

## Ejercicio 3: Camino mínimo en triángulo (Dificultad: Media)
**Objetivo:** DP en 2D con múltiples caminos

**Problema:** Dado un triángulo de números, encuentra el camino desde la cima hasta la base con suma mínima. Solo puedes moverte a posiciones adyacentes en la fila siguiente.

**Ejemplo:**
```
   2
  3 4
 6 5 7
4 1 8 3
```
- Entrada: `[[2], [3,4], [6,5,7], [4,1,8,3]]`
- Salida: `11` (camino: 2 → 3 → 5 → 1)

**Pista:** Comienza desde el final y trabaja hacia arriba.

**Complejidad esperada:** O(n²) tiempo, O(n) espacio

---

## Ejercicio 4: Número de formas de hacer cambio (Dificultad: Media)
**Objetivo:** DP con múltiples opciones en cada paso

**Problema:** Dadas monedas de diferentes denominaciones y una cantidad total, ¿de cuántas formas puedes hacer el cambio?

**Ejemplo:**
- Entrada: `cantidad = 5`, `monedas = [1, 2, 5]`
- Salida: `4` (formas: [5], [2,2,1], [2,1,1,1], [1,1,1,1,1])

- Entrada: `cantidad = 3`, `monedas = [2]`
- Salida: `0` (no es posible)

**Pista:** `dp[i]` = número de formas de hacer cambio para la cantidad `i`

**Complejidad esperada:** O(n × m) tiempo, O(n) espacio
donde n = cantidad, m = número de monedas

---

## Ejercicio 5: Subsecuencia común más larga (LCS) - Versión simple (Dificultad: Media-Alta)
**Objetivo:** DP en 2D comparando dos secuencias

**Problema:** Dadas dos palabras, encuentra la longitud de su subsecuencia común más larga.

Una subsecuencia es una secuencia que puede derivarse de otra eliminando algunos (o ningún) elemento sin cambiar el orden de los restantes.

**Ejemplo:**
- Entrada: `palabra1 = "abcde"`, `palabra2 = "ace"`
- Salida: `3` (subsecuencia: "ace")

- Entrada: `palabra1 = "abc"`, `palabra2 = "abc"`
- Salida: `3` (toda la palabra)

- Entrada: `palabra1 = "abc"`, `palabra2 = "def"`
- Salida: `0` (no hay subsecuencia común)

**Pista:** Crea una tabla 2D donde `dp[i][j]` representa la LCS de los primeros `i` caracteres de palabra1 y los primeros `j` caracteres de palabra2.

**Complejidad esperada:** O(m × n) tiempo, O(m × n) espacio

---

## 💡 Plantillas de Solución

### Template Top-Down (Memoización):
```python
def problema_dp_topdown(n, memo=None):
    if memo is None:
        memo = {}

    # Caso base
    if n <= 0:
        return valor_base

    # Si ya lo calculamos, retornar
    if n in memo:
        return memo[n]

    # Calcular recursivamente
    resultado = funcion_recursiva(n-1, memo) # + otras llamadas

    # Guardar en memo
    memo[n] = resultado

    return resultado
```

### Template Bottom-Up (Tabulación):
```python
def problema_dp_bottomup(n):
    # Crear tabla DP
    dp = [0] * (n + 1)

    # Casos base
    dp[0] = valor_base_0
    dp[1] = valor_base_1

    # Llenar tabla iterativamente
    for i in range(2, n + 1):
        dp[i] = calcular_desde_anteriores(dp, i)

    return dp[n]
```

---

## 🎯 Cómo Abordar un Problema de DP

1. **Identificar si es DP:**
   - ¿Hay subproblemas superpuestos?
   - ¿Hay subestructura óptima?

2. **Definir el estado:**
   - ¿Qué representa `dp[i]`?
   - Ejemplo: "máxima ganancia usando los primeros i elementos"

3. **Encontrar la recurrencia:**
   - ¿Cómo se relaciona `dp[i]` con estados anteriores?
   - Ejemplo: `dp[i] = max(dp[i-1], arr[i] + dp[i-2])`

4. **Identificar casos base:**
   - ¿Cuáles son los valores iniciales?
   - Ejemplo: `dp[0] = 0`, `dp[1] = arr[0]`

5. **Decidir implementación:**
   - Top-Down si la recursión es natural
   - Bottom-Up si quieres mejor rendimiento

6. **Optimizar espacio:**
   - ¿Solo necesitas los últimos k estados?
   - Usa variables en vez de array completo

---

## 📊 Comparación de Enfoques

| Aspecto | Recursión Pura | Memoización | Tabulación |
|---------|----------------|-------------|------------|
| **Tiempo** | Exponencial | Polinomial | Polinomial |
| **Espacio** | Stack de recursión | Stack + Cache | Solo tabla |
| **Facilidad** | Muy fácil | Fácil | Media |
| **Eficiencia** | Muy baja | Alta | Muy alta |
| **Cuándo usar** | Problemas pequeños | Solución natural recursiva | Máximo rendimiento |

---

## 🚀 Desafío Extra

Intenta resolver cada ejercicio de **tres formas diferentes**:

1. **Recursión pura** (para entender el problema)
2. **Top-Down con memoización** (optimización natural)
3. **Bottom-Up con tabulación** (máxima eficiencia)

Compara el rendimiento y aprende cuándo usar cada enfoque.
