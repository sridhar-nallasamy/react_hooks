import React, { useState } from 'react'
import HookMouse from './HookMouse'

/*
* Just a another Js to handle the display toggle of HookMouse.
*/
function MouseContainer() {

    const [dispaly, setDispaly] = useState(true)

    return (
        <div>
            <button onClick={()=>setDispaly(!dispaly)}>Toggle dispaly</button>     
            {dispaly && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
