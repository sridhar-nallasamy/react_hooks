import React, { useState, useEffect } from 'react'

/*
* useEffect's 2nd parameter is '[]' it'll run only once.
* cleanup code - send as return function withing the useEffect function (like remove - timer, counter, eventlistner).
*/

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse event.')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called.')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('component unmount code.')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            <h3>Hooks - X: {x}, Y: {y}</h3>
        </div>
    )
}

export default HookMouse
