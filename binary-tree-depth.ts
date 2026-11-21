interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function node(
  value: number,
  left: TreeNode | null = null,
  right: TreeNode | null = null
): TreeNode {
  return { value, left, right };
}

const testCases: {
  name: string;
  root: TreeNode | null;
  expected: number;
}[] = [
   {
  name: "Root with zero value",
  root: node(0, node(5), node(10)),
  expected: 2,
},
{
  name: "Single node with zero value",
  root: node(0),
  expected: 1,
},
  {
    name: "Empty tree",
    root: null,
    expected: 0,
  },
  {
    name: "Single node",
    root: node(666),
    expected: 1,
  },
  {
    name: "Two levels",
    root: node(10, node(5), node(15)),
    expected: 2,
  },
  {
    name: "Balanced tree - depth 3",
    root: node(
      10,
      node(5, node(3), node(7)),
      node(15, node(12), node(20))
    ),
    expected: 3,
  },
  {
    name: "Left-skewed tree - depth 5",
    root: node(
      10,
      node(8,
        node(6,
          node(4,
            node(2)
          )
        )
      )
    ),
    expected: 5,
  },
  {
    name: "Right-skewed tree - depth 4",
    root: node(
      1,
      null,
      node(2,
        null,
        node(3,
          null,
          node(4)
        )
      )
    ),
    expected: 4,
  },
  {
    name: "Unbalanced tree - depth 4",
    root: node(
      10,
      node(5),
      node(15,
        node(12,
          node(11)
        ),
        node(20)
      )
    ),
    expected: 4,
  },
  {
    name: "Mixed tree - depth 6",
    root: node(
      10,
      node(5,
        node(3),
        node(7,
          null,
          node(8,
            node(9,
              null,
              node(11)
            )
          )
        )
      ),
      node(15, node(12), node(20))
    ),
    expected: 6,
  },
];

// Your implementation
function maxDepthRecursive(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  const childrenMaxDepth = Math.max(leftDepth, rightDepth);
  
  return 1 + childrenMaxDepth;;
}


function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const stack: Array<{
    node: TreeNode;
    depth: number;
  }> = [{ node: root, depth: 1 }];

  let maxDepth = 0;

  while (stack.length > 0) {
    const current = stack.pop()!;

    maxDepth = Math.max(maxDepth, current.depth);

    if (current.node.left !== null) {
      stack.push({
        node: current.node.left,
        depth: current.depth + 1,
      });
    }

    if (current.node.right !== null) {
      stack.push({
        node: current.node.right,
        depth: current.depth + 1,
      });
    }
  }
  
  return maxDepth;
}


// Test runner
for (const { name, root, expected } of testCases) {
  const actual = maxDepth(root);
  const passed = actual === expected;

  console.log(
    `${passed ? "PASS" : "FAIL"} | ${name} | ` +
    `Expected: ${expected}, Got: ${actual}`
  );
}
