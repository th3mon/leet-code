interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function bfs(root: TreeNode | null): void {
  if (root === null) {
    return;
  }

  const queue: TreeNode[] = [root];
  let head = 0;

  while (head < queue.length) {
    const current = queue[head++];

    console.log(current.value);

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }
}
