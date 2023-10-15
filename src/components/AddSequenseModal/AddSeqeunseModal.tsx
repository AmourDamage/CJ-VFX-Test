import React, {  useContext, useState } from 'react';
import AddModal from '../AddModal';
import { SelectedItemContext } from '../../contexts/SelectedItemContext';
import useTreeItem from '../../hooks/useTreeItem';
import { usePopupClose } from '../../hooks/usePopupClose';
import { PopupStateContext } from '../../contexts/PopupStateContext';
import { IAddModalTreeItemProps} from '../../models/models';



const AddSeqeunseModal = ({
  onClose,
  item,
  entity,
  treeitem,
}: IAddModalTreeItemProps) => {
  const [inputValue, setInputValue] = useState('');
  const { selectedItemId } = useContext(SelectedItemContext);
  const { setShowAddSequenseModal, setIsDropDownShown, showAddSequenseModal } =
    useContext(PopupStateContext);

  const handleSeqeunsePopupClose = () => {
    setShowAddSequenseModal(false);
  };

  usePopupClose(showAddSequenseModal, handleSeqeunsePopupClose);

  const { updateTree } = useTreeItem();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBranch = {
      label: inputValue,
      id: Date.now(),
      branches: [],
      type: 'file',
      path: treeitem.path + '/' + inputValue,
    };

    updateTree(selectedItemId, newBranch, treeitem.path);
    setShowAddSequenseModal(false);
    setIsDropDownShown(false);
  };
  return (
    <AddModal
      onClose={onClose}
      value={inputValue}
      setInputValue={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      onSubmit={handleFormSubmit}
      item={item}
      entity={entity}
      placeholder='Add new Seqeunse'
    />
  );
};

export default AddSeqeunseModal;
