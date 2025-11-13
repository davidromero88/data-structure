from functools import cache
def fibonacci(n: int) -> int:
    # Casos base: F(0)=0, F(1)=1
    if n <= 1:
        return n

    a, b = 0, 1  # F(0), F(1)
    for _ in range(2, n + 1):
        a, b = b, a + b  # F(i) = F(i-1) + F(i-2)
    return b  # F(n)


def fibonacci_rec(n: int, memo: dict | None = None) -> int:
    if memo is None:
        memo = {}
    if n <= 1:
        return n  # F(0)=0, F(1)=1
    if n in memo:
        return memo[n]
    memo[n] = fibonacci_rec(n - 1, memo) + fibonacci_rec(n - 2, memo)
    return memo[n]


def fibonacci_rec_simple(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci_rec_simple(n - 1) + fibonacci_rec_simple(n - 2)

@cache
def fibonacci_rec_cached(n: int) -> int:
    if not isinstance(n, int) or n < 0:
        raise ValueError("n debe ser un entero >= 0")
    if n <= 1:
        return n
    return fibonacci_rec_cached(n - 1) + fibonacci_rec_cached(n - 2)

# llamadas
if __name__ == "__main__":
    for i in range(10):
        print(fibonacci(i))
        print(fibonacci_rec(i))
        print(fibonacci_rec_simple(i))
