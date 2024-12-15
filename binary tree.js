class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function inOrderTraversal(node) {
    if (node) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
inOrderTraversal(root);
