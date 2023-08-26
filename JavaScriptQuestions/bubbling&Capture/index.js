
// IF no parameter true/false after callback function means BUBBLING
// IF true --> CAPTURING


document.getElementById("grand").addEventListener("click", () => {
    console.log("grand clicked")
}, false);
document.getElementById("parent").addEventListener("click", (event) => {
    console.log("parent clicked");
    
}, false);
document.getElementById("child").addEventListener("click", (event) => {
    console.log("child clicked")
    //event.stopPropagation();
}, false);

class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    insert(num) {
      const n = new Node(num);
      if (!this.root) {
        this.root = n;
      }
      let current = this.root;
      while (true) {
        if(num === current.value) return undefined;
        if (current.value > num) {
          if (current.left === null) {
            current.left = n;
            return this;
          } else {
            current = current.left;
          }
        }
        if (current.value < num) {
          if (current.right === null) {
            current.right = n;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
    BFS() {
      let currentNode = this.root;
      let queue = [];
      let result = [];
      let resultValue = [];
      queue.push(currentNode);
      while (queue.length) {
        currentNode = queue.shift();
        result.push(currentNode);
        resultValue.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      console.log("BFS",resultValue);
    }
    DFS_PREORDER(){
      const result = []
      const traverse = (node)=>{
          result.push(node.value);
          if(node.left) traverse(node.left);
          if(node.right)traverse(node.right);
      }
      traverse(this.root);
      console.log("DFS PREORDER",result);
    }
    DFS_POSTORDER(){
      const result = []
      const traverse = (node)=>{
          if(node.left) traverse(node.left);
          if(node.right)traverse(node.right);
          result.push(node.value);
      }
      traverse(this.root);
      console.log("DFS POSTORDER",result);
    }
    DFS_INORDER(){
      const result = []
      const traverse = (node)=>{
          if(node.left) traverse(node.left);
          result.push(node.value);
          if(node.right)traverse(node.right);
      }
      traverse(this.root);
      console.log("DFS INORDER",result);
    }
    checkBalanceTree(){
      // If the tree is empty, we can say it’s balanced...
      if (this.root == null)  return true;
      var Height = function(root) {
          // Base case...
          if (root == null)  return 0;
          // Height of left subtree...
          let leftHeight = Height(root.left);
          // Height of height subtree...
          let rightHight = Height(root.right);
          console.log(root.value, leftHeight)
  
          // In case of left subtree or right subtree unbalanced, return -1...
          if (leftHeight == -1 || rightHight == -1)  return -1;
          // If their heights differ by more than ‘1’, return -1...
          if (Math.abs(leftHeight - rightHight) > 1)  return -1;
          // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
          return Math.max(leftHeight, rightHight) + 1;
      };
      // Height Function will return -1, when it’s an unbalanced tree...
      if (Height(this.root) == -1)  return false;
    }
  }
  
  const myTree = new BST();
  
  myTree.insert(47);
  myTree.insert(21);
  myTree.insert(76);
  myTree.insert(18);
  myTree.insert(27);
  myTree.insert(82);
  myTree.insert(52);
  
  myTree.BFS();
  myTree.DFS_PREORDER();
  myTree.DFS_POSTORDER();
  myTree.DFS_INORDER();
  myTree.checkBalanceTree();