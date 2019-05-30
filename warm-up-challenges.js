function sockMerchant(n, ar) {
    const socks = {}
    for (let i = 0; i < ar.length; i++) {
        if (!socks[ar[i]]) {
            socks[ar[i]] = 1
        } else {
            socks[ar[i]] = socks[ar[i]] + 1
        }
    }
    let pairs = 0
    for (let s in socks) {
        pairs = pairs + Math.floor(socks[s]/2)
    }
    return pairs
}

function countingValleys(n, s) {
    let currentPosition = 0
    let valleysCounter = 0
    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            currentPosition++
        } else if (s[i] === 'D') {
            currentPosition--
        }
        if (currentPosition === 0 && s[i] === 'U') {
            valleysCounter++
        }
    }
    return valleysCounter
}

function jumpingOnClouds(c) {
    let jumps = 0
    let currentCloud = c.shift()
    while (c.length) {
        jumps++
        currentCloud = c.shift()
        if (currentCloud === 1) {
            currentCloud = c.shift()
        } else if (currentCloud === 0 && c[0] === 0) {
            currentCloud = c.shift()
        }
    }
    return jumps
}

function repeatedString(s, n) {
    let occurrences = 0
    let aCounter = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            aCounter++
        }
    }
    const repeats = Math.floor(n / s.length)
    occurrences = repeats * aCounter
    const remain = n % s.length
    for (let j = 0; j < remain; j++) {
        if (s[j] === 'a') {
            occurrences++
        }
    }
    return occurrences
}
