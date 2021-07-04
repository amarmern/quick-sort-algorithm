let arr = [23, 45, 16, 37, 99, 22];

function quickSortRecursive(arr) {
  if (arr.length < 2) {
    return arr;
  }

  // picking the key element as pivot
  let pivot = arr.pop(); // using pop taking last
  //let pivot = arr[0] // using 1st element
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSortRecursive(left).concat(pivot, quickSortRecursive(right));
}

//console.log(quickSortRecursive(arr));

function quickSortES6(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[Math.floor(Math.random() * arr.length)];
  console.log(pivot);

  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }

  return [...quickSortES6(left), ...equal, ...quickSortES6(right)];
}

console.log(quickSortES6(arr));
