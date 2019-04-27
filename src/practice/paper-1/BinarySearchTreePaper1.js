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
    console.log('Binary-Search-Tree Paper-1 == ', this.root)
  }
}

export default BinarySearchTree;
