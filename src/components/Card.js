import react,{useState} from "react";
import "../styles/card.css"

function Card(props) {
    const style={
        border:props.card.borderStyle,
        backgroundColor: props.card.backgroundColor,
        cursor:"pointer",
        
        //height:"50rem",
    }
    function whenClicked() {
        props.addScore(props.card,props.cards)
        props.makeCardChecked(props.card);
    }
    return (
        <div className="Card" onClick={whenClicked} style={style}>
            <img src={props.card.src} ></img>
            <label>{props.title}</label>
        </div>
    );
}

export default Card;