function getDirections(root, startValue, destValue) {
    let startNode = null;

    function findStartNode(node) {
        if (!node) return false;
        if (node.val === startValue) {
            startNode = node;
            return true;
        }
        return findStartNode(node.left) || findStartNode(node.right);
    }

    findStartNode(root);

    const nodesParents = {};
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();
        if (node.left) {
            nodesParents[node.left.val] = node;
            queue.push(node.left);
        }
        if (node.right) {
            nodesParents[node.right.val] = node;
            queue.push(node.right);
        }
    }

    const visited = new Set();
    const trackedPath = {};
    let destinationNode = null;

    function bfs(start) {
        const queue = [start];
        visited.add(start.val);

        while (queue.length) {
            const node = queue.shift();

            if (node.val === destValue) {
                destinationNode = node;
                break;
            }

            if (
                nodesParents[node.val] &&
                !visited.has(nodesParents[node.val].val)
            ) {
                const parent = nodesParents[node.val];
                queue.push(parent);
                trackedPath[parent.val] = [node, "U"];
                visited.add(parent.val);
            }

            if (node.left && !visited.has(node.left.val)) {
                queue.push(node.left);
                trackedPath[node.left.val] = [node, "L"];
                visited.add(node.left.val);
            }

            if (node.right && !visited.has(node.right.val)) {
                queue.push(node.right);
                trackedPath[node.right.val] = [node, "R"];
                visited.add(node.right.val);
            }
        }
    }

    bfs(startNode);

    const resultPath = [];
    let curNode = destinationNode;

    while (curNode !== startNode) {
        const [sourceNode, direction] = trackedPath[curNode.val];
        resultPath.push(direction);
        curNode = sourceNode;
    }

    resultPath.reverse();
    return resultPath.join("");
}
