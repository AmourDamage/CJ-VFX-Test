import { Dispatch, SetStateAction, useContext } from 'react';
import TrashButton from '../../images/trashBtn.svg';
import classes from './removeModal.module.css';
import { SelectedItemContext } from '../../contexts/SelectedItemContext';
import useTreeItem from '../../hooks/useTreeItem';
import { usePopupClose } from '../../hooks/usePopupClose';
import { TreeBranch } from '../../models/models';

interface IRemoveModalProps {
  onClose: () => void;
  treeitem: TreeBranch;
  showRemoveModal: boolean;
  setShowRemoveModal: Dispatch<SetStateAction<boolean>>
}

const RemoveModal = ({
  onClose,
  showRemoveModal,
  setShowRemoveModal,
  treeitem,
}: IRemoveModalProps) => {
  const { selectedItemId } = useContext(SelectedItemContext);
  const { deleteTreeElement } = useTreeItem();

  const handleRemovePopupClose = () => {
    setShowRemoveModal(false);
  };

  usePopupClose(showRemoveModal, handleRemovePopupClose);

  const handleClickRemove = () => {
    deleteTreeElement(selectedItemId);
  };

  return (
    <div className='popup__wrapper'>
      <div className='popup__remove-container'>
        <div className={classes.wrap}>
          <img
            className={classes.trashBtn}
            src={TrashButton}
            alt='Trash Button'
          ></img>

          <p className={classes.directory}>PROJECT/{treeitem.path}/</p>
          <p className={classes.choose}>
            Are you sure you want to delete this Sequence?
          </p>

          <div className={classes.btnsWrap}>
            <button
              onClick={onClose}
              type='button'
              className={classes.cancelBtn}
            >
              No, Cancel
            </button>
            <button
              onClick={handleClickRemove}
              type='submit'
              className={classes.successBtn}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
