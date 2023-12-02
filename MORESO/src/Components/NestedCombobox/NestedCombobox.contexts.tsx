import React, {createContext, useContext} from 'react';

export type RenderItemFn = (id: string) => JSX.Element;

// context 생성
const NestedComboboxContexts = createContext({
  renderDropdownItem: (id: string) => <></>,
  renderOptionItem: (id: string) => <></>
})

// context를 return하자
export const useNestedComboboxContext = () => useContext(NestedComboboxContexts);

export const NestedComboboxProvider = ({
  renderDropdownItem,
  renderOptionItem,
  children
}: {
  children: React.ReactNode;
  renderDropdownItem: RenderItemFn;
  renderOptionItem: RenderItemFn;
}) => {
  const value = React.useMemo(() => ({
    renderDropdownItem,
    renderOptionItem
  }),
  [renderDropdownItem, renderOptionItem]);

  return (
    <NestedComboboxContexts.Provider value={value}>
      {children}
    </NestedComboboxContexts.Provider>
  )
};