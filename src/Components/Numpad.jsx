import styled from 'styled-components'
import React from 'react'
import NumButton from './NumButton'

const NumPadContainer = styled.div`
    width: 50%;
    height: 90%;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
const Button = styled.button`
    width: calc(90%/3);
    height: calc(90%/3);
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: gray;

    border-bottom: 5px gray solid;
    border-right: 5px gray solid;
    cursor:pointer;
    outline:none;
    

    :active{
        background-color: lightgray;
        border-bottom: 5px darkgray solid;
        border-right: 5px darkgray solid;
    }

`

const Numpad = ({ sounds=[], SetDisplayText }) => {
    

    return(
        <NumPadContainer>
            {sounds.map(sound => 
                <NumButton
                    keyCode={sound.keyCode}
                    keyTrigger={sound.keyTrigger}
                    url={sound.url}
                    id={sound.id}
                    SetDisplayText={SetDisplayText}
                />
            )}
        </NumPadContainer>
    )
}

export default Numpad