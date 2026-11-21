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

interface TestCase {
  name: string;
  root: TreeNode | null;
  target: number;
  expected: number[] | null;
}

const testCases: TestCase[] = [
  {
    name: "Empty tree",
    root: null,
    target: 10,
    expected: null,
  },
  {
    name: "Single node - found",
    root: node(10),
    target: 10,
    expected: [10],
  },
  {
    name: "Single node - not found",
    root: node(10),
    target: 99,
    expected: null,
  },
  {
    name: "Target is root",
    root: node(
      10,
      node(5),
      node(15)
    ),
    target: 10,
    expected: [10],
  },
  {
    name: "Target in left subtree",
    root: node(
      10,
      node(5, node(3), node(7)),
      node(15, node(12), node(20))
    ),
    target: 7,
    expected: [10, 5, 7],
  },
  {
    name: "Target in right subtree",
    root: node(
      10,
      node(5, node(3), node(7)),
      node(15, node(12), node(20))
    ),
    target: 20,
    expected: [10, 15, 20],
  },
  {
    name: "Target does not exist",
    root: node(
      10,
      node(5),
      node(15)
    ),
    target: 99,
    expected: null,
  },
  {
    name: "Left-skewed tree",
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
    target: 2,
    expected: [10, 8, 6, 4, 2],
  },
  {
    name: "Right-skewed tree",
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
    target: 4,
    expected: [1, 2, 3, 4],
  },
  {
    name: "Duplicate values - shortest path",
    root: node(
      10,
      node(5,
        node(7,
          node(20)
        )
      ),
      node(20)
    ),
    target: 20,
    expected: [10, 20],
  },
  {
    name: "Zero as target",
    root: node(
      10,
      node(0),
      node(15)
    ),
    target: 0,
    expected: [10, 0],
  },
  {
    name: "Negative values",
    root: node(
      -10,
      node(-5,
        node(-3)
      ),
      node(-15)
    ),
    target: -3,
    expected: [-10, -5, -3],
  },
];

const getPath = (parents: Map<TreeNode, TreeNode | null>, foundNode: TreeNode) => {
  const path: number[] = [];
  let current: TreeNode | null = foundNode;

  while (current !== null) {
    path.push(current.value);
    current = parents.get(current) ?? null;
  }

  return path.reverse();
};

// Your implementation
function findShortestPath(
  root: TreeNode | null,
  target: number
): number[] | null {
  if (root === null) return null;
  
  const parents = new Map<TreeNode, TreeNode | null>();
  const queue: TreeNode[] = [root];
  let head = 0;
  parents.set(root, null);
  
  while (head < queue.length) {
    const current = queue[head++]!;
    
    if (current.value === target) {
      return getPath(parents, current);
    } 
    
    if (current.left) {
      parents.set(current.left, current);
      queue.push(current.left);
    }
    
    if (current.right) {
      parents.set(current.right, current);
      queue.push(current.right);
    }
  }
  
  return null;
}

// Test runner
function arraysEqual(
  actual: number[] | null,
  expected: number[] | null
): boolean {
  if (actual === null || expected === null) {
    return actual === expected;
  }

  return (
    actual.length === expected.length &&
    actual.every(
      (value, index) => value === expected[index]
    )
  );
}

let passed = 0;

for (const { name, root, target, expected } of testCases) {
  const actual = findShortestPath(root, target);
  const success = arraysEqual(actual, expected);

  if (success) passed++;

  console.log(
    `${success ? "PASS" : "FAIL"} | ${name}\n` +
    `Expected: ${JSON.stringify(expected)}\n` +
    `Actual:   ${JSON.stringify(actual)}\n`
  );
}

console.log(
  `Results: ${passed}/${testCases.length} tests passed`
);
