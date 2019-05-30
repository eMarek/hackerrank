function hourglassSum(arr) {
    let maxSum = null
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            let firstLine = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
            let secondLine = arr[i + 1][j + 1]
            let thirdLine = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            let tempSum = firstLine + secondLine + thirdLine
            if (tempSum > maxSum || maxSum === null) {
                maxSum = tempSum
            }
        }
    }
    return maxSum
}

function rotLeft(a, d) {
    let firstElm
    for (let i = 0; i < d; i++) {
        firstElm = a.shift()
        a.push(firstElm)
    }
    return a
}

function minimumBribes(q) {
    let position, current
    for (let i = 0; i < q.length; i++) {
        position = i + 1
        current = q[i]
        if (current - position > 2) {
            console.log('Too chaotic')
            return 'Too chaotic'
        }
    }
    let bribes = 0
    let previous = null
    let elm
    for (let i = 0; i < q.length; i++) {
        current = q[i]
        if (previous && previous > current) {
            elm = q.splice(i, 1)[0]
            for (let j = i; j >= 0; j--) {
                if (j === 0 || q[j-1] < elm) {
                    q.splice(j,0,elm)
                    break
                }
                bribes = bribes + 1
            }
        }
        previous = q[i]
    }
    console.log(bribes)
    return bribes
}

function minimumSwaps(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i
    }
    let swaps = 0
    let position
    let current
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            current = arr[i]
            position = obj[i + 1]
            arr[i] = i + 1
            obj[i + 1] = i
            arr[position] = current
            obj[current] = position
            swaps = swaps + 1
        }
    }
    return swaps
}

function arrayManipulation(n, queries) {
    const obj = {}
    let start, end, value
    for (let j = 0; j < queries.length; j++) {
        start = queries[j][0]
        end = queries[j][1] + 1
        value = queries[j][2]
        obj[start] = obj[start] ? obj[start] + value : value
        obj[end] = obj[end] ? obj[end] - value : -value
    }
    let current = 0
    let max = null
    for (let j = 1; j <= n; j++) {
        current = obj[j] ? current + obj[j] : current
        if (!max || current > max) {
            max = current
        }
    }
    return max
}
