function makeAnagram(a, b) {
    const arrA = a.split('')
    const objA = {}
    for (let i = 0; i < a.length; i++) {
        objA[a[i]] = objA[a[i]] ? objA[a[i]] + 1 : 1
    }
    const arrB = b.split('')
    const objB = {}
    for (let j = 0; j < b.length; j++) {
        objB[b[j]] = objB[b[j]] ? objB[b[j]] + 1 : 1
    }
    let deletions = 0js
    for (let charA in objA) {
        while (objA[charA] && (!objB[charA] || objA[charA] > objB[charA])) {
            objA[charA] = objA[charA] - 1
            deletions = deletions + 1
        }
    }
    for (let charB in objB) {
        while (objB[charB] && (!objA[charB] || objB[charB] > objA[charB])) {
            objB[charB] = objB[charB] - 1
            deletions = deletions + 1
        }
    }
    return deletions
}

function alternatingCharacters(s) {
    let deletions = 0
    let last
    for (let i = 0; i < s.length; i++) {
        if (last && last === s[i]) {
            deletions = deletions + 1
        }
        last = s[i]
    }
    return deletions
}
