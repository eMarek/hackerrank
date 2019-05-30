function solution_Fibonacci(limit) {
  let a = 0
  let b = 1
  while (a <= limit) {
    // console.log(a)
    let c = a + b
    a = b
    b = c
  }
  return a
}
console.log(solution_Fibonacci(50))





function solution_BinaryGap(N) {
    const binary = (N >>> 0).toString(2)
    // console.log(binary)
    let maxGap = 0
    let tempGap = 0
    for (let i=0; i<binary.length; i++) {
        if (binary[i] === '0') {
            tempGap = tempGap + 1
        } else {
            if (tempGap > maxGap) {
                maxGap = tempGap
            }
            tempGap = 0
        }
    }
    return maxGap
}
console.log(solution_BinaryGap(50))





function solution_CyclicRotation(A, K) {
    if (A.length === 0) {
        return A
    }
    let myArray = A
    for (let i = 0; i<K; i++) {
        let lastItem = myArray.pop()
        myArray.unshift(lastItem)
    }
    return myArray
}
solution_CyclicRotation([12, 42, 66], 4)





function solution_OddOccurrencesInArray(A) {
    var counter = {}
    for (let i = 0; i<A.length; i++) {
        if (!counter[A[i]]) {
            counter[A[i]] = 1
        } else {
            counter[A[i]] = counter[A[i]] + 1
        }
    }
    for (let c in counter) {
        if (counter[c]%2 !== 0) {
            return parseInt(c)
        }
    }
}
solution_OddOccurrencesInArray([16,77,2,16,45,45,77])






