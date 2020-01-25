import React from "react";





function CharacterComp(props) {

    return (

    <div>  
        <p>{props.characterName}</p>
        <p>{props.characterMass}</p>
    </div>

    )
}

export default CharacterComp;