class Node {
  constructor (data) {
    this.data = data;
    this.left = this.right = null;
  }
}

function ifNodeExists(node, key) {
  if (node == null) return false;
  if (node.data == key) return true;
  return ifNodeExists(node.left, key) || ifNodeExists(node.right, key);
}
let root = new Node(0);
root.left = new Node(1);
root.left.left = new Node(3);
root.left.left.left = new Node(7);
root.left.right = new Node(4);
root.left.right.left = new Node(8);
root.left.right.right = new Node(9);
root.right = new Node(2);
root.right.left = new Node(5);
root.right.right = new Node(6);
if (ifNodeExists(root, 40)) console.log("Yes Present");
else console.log("Not Present");