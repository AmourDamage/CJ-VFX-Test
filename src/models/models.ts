export interface TreeBranch {
  id: number;
  label: string;
  branches: Tree;
  type: string;
  path: string;
}

export type Tree = TreeBranch[];

export interface TreeItemProps {
  id: number;
  label: string;
  children: ReadonlyArray<JSX.Element>;
  type: string;
  selectedItemId: number;
  onItemSelected: (itemId: number) => void;
  treeitem: TreeBranch;
}

export interface IAddModalTreeItemProps {
  onClose: () => void;
  item: string;
  entity: string;
  treeitem: TreeBranch;
}
