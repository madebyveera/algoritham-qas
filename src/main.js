
// -- PracticePaper
import practicePaper1 from './practice/paper-1/index'
practicePaper1.run()

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