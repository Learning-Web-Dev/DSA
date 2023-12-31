/* Binary Search Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  /* Add Method */
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) return (node.left = new Node(data));
          else if (node.left !== null) return searchTree(node.left);
        } else if (data > node.data) {
          if (node.right === null) return (node.right = new Node(data));
          else if (node.right !== null) return searchTree(node.right);
        }
      };
      return searchTree(node);
    }
  }

  /* Mininum Value */
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  /* Maximum Value */
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  /* Find Node and its properties */
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) current = current.left;
      else if (data > current.data) current = current.right;
      else if (current === null) return null;
    }
    return current;
  }

  /* To check if the value is present */
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) current = current.left;
      else current = current.right;
    }
    return false;
  }

  /* Remove Value */
  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) return null;
      if (data === node.data) {
        //node has no children
        if (node.left === null && node.right === null) return null;
        //node has no left child
        if (node.left === null) return node.right;

        //node has no right child
        if (node.right === null) return node.left;

        //node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  /* Traversing */
  findMinHeight(node = this.root) {
    if (node === null) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    
    if (left < right) return left + 1;
    else return right + 1;
  }
}

const bst = new BST();
bst.add(5);
bst.add(6);
// console.log("Node : ", bst.root);
bst.add(4);
bst.add(3);
bst.add(7);
// bst.remove(7);
console.log("Find : ", bst.findMinHeight());
