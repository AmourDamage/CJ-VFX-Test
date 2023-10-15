import { useContext, useState } from 'react';
import { TreeContext } from '../contexts/TreeContext';
import { Tree, TreeBranch } from '../models/models';

const useTreeItem = () => {
  const { setTreeList } = useContext(TreeContext);

  const updateTreeList = (
    tree: Tree,
    selectedItemId: number,
    newBranch: TreeBranch,
    nodePath: string
  ): Tree => {
    return tree.map((node: TreeBranch) => {
      const path = nodePath ? `${nodePath}/${node.label}` : node.label;

      if (node.id === selectedItemId) {
        if (node.type === 'folder') {
          return {
            ...node,
            branches: [...node.branches, newBranch],
          };
        }
      }
      if (node.branches && node.branches.length > 0) {
        return {
          ...node,
          branches: updateTreeList(
            node.branches,
            selectedItemId,
            newBranch,
            path
          ),
        };
      }
      return node;
    });
  };

  const updateTree = (
    selectedItemId: number,
    newBranch: TreeBranch,
    path: string
  ) => {
    setTreeList((prevTreeList: Tree) => {
      return updateTreeList(prevTreeList, selectedItemId, newBranch, path);
    });
  };

  const deleteElement = (tree: Tree, idToDelete: number): Tree => {
    return tree.reduce((acc: Tree, node: TreeBranch) => {
      if (node.id === idToDelete) {
        return acc;
      }
      if (node.branches && node.branches.length > 0) {
        return [
          ...acc,
          { ...node, branches: deleteElement(node.branches, idToDelete) },
        ];
      }
      return [...acc, node];
    }, []);
  };

  const deleteTreeElement = (idToDelete: number) => {
    setTreeList((prevTreeList: Tree) => {
      return deleteElement(prevTreeList, idToDelete);
    });
  };

  return { updateTree, deleteTreeElement };
};

export default useTreeItem;
