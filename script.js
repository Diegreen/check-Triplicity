const array1 = [1, 1, 1, 2, 3, 7, 20, 43, 23, 24, 23]

const array2 = []

for (let i = 0; i < 1000000000000000; i++) {
    array2.push(i)
}

function verifyDoubleItem(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let x = i + 2; x < array.length; x++) {
                if (array[i] === array[j] && array[j] === array[x]) {
                    console.log(i)
                    return console.log(true)
                } else {
                    return console.log(false)
                }
            }
        }
    }
}

function checkForTriplicity(array, numberOfRepetitions) {
    const hashtable = {}
    for (let i = 0; i < array.length; i++) {
        if (hashtable[array[i]]) {
            hashtable[array[i]] += 1
            if (hashtable[array[i]] >= numberOfRepetitions) {
                return console.log(true + ": numero " + array[i] + " está repetido")
            }
        } else {
            hashtable[array[i]] = 1
        }
    }
    return console.log(false)
}



verifyDoubleItem(array1)
verifyDoubleItem(array2)