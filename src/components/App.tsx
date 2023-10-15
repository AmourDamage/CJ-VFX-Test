import Main from '../pages/Main';
import { TreeContext } from '../contexts/TreeContext';
import { TreeData } from '../TreeData/TreeData';
import { useState } from 'react';
import { SelectedItemContext } from '../contexts/SelectedItemContext';
import { PopupStateContext } from '../contexts/PopupStateContext';

const App = () => {
  const [treeList, setTreeList] = useState(TreeData);
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  const [showAddSequenseModal, setShowAddSequenseModal] = useState(false);
  const [isDropDownShown, setIsDropDownShown] = useState(false);

  return (
    <TreeContext.Provider value={{ treeList, setTreeList }}>
      <PopupStateContext.Provider
        value={{
          showAddFolderModal,
          setShowAddFolderModal,
          showAddSequenseModal,
          setShowAddSequenseModal,
          isDropDownShown,
          setIsDropDownShown,
        }}
      >
        <SelectedItemContext.Provider
          value={{ selectedItemId, setSelectedItemId }}
        >
          <Main />
        </SelectedItemContext.Provider>
      </PopupStateContext.Provider>
    </TreeContext.Provider>
  );
};

export default App;
