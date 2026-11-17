function printNums(number) {
    for ( var i = 1; i <= number; i++) {
        console.log(i);
    }
}

function printArray(arr) {
    for ( var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

myArray = [12, 0, 2, 4, 9, 21]
printArray(myArray)