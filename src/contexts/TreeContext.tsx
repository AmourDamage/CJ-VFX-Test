import { createContext } from 'react';
import { Tree } from '../models/models';

export interface TreeContextProps {
  treeList: Tree;
  setTreeList: React.Dispatch<React.SetStateAction<Tree>>
}

export const TreeContext = createContext<TreeContextProps>(
  {} as TreeContextProps
);
