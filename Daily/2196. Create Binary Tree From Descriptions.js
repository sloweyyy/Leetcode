class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var createBinaryTree = function (descriptions) {
    const nodes = new Map();
    const children = new Set();

    descriptions.forEach(([parent, child, isLeft]) => {
        if (!nodes.has(parent)) {
            nodes.set(parent, new TreeNode(parent));
        }
        if (!nodes.has(child)) {
            nodes.set(child, new TreeNode(child));
        }
        children.add(child);

        if (isLeft) {
            nodes.get(parent).left = nodes.get(child);
        } else {
            nodes.get(parent).right = nodes.get(child);
        }
    });

    let root;
    for (const [node] of nodes) {
        if (!children.has(node)) {
            root = nodes.get(node);
            break;
        }
    }

    return root;
};
