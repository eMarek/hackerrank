function checkMagazine(magazine, note) {
    let word, index
    for (let i = 0; i < note.length; i++) {
        word = note[i]
        index = magazine.indexOf(word)
        if (index === -1) {
            console.log('No')
            return 'No'
        }
        magazine.splice(index, 1)
    }
    console.log('Yes')
    return 'Yes'
}

function twoStrings(s1, s2) {
    const split1 = s1.split('')
    const split2 = s2.split('')
    const obj1 = {}
    for (let i = 0; i < split1.length; i++) {
        obj1[split1[i]] = true
    }
    for (let j = 0; j < split1.length; j++) {
        if (obj1[split2[j]]) {
            return 'YES'
        }
    }
    return 'NO'
}


function sherlockAndAnagrams(s) {
    let substring1, substring2
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            substring1 = s.slice(i, j)
            substring1 = substring1.split('').sort().join('')
            for (let k = i + 1; k <= s.length - substring1.length; k++) {
                substring2 = s.slice(k, k + substring1.length)
                substring2 = substring2.split('').sort().join('')
                if (substring1 === substring2) {
                    counter = counter + 1
                }
            }
        }
    }
    return counter
}

function countTriplets(arr, r) {
    const numbers = {}
    const pairs = {}
    let triplets = 0
    let number, prev
    for (let i = 0; i < arr.length; i++) {
        number = arr[i]
        prev = number / r
        if (pairs[prev]) {
            triplets = triplets + pairs[prev]
        }
        if (numbers[prev]) {
            pairs[number] = pairs[number] ? pairs[number] + numbers[prev] : numbers[prev]
        }
        numbers[number] = numbers[number] ? numbers[number] + 1 : 1
    }
    return triplets
}

function freqQuery(queries) {
    let query, action, value, freq
    const arr = []
    const obj = {}
    const frequencies = {}
    for (let i = 0; i < queries.length; i++) {
        query = queries[i]
        action = query[0]
        value = query[1]
        if (!obj[value]) {
            obj[value] = 0
        }
        switch (action) {
            case 1: {
                freq = obj[value]
                frequencies[freq] = frequencies[freq] ? frequencies[freq] - 1 : 0
                obj[value] = obj[value] ? obj[value] + 1 : 1
                freq = obj[value]
                frequencies[freq] = frequencies[freq] ? frequencies[freq] + 1 : 1
                break
            }
            case 2: {
                if (obj[value]) {
                    freq = obj[value]
                    frequencies[freq] = frequencies[freq] ? frequencies[freq] - 1 : 0
                    obj[value] = obj[value] - 1
                    freq = obj[value]
                    frequencies[freq] = frequencies[freq] ? frequencies[freq] + 1 : 1
                }
                break
            }
            case 3: {
                if (frequencies[value] > 0) {
                    arr.push(1)
                } else {
                    arr.push(0)
                }
                break
            }
        }
    }
    return arr
}