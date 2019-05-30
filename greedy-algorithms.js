function minimumAbsoluteDifference(arr) {
    let diff
    let minDiff = null
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            diff = Math.abs(arr[i] - arr[j])
            if (minDiff === null) {
                minDiff = diff
                continue
            }
            if (diff > minDiff) {
                break
            }
            if (diff < minDiff) {
                minDiff = diff
            }
        }
    }
    return minDiff
}

function luckBalance(k, contests) {
    let contest, luck, important
    let maxLuck = 0
    const importantLucks = []
    for (let i = 0; i < contests.length; i++) {
        contest = contests[i]
        luck = contest[0]
        important = contest[1]
        if (!important) {
            maxLuck = maxLuck + luck
        } else {
            importantLucks.push(luck)
        }
    }
    importantLucks.sort((a, b) => b - a)
    for (let j = 0; j < importantLucks.length; j++) {
        if (j < k) {
            maxLuck = maxLuck + importantLucks[j]
        } else {
            maxLuck = maxLuck - importantLucks[j]
        }
    }
    return maxLuck
}
