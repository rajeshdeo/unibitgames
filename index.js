function findCombinations(arr, target) {
    
// Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  let firstCombination = [];
  let left = 0;
  let right = arr.length - 1;

// Step 1: Find two integers whose sum equals the target
  while (left < right) {
      
// Finding sum of array of left and right element on every iteration
    let sum = arr[left] + arr[right];

    if (sum === target) {
      firstCombination.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
// Step 2: Merge the array into a single array and sort it
 let mergedArray = [...firstCombination.flat()].sort((a, b) => a - b);
// console.log(mergedArray)

  // Step 3: Double the target value and find combinations
  let doubledTarget = target * 2;
  let secondCombination = findCombinationsRecursive(mergedArray, doubledTarget, [], [], 0);


  // returning the output where is calling from
  return {
    firstCombination,
    mergedArray,
    secondCombination,
  };
}

// Recursive function to find combinations
function findCombinationsRecursive(arr, target, combination, combinations, start) {
    
  if (target === 0) {
    combinations.push(combination.slice());
    return;
  }

  if (target < 0) {
    return;
  }

// working with for loop on merge into a single array of first combination
  for (let i = start; i < arr.length; i++) {
    if (i > start && arr[i] === arr[i - 1]) {
      continue; // Skip duplicates to avoid duplicate combinations
    }
    
    //using recursive here
    combination.push(arr[i]);
    findCombinationsRecursive(arr, target - arr[i], combination, combinations, i + 1);
    combination.pop();
  }

  return combinations;
}



// Test case
let arr = [1, 3, 2, 2, -4, -6, -2, 8];
let target = 4;
let output = findCombinations(arr, target);

//Destructure of object
let {firstCombination,mergedArray,secondCombination}=output;

console.log(`First Combination For ${target}:`,firstCombination);

console.log("Merge Into a Single Array:",mergedArray);

console.log(`Second Combination For ${target * 2}:`,secondCombination);
