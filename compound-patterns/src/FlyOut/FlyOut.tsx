/*
 * This component keeps the state, and returns a FlyOutProvider with the value of the toggle to all the children it receives.
**/

import { ReactNode, createContext, useContext, useState } from 'react'

import * as S from './FlyOut.styled'

const FlyOutContext = createContext({
  open: false,
  toggle: (val:boolean) => {val}
});

export function FlyOut(props: {children: ReactNode}) {
  const [open, toggle] = useState(false);

  return (
    <FlyOutContext.Provider value={{open, toggle}}>
      { props.children }
    </FlyOutContext.Provider>
  )
}

function Toggle() {
  const {open, toggle} = useContext(FlyOutContext);

  return (
    <S.Toggle onClick={() => toggle(!open)} />
  )
}

function List({children}: {children: ReactNode }) {
  const {open} = useContext(FlyOutContext);
  return open && <S.List>{children}</S.List>
}

function Item({children}: {children: ReactNode }) {
  return <S.Item>{children}</S.Item>
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;