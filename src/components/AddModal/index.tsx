import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MovieIcon from '@mui/icons-material/Movie';
import classes from './addmodal.module.css';

export interface IAddModalProps {
  onClose: () => void;
  item: string;
  placeholder: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  entity: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddModal = ({
  onClose,
  item,
  placeholder,
  onSubmit,
  value,
  entity,
  setInputValue,
}: IAddModalProps) => {
  return (
    <div className='popup__wrapper'>
      <div
        className='popup__container'
        onClick={(e: any) => {
          e.stopPropagation();
        }}
      >
        <div className='popup__content'>
          <div className={classes.info}>
            <div className={classes.folderWrap}>
              <div className={classes.folder}>
                <FolderOpenTwoToneIcon />
                <p className={classes.name}>{item}</p>
              </div>

              <div className={classes.entity}>
                <KeyboardArrowRightOutlinedIcon />
                <p>Add New {entity}</p>
              </div>
            </div>

            <CloseIcon className={classes.closeBtn} onClick={onClose} />
          </div>

          <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.inputWrap}>
              <MovieIcon className={classes.movieIcon} />
              <input
                value={value}
                onChange={setInputValue}
                placeholder={placeholder}
                className={classes.input}
              ></input>
            </div>

            <button type='submit' className={classes.btn}>
              Add {entity}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
