/*
 * This component keeps the state, and returns a FlyOutProvider with the value of the toggle to all the children it receives.
**/

import React, { createContext, useContext, useState } from 'react'

const FlyOutContext = createContext();

export function FlyOut(props) {
  const [open, toggle] = useState(false);

  return (
    <FlyOutContext.Provider value={{open, toggle}}>
      { props.children}
    </FlyOutContext.Provider>
  )
}

export function Toggle() {
  const {open, toggle} = useContext(FlyOutContext);

  return (
    <div onClick={() => toggle(!open)}>
      <Icon />
    </div>
  )
}

FlyOut.Toggle = Toggle;
