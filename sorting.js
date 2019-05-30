function countSwaps(a) {
    let isSorted, elm
    let swaps = 0
    while (!isSorted) {
        isSorted = true
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                elm = a.splice(i, 1)[0]
                a.splice(i + 1, 0, elm)
                swaps = swaps + 1
                isSorted = false
            }
        }
    }
    const string1 = `Array is sorted in ${swaps} swaps.`
    const string2 = `First Element: ${a[0]}`
    const string3 = `Last Element: ${a[a.length - 1]}`
    const result = `${string1}\n${string2}\n${string3}`
    console.log(result)
    return result
}

function maximumToys(prices, k) {
    const sortedPrices = prices.sort((a, b) => a - b)
    let sum = 0
    let toys = 0
    for (let i = 0; i < sortedPrices.length; i++) {
        sum = sum + sortedPrices[i]
        if (sum > k) {
            break
        }
        toys = toys + 1
    }
    return toys
}

function activityNotifications(expenditure, d) {
    let median
    let notices = 0
    const e2 = Math.floor(d / 2)
    const e1 = d % 2 === 1 ? e2 : e2 - 1
    let forRemoval = null
    let forRemovalIndex
    let forAdding = null
    let expSlice = expenditure.slice(0, d)
    const exp = expSlice.sort((a, b) => a - b)
    for (let i = d; i <= expenditure.length; i++) {
        median = (exp[e1] + exp[e2])/2
        if (expenditure[i] >= median * 2) {
            notices = notices + 1
        }
        forRemoval = expenditure[i - d]
        forRemovalIndex = exp.indexOf(forRemoval)
        exp.splice(forRemovalIndex, 1)
        forAdding = expenditure[i]
        for (let k = 0; k <= exp.length; k++) {
            if (exp[k] > forAdding || k === exp.length) {
                exp.splice(k, 0, forAdding)
                break
            }
        }
    }
    return notices
}
