import React,{useState} from 'react';
import { createContext } from 'react';


export const HeaderAdminUpdateContext = createContext()


function HeaderHideContext({children}) {

    const [updateHeader,setUpdateHeader]=useState(false)
  return (
    <div>
        <HeaderAdminUpdateContext.Provider  value={{updateHeader,setUpdateHeader}}>
            {children}
        </HeaderAdminUpdateContext.Provider>
    </div>
  )
}

export default HeaderHideContext