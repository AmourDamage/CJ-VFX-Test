import { Dispatch, SetStateAction, createContext } from 'react';

interface IPopupStateContext {
  showAddFolderModal: boolean;
  setShowAddFolderModal: Dispatch<SetStateAction<boolean>>;
  showAddSequenseModal: boolean;
  setShowAddSequenseModal: Dispatch<SetStateAction<boolean>>;
  isDropDownShown: boolean;
  setIsDropDownShown: Dispatch<SetStateAction<boolean>>;
}

export const PopupStateContext = createContext<IPopupStateContext>(
  {} as IPopupStateContext
);
