
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {

        let currentVal = arr[i];    //set current to the value in array in the first Valition that we havent sorted yet

        let r = i - 1;              //set equal to current position - 1, to compare to all previous values

        while ((r > -1) && (currentVal < arr[r])) {         //compare to previous in array, stopping at beggining or when the compared value is larger
            arr[r + 1] = arr[r];                            //if compared value is higher, swap compared into the current postion being sorted. Prevents data loss when swapped into final positon
            r--;                                            //decrement loop, send to value before compared
        }
        arr[r + 1] = currentVal;    //Send value to proper position
    }
    return arr;
}

arr = [2, 4, 1, 7, 5, 4, 12];

console.log(insertionSort(arr));