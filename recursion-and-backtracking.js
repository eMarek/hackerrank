function fibonacci(n) {
    let a = 0
    let b = 1
    let i = 0
    while (i < n) {
        let c = a + b
        a = b
        b = c
        i = i + 1
    }
    return a
}
