import MovieIcon from '@mui/icons-material/Movie';
import classes from './sequence.module.css';
import DeleteBtn from '../../UI/Buttons/DeleteBtn';
import { TreeBranch } from '../../models/models';
import { Dispatch, SetStateAction } from 'react';

interface ISequenceProps {
  name: string;
  selected: boolean;
  style: React.CSSProperties;
  setShowRemoveModal: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
  treeitem: TreeBranch;
}

const Sequence = ({
  name,
  selected,
  setShowRemoveModal,
  ...props
}: ISequenceProps) => {
  const handleRemoveModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setShowRemoveModal(true);
  };
  return (
    <div className={classes.sequense} {...props}>
      <MovieIcon></MovieIcon>
      <p className={classes.text}>{name}</p>
      {selected && (
        <div className={classes.deleteBtn}>
          <DeleteBtn onClick={handleRemoveModalClick} />
        </div>
      )}
    </div>
  );
};

export default Sequence;
