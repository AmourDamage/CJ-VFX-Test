import classes from './dropdown.module.css';
import { PopupStateContext } from '../../contexts/PopupStateContext';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import MovieIcon from '@mui/icons-material/Movie';
import AddFolderModal from '../AddFolderModal';
import AddSeqeunseModal from '../AddSequenseModal/AddSeqeunseModal';
import { TreeBranch } from '../../models/models';

interface IDropDownProps {
  name: string;
  treeitem: TreeBranch;
}

const DropDown = ({ name, treeitem }: IDropDownProps) => {
  const {
    setShowAddFolderModal,
    setShowAddSequenseModal,
    showAddFolderModal,
    showAddSequenseModal,
  } = useContext(PopupStateContext);

  const handleAddFolderClick = () => {
    setShowAddFolderModal(true);
  };

  const handleAddSequenseClick = () => {
    setShowAddSequenseModal(true);
  };

  return (
    <div
      className={classes.dropdown}
      onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
    >
      <div onClick={handleAddFolderClick} className={classes.folder}>
        <FolderOpenTwoToneIcon />
        <p className={classes.paragraph}>Add Folder</p>
      </div>
      <div onClick={handleAddSequenseClick} className={classes.sequense}>
        <MovieIcon />
        <p className={classes.paragraph}>Add Sequense</p>
      </div>

      {showAddFolderModal &&
        createPortal(
          <AddFolderModal
            item={name}
            treeitem={treeitem}
            entity='Folder'
            onClose={() => setShowAddFolderModal(false)}
          />,
          document.body
        )}

      {showAddSequenseModal &&
        createPortal(
          <AddSeqeunseModal
            item={name}
            entity='Seqeunse'
            treeitem={treeitem}
            onClose={() => setShowAddSequenseModal(false)}
          />,
          document.body
        )}
    </div>
  );
};

export default DropDown;
