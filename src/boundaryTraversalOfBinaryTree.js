import stack from './stackDataStruct'
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

export default BoundaryTraversalOfBinaryTree