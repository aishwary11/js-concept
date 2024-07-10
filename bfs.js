class Graph {
  constructor () {
    this.adjList = {};
  }
  addEdge(u, v) {
    if (!this.adjList[u]) this.adjList[u] = [];
    this.adjList[u].push(v);
  }
  bfs(startNode) {
    const queue = [];
    const visited = new Array(Object.keys(this.adjList).length).fill(false);
    visited[startNode] = true;
    queue.push(startNode);
    while (queue.length != 0) {
      const currentNode = queue.shift();
      console.log(currentNode + " ");
      for (const neighbor of this.adjList[currentNode] || []) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}

const graph = new Graph();

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 4);

console.log("Breadth First Traversal starting from vertex 0: ");
graph.bfs(0);



/**
 * BFS binary tree
 */

class Node {
  constructor (val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
var root = null;

function printLevelOrder() {
  var h = height(root);
  for (var i = 1; i <= h; i++) {
    printCurrentLevel(root, i);
  }
}

function height(root) {
  if (root == null) return 0;
  else {
    var lheight = height(root.left);
    var rheight = height(root.right);
    return lheight > rheight ? (lheight + 1) : (rheight + 1);
  }
}
function printCurrentLevel(root, level) {
  if (root == null) return;
  if (level == 1) console.log(root.data + " ");
  else if (level > 1) {
    printCurrentLevel(root.left, level - 1);
    printCurrentLevel(root.right, level - 1);
  }
}


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Level order traversal of  binary tree is ");
printLevelOrder();
