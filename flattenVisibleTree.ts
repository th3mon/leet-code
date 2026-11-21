type TreeNode = {
  id: string;
  name: string;
  children?: TreeNode[];
};

type FlatNode = {
  id: string;
  name: string;
  depth: number;
};

function flattenVisibleTree(
  nodes: TreeNode[],
  expandedIds: Set<string>,
  depth = 0
): FlatNode[] {
  const result: FlatNode[] = [];

  for (const node of nodes) {
    result.push({
      id: node.id,
      name: node.name,
      depth,
    });

    if (
      expandedIds.has(node.id) &&
      node.children?.length
    ) {
      result.push(
        ...flattenVisibleTree(
          node.children,
          expandedIds,
          depth + 1
        )
      );
    }
  }

  return result;
}


function flattenVisibleTreeOptimized(
  nodes: TreeNode[],
  expandedIds: Set<string>
): FlatNode[] {
  const result: FlatNode[] = [];

  function visit(
    currentNodes: TreeNode[],
    depth: number
  ): void {
    for (const node of currentNodes) {
      result.push({
        id: node.id,
        name: node.name,
        depth,
      });

      if (
        expandedIds.has(node.id) &&
        node.children?.length
      ) {
        visit(node.children, depth + 1);
      }
    }
  }

  visit(nodes, 0);

  return result;
}

const tree: TreeNode[] = [
  {
    id: "factory",
    name: "Fabryka",
    children: [
      {
        id: "line-a",
        name: "Linia A",
        children: [
          { id: "robot-1", name: "Robot 1" },
          { id: "robot-2", name: "Robot 2" },
        ],
      },
      {
        id: "line-b",
        name: "Linia B",
        children: [
          { id: "pump-1", name: "Pompa 1" },
        ],
      },
    ],
  },
];

const expandedIds = new Set([
  "factory",
  "line-a",
]);

console.log(flattenVisibleTreeOptimized(tree, expandedIds));

const a = {}
console.log(typeof null === "object")