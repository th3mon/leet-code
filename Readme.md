# Coding Interview Practice

A collection of TypeScript algorithm exercises and a React list-virtualization example for interview preparation. Includes Codility problems, binary-tree traversal, and tree-to-list transformations.

## Exercises

| File | Topic |
| --- | --- |
| [`BinaryGap.ts`](./BinaryGap.ts) | Find the longest sequence of zeros surrounded by ones in a binary representation. |
| [`CyclicRotation.ts`](./CyclicRotation.ts) | Rotate an array to the right by K positions. |
| [`OddOccurrencesInArray.ts`](./OddOccurrencesInArray.ts) | Find the value occurring an odd number of times using XOR. |
| [`bfs.ts`](./bfs.ts) | Breadth-first traversal of a binary tree. |
| [`bfs-search-target-value.ts`](./bfs-search-target-value.ts) | Find a shortest path to a target value using BFS. |
| [`binary-tree-depth.ts`](./binary-tree-depth.ts) | Calculate maximum tree depth recursively and iteratively. |
| [`flattenVisibleTree.ts`](./flattenVisibleTree.ts) | Flatten expanded tree nodes into a list with depth information. |
| [`wirtualizacja-listy.tsx`](./wirtualizacja-listy.tsx) | React virtualized list with fixed-height rows and overscan. |

## Running the exercises

Install [Node.js](https://nodejs.org/) with npm, then run an individual TypeScript file using `tsx`:

```sh
npx tsx BinaryGap.ts
npx tsx CyclicRotation.ts
npx tsx OddOccurrencesInArray.ts
npx tsx bfs-search-target-value.ts
npx tsx binary-tree-depth.ts
npx tsx flattenVisibleTree.ts
```

`npx` may prompt to download `tsx` on first use. The Codility exercises, BFS target search, and tree-depth exercise include inline test cases and console-based runners. Other files are examples rather than standalone test suites.

The files are independent exercises, not a single application. There is no shared package configuration or test command; run each file separately.

## React example

`wirtualizacja-listy.tsx` exports `VirtualDeviceList`. Use it inside an existing React + TypeScript application with React installed and JSX support configured; it is not a standalone command-line script.
