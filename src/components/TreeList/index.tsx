import { Fragment, useContext } from 'react';
import { TreeBranch } from '../../models/models';
import TreeItem from '../TreeItem';
import Box from '@mui/material/Box';
import classes from './directory.module.css';
import { TreeContext } from '../../contexts/TreeContext';
import { SelectedItemContext } from '../../contexts/SelectedItemContext';

const TreeList = () => {
  const { treeList } = useContext(TreeContext);
  const { selectedItemId, setSelectedItemId } = useContext(SelectedItemContext);

  const handleItemSelected = (itemId: number) => {
    setSelectedItemId(itemId);
  };

  const createTree = (branch: TreeBranch) =>
    branch.branches && (
      <TreeItem
        treeitem={branch}
        id={branch.id}
        selectedItemId={selectedItemId}
        key={branch.id}
        onItemSelected={handleItemSelected}
        label={branch.label}
        type={branch.type}
      >
        {branch.branches.map((branch: TreeBranch) => {
          return <Fragment key={branch.id}>{createTree(branch)}</Fragment>;
        })}
      </TreeItem>
    );

  return (
    <Box className={classes.treeList}>
      {treeList.map((branch: TreeBranch, i: number) => (
        <Box key={i}>{createTree(branch)}</Box>
      ))}
    </Box>
  );
};

export default TreeList;
