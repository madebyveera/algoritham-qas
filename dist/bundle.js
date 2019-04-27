(function () {
  'use strict';

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    add(data, left = null, right = null) {
      const node = { data, left, right };
      if (!this.root) {
        this.root = node;
      } else {
        let nodeData = this.root;
        while (nodeData) {
          if (data < nodeData.data) {
            if (!nodeData.left) {
              nodeData.left = node;
              break;
            } else {
              nodeData = nodeData.left;
            }
          } else if (data > nodeData.data) {
            if (!nodeData.right) {
              nodeData.right = node;
              break;
            } else {
              nodeData = nodeData.right;
            }
          } else {
            console.log("Try Different Value");
            break;
          }
        }
      }
    }

    print(){
      console.log('Binary-Search-Tree Paper-1 == ', this.root);
    }
  }

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

  class StackStruct {
      
      constructor(){
          this.stack = [];
      }

      push(item){
          this.stack.push(item);
      }

      pop(){
          let lifoStr = this.stack[this.stack.length-1];
          this.stack = this.stack.slice(0, this.stack.length-1);
          return lifoStr
      }

      peek(){
          return this.stack[this.stack.length-1]
      }

      isEmpty(){
          return this.stack.length === 0
      }

  }

  class InfixToPostfix {
    prec(ch) {
      if (ch === "+" || ch === "-") {
        return 1;
      } else if (ch === "*" || ch === "/") {
        return 2;
      } else if (ch === "^") {
        return 3;
      }
      return -1;
    }

    getInfixToPostfix(str){
        const exp = str.split('');
        const stack = new StackStruct();
        let result = '';
        exp.filter((item, index) => {
            if(item === "("){
                stack.push(item);
            }else if(item === ")"){
                while(!stack.isEmpty() && stack.peek()!=="("){
                    result = result + stack.pop();
                }
                stack.pop();
            }else if(/^[a-zA-Z]+$/.test(item)){
                result = result + item;
            }else {
                while(!stack.isEmpty() && this.prec(item)<this.prec(stack.peek())){
                    result = result + stack.pop();
                }
                stack.push(item);
            }
        });
        while(!stack.isEmpty()){
            result = result + stack.pop();
        }
        return result
    }
  }

  var infixToPostfix = new InfixToPostfix();

  class PostfixToInfix {

      getPostfixToInfix(str){
          const exp = str.split('');
          const stack = new StackStruct();

          exp.filter((item)=>{
              if(/^[a-zA-Z]+$/.test(item)){
                  stack.push(item+" ");
              }else {
                  const opr1 = stack.peek();
                  stack.pop();
                  const opr2 = stack.peek();
                  stack.pop();
                  stack.push('('+opr2+item+opr1+')');
              }
          });

          return stack.peek()
      }

  }

  var postfixToInfix = new PostfixToInfix();

  class PaperOne {
      run() {
          const binarySearchTree = new BinarySearchTree();
          binarySearchTree.add(7);
          binarySearchTree.add(2);
          binarySearchTree.add(9);
          binarySearchTree.add(4);
          binarySearchTree.print();

          const arrayManualSort = new ArrayManualSort();
          const result = arrayManualSort.manualSortArrayOfIntegers([5, 4, 23, 1, 18 ]);
          console.log('--== manualSortArrayOfIntegers -- ', result);
          console.log('--== isPalindromeString -- ', arrayManualSort.isPalindromeString('abba'));

          const stack = new StackStruct();
          stack.push(7);
          console.log('StackStruct::stack.peek() ', stack.peek());
          stack.pop();
          console.log('StackStruct::stack.isEmpty() ', stack.isEmpty());
          
          //-- InfixToPostfix
          const response = infixToPostfix.getInfixToPostfix('a+b*(c^d-e)^(f+g*h)-i');
          console.log('-- InfixToPostfix --== ', response);
          //-- postfixToInfix
          const postfixToInfixStr = postfixToInfix.getPostfixToInfix(response);
          console.log('--postfixToInfixStr --== ', postfixToInfixStr);
      }   
  }

  var practicePaper1 = new PaperOne();

  practicePaper1.run();

  // import BinarySearchTree from './binarySearchTree'
  // import sortNumericArray from './sortNumericArray'
  // import reverseAnArray   from './reverseAnArray'
  // import duplicateAndUniqueVals from './duplicateAndUniqueVals'
  // import StackDataStructure   from './stackDataStruct'
  // import infixToPostfix from './infixToPostfix'
  // import postfixToInfix from './postfixToInfix'

  // let BSTtest = new BinarySearchTree()
  // BSTtest.insertNumberNode(10);
  // BSTtest.insertNumberNode(7);
  // BSTtest.insertNumberNode(14);
  // BSTtest.insertNumberNode(5);
  // BSTtest.insertNumberNode(13);
  // BSTtest.insertNumberNode(8);
  // BSTtest.insertNumberNode(18);
  // BSTtest.insertNumberNode(15);
  // BSTtest.insertNumberNode(6);
  // console.log(BSTtest)

  // console.log('--- Filter New Values & Missing values in Array2')
  // let oldArray = [1,2,3]
  // let newArray = [2,3,4,5]
  // console.log(oldArray.filter(value => -1 === newArray.indexOf(value)))
  // console.log(newArray.filter(value => -1 === oldArray.indexOf(value)))

  // // --=== Sorting Array of Numbers
  // let sortArray = [8,3,6,23,1,45,2,9]
  // console.log('--- Javascript useArraySortMethod ', sortNumericArray.useArrayMethodSort(sortArray))
  // console.log('--- Javascript useManualMethodSort ', sortNumericArray.useManualMethodSort(sortArray))

  // // --=== Find duplicate values in array
  // sortArray = [8,3,6,23,1,45,2,9,23,45]
  // console.log('--- array, uniqueValues, duplicateValues '
  //                 , sortArray
  //                 , duplicateAndUniqueVals.getUniqueValsForNumericArray(sortArray)
  //                 , duplicateAndUniqueVals.getDuplicateValsForNumericArray(sortArray)
  //                 , duplicateAndUniqueVals.getDuplicateCharsInString('Veera')
  //                 , duplicateAndUniqueVals.constructCharCountArrayForStr('geeksforgeeks')
  //                 )

  // // --=== Array Reverse
  // sortArray = [8,3,6,23,1,45,2,9,23]
  // console.log('--=== ReverseAnArray --== '
  //             , sortArray
  //             , reverseAnArray.useManualMethodForReverse(sortArray)
  //             , reverseAnArray.useManualMethodForPalindrome('RaceCar')
  //             , reverseAnArray.useManualMethodForPalindrome('RaceCar2')
  //             , reverseAnArray.arrayRevWithoutEffectingSpecChars('c,b$a')
  //             )

  // // --=== Stack
  // let stack = new StackDataStructure()
  // stack.push(22)
  // stack.push(23)
  // stack.push(24)
  // stack.push(25)
  // stack.push(26)
  // stack.print()
  // stack.pop()
  // stack.print()
  // stack.peek()
  // stack.print()
  // stack.isEmpty()
  // stack.print()
  // stack.peek()
  // stack.peek()
  // stack.peek()
  // stack.print()
  // stack.isEmpty()
  // //-- infixToPostfix
  // infixToPostfix.run("a+b*(c^d-e)^(f+g*h)-i")
  // // -- postfixToInfix
  // postfixToInfix.run("abc++")

}());
