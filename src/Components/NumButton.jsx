import React, { useState } from 'react'
import styled from 'styled-components'


const Button = styled.button`
    width: calc(90%/3);
    height: calc(90%/3);
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: ${prop => prop.active ? "lightgray" : "gray" };

    border-bottom: 5px ${prop => prop.active ? "darkgray" : "gray" } solid;
    border-right: 5px ${prop => prop.active ? "darkgray" : "gray" } solid;
    cursor:pointer;
    outline:none;
    
    

    :active{
        background-color: lightgray;
        border-bottom: 5px darkgray solid;
        border-right: 5px darkgray solid;
    }

`

const NumButton = ({ keyCode, keyTrigger, url, id, SetDisplayText }) => {
    const [ isActive, setIsActive ] = useState(false)
    const playSound = () => {
        const sound = document.getElementById(keyTrigger)
        sound.currentTime = 0
        sound.play()
        SetDisplayText(id)
    }
    const handleKeyPress = e => {
        if(e.keyCode === keyCode){
            document.getElementById(keyCode).click()
            setIsActive(true)
            setTimeout(() => {
                setIsActive(false)
            }, 100);
        }
    }
        /* e.keyCode === keyCode ?  playSound() : null */
 

    document.addEventListener('keydown', handleKeyPress)

    return(
        <Button
            active={isActive}
            id={keyCode}
            onClick={e => playSound()}
        >
            <audio
                id={keyTrigger}
                src={url}
            />
            {keyTrigger}
        </Button>
    )
}
export default NumButton