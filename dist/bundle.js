(function () {
  'use strict';

  class BinarySearchTree {
    constructor() {
      //initially root is null

      this.root = null;
    }

    insertNumberNode(data, left = null, right = null) {
      //creating a Node
      //data we pass will act as individual parent Node
      //left and right are subtrees
      let Node = {
        data,
        left,
        right
      };
      //suppose currentNumberNode as a parent node
      //current Num Node value decides position of next value
      //if it goes to left subtree or right subtree
      let currentNumberNode;

      if (!this.root) {
        //if its not a root make it one by passing a Node
        this.root = Node;
      } else {
        //and if its a root now, assign it to currentNumberNode
        currentNumberNode = this.root;
        while (currentNumberNode) {
          //if data is smaller than cuurent data, send it in left subtree
          if (data < currentNumberNode.data) {
            //if current num node don't have Node properties
            //we will assign it node properties
            if (!currentNumberNode.left) {
              currentNumberNode.left = Node;
              break;
            } else {
              //if it has node properties and it is sent by root to left
              //we will make it a left node because it is smaller than root node
              currentNumberNode = currentNumberNode.left;
            }
            //if data is larger than cuurent data, send it in right subtree
          } else if (data > currentNumberNode.data) {
            //if current num node don't have Node properties
            //we will assign it node properties
            if (!currentNumberNode.right) {
              currentNumberNode.right = Node;
              break;
            } else {
              //if it has node properties and it is sent by root to right
              //we will make it a right node because it is larger than root node
              currentNumberNode = currentNumberNode.right;
            }
          } else {
            console.log("Try Different Value");
            break;
          }
        }
      }
    }
  }

  class SortNumericArray {
      
      useArrayMethodSort(inputArray){
          inputArray = inputArray.sort((a,b)=>a-b);
          return inputArray
      }

      useManualMethodSort(inputArray){
          inputArray.filter((item, index)=>{
              let target = item;
              for(var j=index-1;
                      j>=0 && inputArray[j]>target;
                      j--){
                          inputArray[j+1]=inputArray[j];
                      }
              inputArray[j+1] = target;
          });
          return inputArray
      }

  }

  var sortNumericArray = new SortNumericArray();

  class ReverseAnArray{

      useArrayMethodForReverse(inputArray) {
          return inputArray.reverse()
      }

      useManualMethodForReverse(inputArray) {
          var revArray = [];
          for(var j=inputArray.length; j>0; j--){
              revArray.push(inputArray[j-1]);
          }
          return revArray;
      }

      arrayRevWithoutEffectingSpecChars(inputStr){
          console.log('arrayRevWithoutEffectingSpecChars --== ', inputStr);
          let str = inputStr.toLowerCase().split('');
          var r = str.length - 1;
          let l = 0; 
          while (l < r) { 
              if (!/^[a-zA-Z()]+$/.test(str[l])){
                  l++; 
              } else if(!/^[a-zA-Z()]+$/.test(str[r])) {
                  r--;
              } else { 
                  var tmp = str[l]; 
                  str[l] = str[r]; 
                  str[r] = tmp; 
                  l++; 
                  r--; 
              } 
          } 
          return str.join('')
      }

      useManualMethodForPalindrome(inputStr){
          let str = inputStr.toLowerCase().split('');
          let len = str.length;
          for (var i = 0; i < len/2; i++) {
              if (str[i] !== str[len - 1 - i]) {
                  return false;
              }
          }
          return true
      }

  }

  var reverseAnArray = new ReverseAnArray();

  class DuplicateAndUniqueVals {

      getUniqueValsForNumericArray(numericArray){
          let uniqueVals = {};
          numericArray.filter((item)=>{
              uniqueVals[item] = {};
          });
          return Object.keys(uniqueVals)
      }

      getDuplicateValsForNumericArray(numericArray){
          let duplicateVals = [];
          let uniqueVals = {};
          numericArray.filter((item)=>{
              if(uniqueVals[item]){
                  duplicateVals.push(item);
              }
              uniqueVals[item] = {};
          });
          return duplicateVals
      }

      getDuplicateCharsInString(inputStr){
          let charArray = inputStr.split('');
          let uniqueChars = {};
          let duplicateChars = [];
          charArray.filter((item)=>{
              if(uniqueChars[item]){
                  duplicateChars.push(item);
              }
              uniqueChars[item] = {};
          });

          return duplicateChars.join('')
      }

      constructCharCountArrayForStr(inputStr){
          let charArray = inputStr.split('');
          let uniqueChars = {};
          charArray.filter((item)=>{
              if(uniqueChars[item]){
                  uniqueChars[item] = uniqueChars[item] + 1;
              }else {
                  uniqueChars[item] = 1;
              }
          });

          for(var prop in uniqueChars){
              if(uniqueChars[prop] === 1){
                  delete uniqueChars[prop];
              }
          }

          return uniqueChars;
      }

  }

  var duplicateAndUniqueVals = new DuplicateAndUniqueVals();

  let BSTtest = new BinarySearchTree();
  BSTtest.insertNumberNode(10);
  BSTtest.insertNumberNode(7);
  BSTtest.insertNumberNode(14);
  BSTtest.insertNumberNode(5);
  BSTtest.insertNumberNode(13);
  BSTtest.insertNumberNode(8);
  BSTtest.insertNumberNode(18);
  BSTtest.insertNumberNode(15);
  BSTtest.insertNumberNode(6);
  console.log(BSTtest);

  console.log('--- Filter New Values & Missing values in Array2');
  let oldArray = [1,2,3];
  let newArray = [2,3,4,5];
  console.log(oldArray.filter(value => -1 === newArray.indexOf(value)));
  console.log(newArray.filter(value => -1 === oldArray.indexOf(value)));

  // --=== Sorting Array of Numbers
  let sortArray = [8,3,6,23,1,45,2,9];
  console.log('--- Javascript useArraySortMethod ', sortNumericArray.useArrayMethodSort(sortArray));
  console.log('--- Javascript useManualMethodSort ', sortNumericArray.useManualMethodSort(sortArray));

  // --=== Find duplicate values in array
  sortArray = [8,3,6,23,1,45,2,9,23,45];
  console.log('--- array, uniqueValues, duplicateValues '
                  , sortArray
                  , duplicateAndUniqueVals.getUniqueValsForNumericArray(sortArray)
                  , duplicateAndUniqueVals.getDuplicateValsForNumericArray(sortArray)
                  , duplicateAndUniqueVals.getDuplicateCharsInString('Veera')
                  , duplicateAndUniqueVals.constructCharCountArrayForStr('geeksforgeeks')
                  );

  // --=== Array Reverse
  sortArray = [8,3,6,23,1,45,2,9,23];
  console.log('--=== ReverseAnArray --== '
              , sortArray
              , reverseAnArray.useManualMethodForReverse(sortArray)
              , reverseAnArray.useManualMethodForPalindrome('RaceCar')
              , reverseAnArray.useManualMethodForPalindrome('RaceCar2')
              , reverseAnArray.arrayRevWithoutEffectingSpecChars('c,b$a')
              );

}());
