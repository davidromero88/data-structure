fun fibonacci(n: Int): Int {
    // Casos base: F(0)=0, F(1)=1
    if (n <= 1) return n

    var a = 0 // F(0)
    var b = 1 // F(1)
    for (i in 2..n) {
        val next = a + b // F(i) = F(i-1) + F(i-2)
        a = b
        b = next
    }
    return b // F(n)
}

fun fibonacciRec(n: Int, memo: MutableMap<Int, Int> = mutableMapOf()): Int {
    if (n <= 1) return n // F(0)=0, F(1)=1
    memo[n]?.let { return it }
    val valN = fibonacciRec(n - 1, memo) + fibonacciRec(n - 2, memo)
    memo[n] = valN
    return valN
}

fun fibonacciRecSimple(n: Int): Int {
    if (n <= 1) return n
    return fibonacciRecSimple(n - 1) + fibonacciRecSimple(n - 2)
}

// llamadas
fun main() {
    for (i in 0 until 10) {
        println(fibonacci(i))
        println(fibonacciRec(i))
        println(fibonacciRecSimple(i))
    }
}
