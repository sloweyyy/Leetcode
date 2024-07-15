function buildTree(currentNodeValue, childNodesMap) {
    let newNode = new TreeNode(currentNodeValue);
    if (childNodesMap.has(currentNodeValue)) {
        let [leftChild, rightChild] = childNodesMap.get(currentNodeValue);
        if (leftChild !== -1) {
            newNode.left = buildTree(leftChild, childNodesMap);
        }
        if (rightChild !== -1) {
            newNode.right = buildTree(rightChild, childNodesMap);
        }
    }
    return newNode;
}

var createBinaryTree = function (descriptions) {
    let childNodesSet = new Set();
    let parentChildMap = new Map();

    descriptions.forEach(([parent, child, isLeft]) => {
        if (!parentChildMap.has(parent)) {
            parentChildMap.set(parent, [-1, -1]);
        }

        childNodesSet.add(child);

        if (isLeft === 1) {
            parentChildMap.get(parent)[0] = child;
        } else {
            parentChildMap.get(parent)[1] = child;
        }
    });

    let rootNodeValue;
    for (let parent of parentChildMap.keys()) {
        if (!childNodesSet.has(parent)) {
            rootNodeValue = parent;
            break;
        }
    }

    return buildTree(rootNodeValue, parentChildMap);
};
