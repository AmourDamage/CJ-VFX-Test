import { useContext, useState } from 'react';
import { TreeItemProps } from '../../models/models';
import { StyledTreeChildren } from '../../UI/StyledWidgets';
import Sequence from '../Sequence';
import Folder from '../Folder';
import { PopupStateContext } from '../../contexts/PopupStateContext';
import { createPortal } from 'react-dom';
import RemoveModal from '../RemoveModal';

const TreeItem = ({
  label,
  children,
  selectedItemId,
  onItemSelected,
  type,
  treeitem,
  id,
}: TreeItemProps) => {
  const { setIsDropDownShown } = useContext(PopupStateContext);
  const [isFolderOpen, setIsFolderOpen] = useState<boolean | null>(null);
  const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);

  const selected = selectedItemId === id;

  const handleFolderClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsFolderOpen(!isFolderOpen);
    onItemSelected(id);

    if (!selected) {
      setIsDropDownShown(false);
    }
  };

  const handleSequenceClick = () => {
    onItemSelected(id);
  };

  return (
    <>
      {type === 'file' ? (
        <Sequence
          style={{ background: `${selected ? '#343434' : ''}` }}
          onClick={handleSequenceClick}
          name={label}
          setShowRemoveModal={setShowRemoveModal}
          selected={selected}
          treeitem={treeitem}
        ></Sequence>
      ) : (
        <Folder
          children={children}
          setShowRemoveModal={setShowRemoveModal}
          selected={selected}
          style={{ background: `${selected ? '#343434' : ''}` }}
          onClick={(e) => handleFolderClick(e)}
          isFolderOpen={isFolderOpen}
          name={label}
          treeitem={treeitem}
        ></Folder>
      )}
      <StyledTreeChildren>{isFolderOpen && children}</StyledTreeChildren>

      {showRemoveModal &&
        createPortal(
          <RemoveModal
            showRemoveModal={showRemoveModal}
            setShowRemoveModal={setShowRemoveModal}
            onClose={() => setShowRemoveModal(false)}
            treeitem={treeitem}
          />,
          document.body
        )}
    </>
  );
};

export default TreeItem;
