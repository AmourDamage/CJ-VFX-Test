import AddModal, { IAddModalProps } from '../AddModal';
import { useState, useContext } from 'react';
import { SelectedItemContext } from '../../contexts/SelectedItemContext';
import useTreeItem from '../../hooks/useTreeItem';
import { usePopupClose } from '../../hooks/usePopupClose';
import { PopupStateContext } from '../../contexts/PopupStateContext';
import { IAddModalTreeItemProps } from '../../models/models';

const AddFolderModal = ({
  onClose,
  item,
  entity,
  treeitem,
}: IAddModalTreeItemProps) => {
  const [inputValue, setInputValue] = useState('');
  const { selectedItemId } = useContext(SelectedItemContext);
  const { updateTree } = useTreeItem();

  const { setShowAddFolderModal, showAddFolderModal, setIsDropDownShown }: any =
    useContext(PopupStateContext);

  const handleFolderPopupClose = () => {
    setShowAddFolderModal(false);
  };

  usePopupClose(showAddFolderModal, handleFolderPopupClose);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBranch = {
      label: inputValue,
      id: Date.now(),
      branches: [],
      type: 'folder',
      path: treeitem.path + '/' + inputValue,
    };
    updateTree(selectedItemId, newBranch, treeitem.path);
    setShowAddFolderModal(false);
    setIsDropDownShown(false);
  };
  return (
    <AddModal
      onClose={onClose}
      entity={entity}
      value={inputValue}
      setInputValue={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      onSubmit={handleFormSubmit}
      item={item}
      placeholder='Add new Folder'
    />
  );
};

export default AddFolderModal;
