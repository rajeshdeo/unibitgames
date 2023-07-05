## Unibitgames


## Steps follow to solve the peroblem:

1) <b>Read the complete problem and understand properly:</b>

  Given an array of integers and a target value, this program determines which two integers' sum equals the target and returns a 2D array.    It then merges the array into a single array with ascending order and doubles the target value. It finds combinations of digits from the    merged array that equal the double targeted value and returns them in a 2D array.

2) <b>Input : The program expects the following inputs: </b> <br>
  An array of integers. <br>
  A target value. <br>
    Example: <br>
   let arr = [1, 3, 2, 2, -4, -6, -2, 8]; <br>
   let target = 4;

3) <b>Output : The program produces the following output: </b> <br>

The first combination of pairs of integers whose sum equals the target value. <br>
The merged array after sorting in ascending order. <br>
The second combination of pairs of integers from the merged array that equal the double targeted value. <br>
Example Output:  <br>

First Combination For 4: [ [ -4, 8 ], [ 1, 3 ], [ 2, 2 ] ] <br>
Merge Into a Single Array: [ -4, 1, 2, 2, 3, 8 ] <br>
Second Combination For 8: [ [ -4, 1, 3, 8 ], [ -4, 2, 2, 8 ], [ 1, 2, 2, 3 ], [ 8 ] ] <br>



4) <b>Solutions : </b><br>
Iterative Solution<br>
The iterative solution uses a two-pointer technique to find the first combination and merges the array into a single array. Then it uses nested loops to find the second combination.<br>

Time Complexity<br>
The time complexity of the iterative solution is O(n^2), where n is the length of the array.<br>

Space Complexity<br>
The space complexity of the iterative solution is O(1) as it uses only a constant amount of extra space.<br><br>

Recursive Solution<br>
The recursive solution also uses a two-pointer technique to find the first combination and merges the array into a single array recursively. Then it uses backtracking to find the second combination.<br>

Time Complexity<br>
The time complexity of the recursive solution is O(n^2), where n is the length of the array.<br>

Space Complexity<br>
The space complexity of the recursive solution is O(n), where n is the length of the array. This is due to the recursive calls and the space used by the call stack.




