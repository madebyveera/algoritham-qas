import BinarySearchTreePaper1 from './BinarySearchTreePaper1'
import ArrayManualSort from './ArrayManualSort'
import StackStruct from './StackStruct'
import infixToPostfix from './infixToPostfix'
import postfixToInfix from './postfixToInfix'
class PaperOne {
    run() {
        const binarySearchTree = new BinarySearchTreePaper1();
        binarySearchTree.add(7)
        binarySearchTree.add(2)
        binarySearchTree.add(9)
        binarySearchTree.add(4)
        binarySearchTree.print()

        const arrayManualSort = new ArrayManualSort()
        const result = arrayManualSort.manualSortArrayOfIntegers([5, 4, 23, 1, 18 ])
        console.log('--== manualSortArrayOfIntegers -- ', result)
        console.log('--== isPalindromeString -- ', arrayManualSort.isPalindromeString('abba'))

        const stack = new StackStruct()
        stack.push(7)
        console.log('StackStruct::stack.peek() ', stack.peek())
        stack.pop()
        console.log('StackStruct::stack.isEmpty() ', stack.isEmpty())
        
        //-- InfixToPostfix
        const response = infixToPostfix.getInfixToPostfix('a+b*(c^d-e)^(f+g*h)-i')
        console.log('-- InfixToPostfix --== ', response)
        //-- postfixToInfix
        const postfixToInfixStr = postfixToInfix.getPostfixToInfix(response)
        console.log('--postfixToInfixStr --== ', postfixToInfixStr)
    }   
}

export default new PaperOne()