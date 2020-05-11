import React, { useContext } from 'react'
import { UserContext, ChannelContext } from "D:/Survival/Web Technology/JavaScript/React/Practice/hooks/src/App.js";
import ComponentF from './ComponentF';

/*
* useContext method to pass & get the value.
*
* -- creation --
* export const UserContext = React.createContext();
* export const ChannelContext = React.createContext();
*
* -- passing value -- 
* <ChannelContext.Provider value={"VGS"}>
*   <UserContext.Provider value={"Sridhar"}>
*       <ComponentC />
*   </UserContext.Provider>
* </ChannelContext.Provider>
*
* -- to receive & print it, see the function below.
*/

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
            <ComponentF />
        </div>
    )
}

export default ComponentE