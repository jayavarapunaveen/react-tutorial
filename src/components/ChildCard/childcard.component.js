
import React from 'react';

function ChildCard(props) {
    let cardStyles={
        padding: "50px",
        width: "100px",
        border: "1px solid red"
    }

  return (
    <div style={
        cardStyles
    }>
        <h2>User Name:{props.title}</h2>
        <h2>Owner Name:{props.ownwerName}</h2>
     Hello  Child
     <button onClick={()=>props.changeOwner(props.title)}>Make me owner</button>
    </div>
  );
}

export default ChildCard;