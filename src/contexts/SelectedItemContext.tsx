import { createContext } from 'react';

export interface ITreeContext {
  selectedItemId: number;
  setSelectedItemId: (itemId: number) => void;
}

export const SelectedItemContext = createContext<ITreeContext>(
  {} as ITreeContext
);
