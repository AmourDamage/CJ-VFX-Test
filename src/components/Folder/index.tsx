import { Dispatch, SetStateAction, useContext } from 'react';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import classes from './folder.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddBtn from '../../UI/Buttons/AddBtn';
import DeleteBtn from '../../UI/Buttons/DeleteBtn';
import DropDown from '../DropDown';
import { PopupStateContext } from '../../contexts/PopupStateContext';
import { TreeBranch } from '../../models/models';

interface IFolderProps {
  name: string;
  isFolderOpen: boolean | null;
  children: ReadonlyArray<JSX.Element>;
  selected: boolean;
  treeitem: TreeBranch;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  setShowRemoveModal?: Dispatch<SetStateAction<boolean>>;
  style: React.CSSProperties;
}

const Folder = ({
  name,
  isFolderOpen,
  children,
  selected,
  setShowRemoveModal,
  treeitem,
  ...props
}: IFolderProps) => {
  const { isDropDownShown, setIsDropDownShown } = useContext(PopupStateContext);

  const handleDropDownClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsDropDownShown((current: boolean) => !current);
  };

  const handleRemoveModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setShowRemoveModal!((current: boolean) => !current);
  };

  return (
    <div className={classes.folder} {...props}>
      {children?.length > 0 && (
        <div>
          {isFolderOpen ? (
            <ExpandMoreIcon />
          ) : (
            <KeyboardArrowRightOutlinedIcon />
          )}
        </div>
      )}
      <FolderOpenTwoToneIcon></FolderOpenTwoToneIcon>
      <p className={classes.text}>{name}</p>

      {selected && (
        <div className={classes.btns}>
          <AddBtn onClick={handleDropDownClick} />
          <DeleteBtn onClick={handleRemoveModalClick} />
        </div>
      )}
      {isDropDownShown && selected && (
        <DropDown treeitem={treeitem} name={name} />
      )}
    </div>
  );
};

export default Folder;
