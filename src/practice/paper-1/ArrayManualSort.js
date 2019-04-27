class ArrayManualSort {
  manualSortArrayOfIntegers(inputArray) {
    inputArray.filter((item, index) => {
      var target = item;
      for (var j = index - 1; j >= 0 && inputArray[j] > target; j--) {
        inputArray[j + 1] = inputArray[j];
      }
      inputArray[j + 1] = target;
    });
    return inputArray;
  }

  isPalindromeString(inputStr) {
    const strLen = inputStr.split("").reverse();
    console.log("--- isPalindromeString ", strLen.join(''), inputStr);
    return strLen.join('') === inputStr;
  }
}

export default ArrayManualSort;
