(function () {
  'use strict';

  class BinarySearchTree {
    constructor() {
      //initially root is null

      this.root = null;
    }

    insertNumberNode(data, left = null, right = null) {
      let Node = {
        data,
        left,
        right
      };
      let currentNumberNode;
      if (!this.root) {
        this.root = Node;
      } else {
        currentNumberNode = this.root;
        while (currentNumberNode) {
          if (data < currentNumberNode.data) {
            if (!currentNumberNode.left) {
              currentNumberNode.left = Node;
              break;
            } else {
              currentNumberNode = currentNumberNode.left;
            }
          } else if (data > currentNumberNode.data) {
            if (!currentNumberNode.right) {
              currentNumberNode.right = Node;
              break;
            } else {
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

  class BoundaryTraversalOfBinaryTree {

      constructor(){

      }

      printBoundaryRight(node) {
          if (node !== null) {
              if (node.right != null) { 
                  console.log(node.data+'');
                  this.printBoundaryRight(node.left);
              }else if(node.left != null){
                  console.log(node.data + " "); 
                  this.printBoundaryRight(node.right); 
              }
          }
      }

      printLeaves(node) {
          if (node != null) { 
              this.printLeaves(node.left); 
              if (node.left == null && node.right == null) 
                  console.log(node.data + " "); 
              this.printLeaves(node.right); 
          } 
      }

      printBoundaryLeft(node) {
          if (node !== null) {
              if (node.left != null) { 
                  console.log(node.data+'');
                  this.printBoundaryLeft(node.left);
              }else if(node.right != null){
                  console.log(node.data + " "); 
                  this.printBoundaryLeft(node.right); 
              }
          }
      }

      printBoundary(node) {
          if(node !== null) {
              console.log(node.data + " ");
              this.printBoundaryLeft(node.left);
              this.printLeaves(node.left);
              this.printLeaves(node.right);
              this.printBoundaryRight(node.right);
          }
      }

  }

  class node {
      constructor(element) {
          this.element = element;
          this.next = null;
      }
  }

  class LinkedList { 
      constructor() { 
          this.head = null; 
          this.size = 0; 
      } 
      
      add(element) {
          var node$1 = new node(element);
          var current;
          if (this.head == null) {
              this.head = node$1; 
          } else { 
              current = this.head; 
              while (current.next) {
                  current = current.next;
              }
              current.next = node$1; 
          }
          this.size++;
      }
      insertAt(element, index) {
          if (index > 0 && index > this.size) {
              return false; 
          } else {
              var node$1 = new node(element);
              var curr, prev;
              curr = this.head;
              if (index === 0) { 
                  node$1.next = head; 
                  this.head = node$1; 
              } else { 
                  curr = this.head;
                  var it = 0;
                  while (it < index) { 
                      it++; 
                      prev = curr; 
                      curr = curr.next; 
                  } 
                  node$1.next = curr; 
                  prev.next = node$1;
              }
              this.size++; 
          }
      }
      removeFrom(index){
          if (index > 0 && index > this.size) {
              return false; 
          } else {
              var curr, prev, it = 0; 
              curr = this.head; 
              prev = curr; 
              if (index === 0) { 
                  this.head = curr.next; 
              } else { 
                  while (it < index) { 
                      it++; 
                      prev = curr; 
                      curr = curr.next; 
                  } 
                  prev.next = curr.next; 
              }
              this.size--; 
              return curr.element; 
          }
      }

      removeElement(element) { 
          var current = this.head; 
          var prev = null; 
          while (current != null) { 
              if (current.element === element) { 
                  if (prev == null) { 
                      this.head = current.next; 
                  } else { 
                      prev.next = current.next; 
                  } 
                  this.size--; 
                  return current.element; 
              } 
              prev = current; 
              current = current.next; 
          } 
          return -1; 
      }

      indexOf(element) { 
          var count = 0; 
          var current = this.head; 
          while (current != null) { 
              if (current.element === element) 
                  return count; 
              count++; 
              current = current.next; 
          } 
          return -1; 
      }

      isEmpty() { 
          return this.size == 0; 
      }

      size_of_list() { 
          console.log(this.size); 
      }

      printList() { 
          var curr = this.head; 
          var str = ""; 
          while (curr) { 
              str += curr.element + " "; 
              curr = curr.next; 
          } 
          console.log(str); 
      }
  }

  class Runner {
      run() {
          var ll = new LinkedList(); 
          console.log(ll.isEmpty()); 
          ll.add(10); 
          ll.printList(); 
          console.log(ll.size_of_list()); 

          ll.add(20); 
          ll.add(30); 
          ll.add(40); 
          ll.add(50); 
          // returns 10 20 30 40 50 
          ll.printList(); 
          // prints 50 from the list 
          console.log("is element removed ?" + ll.removeElement(50)); 
          // prints 10 20 30 40 
          ll.printList(); 
          // returns 3 
          console.log("Index of 40 " + ll.indexOf(40)); 
          // insert 60 at second positon 
          // ll contains 10 20 60 30 40 
          ll.insertAt(60, 2); 
          ll.printList(); 
          // returns false 
          console.log("is List Empty ? " + ll.isEmpty()); 
          // remove 3rd element from the list 
          console.log(ll.removeFrom(3)); 
          // prints 10 20 60 40 
          ll.printList(); 
      }
  }

  let node$1 = new BinarySearchTree();
  node$1.insertNumberNode(20);
  node$1.insertNumberNode(8);
  node$1.insertNumberNode(4);
  node$1.insertNumberNode(12);
  node$1.insertNumberNode(10);
  node$1.insertNumberNode(14);
  node$1.insertNumberNode(22);
  node$1.insertNumberNode(25);
  console.log('---- BinarySearchTree ', node$1);
  let boundaryTravers = new BoundaryTraversalOfBinaryTree();
  boundaryTravers.printBoundary(node$1.root);
  let linkedListRunner = new Runner();
  linkedListRunner.run();

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
