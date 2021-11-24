import react, { useState, useEffect } from "react";

import boba from "../images/boba.jpg";
import ramen from "../images/ramen.jpg";
import curry from "../images/curry.jpg";
import hotpot from "../images/hotpot.jpg";
import matcha from "../images/matcha.jpg";
import sushi from "../images/sushi.png";
import dimsum from "../images/dimsum.jpg";
import chickenRice from "../images/chicken-rice.png";
import crawfish from "../images/crawfish.png";
import steak from "../images/steak.png";
import Card from "./Card";
import '../styles/cardRender.css';

function CardsRender(props) {
    const { score, highScore,addScore } = props;

    const images = [
        {
            src: boba,
            title: "Boba",
            backgroundColor: "rgb(54 145 154)",
            borderStyle: "1px solid rgb(54 145 154)",
            checked: false,
        },
        {
            src: steak,
            title: "Steak",
            backgroundColor: "rgb(119 4 4)",
            borderStyle: "1px solid rgb(119 4 4)",
            checked: false,
        },
        {
            src: dimsum,
            title: "Dimsum",
            backgroundColor: "rgb(111 31 0)",
            borderStyle: "1px solid rgb(111 31 0)",
            checked: false,
        },
        {
            src: ramen,
            title: "Ramen",
            backgroundColor: "rgb(255 141 0)",
            borderStyle: "1px solid rgb(255 141 0)",
            checked: false,
        },
        {
            src: crawfish,
            title: "Crawfish",
            backgroundColor: "rgb(52 52 60)",
            borderStyle: "1px solid rgb(52 52 60)",
            checked: false,
        },
        {
            src: sushi,
            title: "Sushi",
            backgroundColor: "rgb(245 194 80)",
            borderStyle: "1px solid rgb(245 194 80)",
            checked: false,
        },
        {
            src: chickenRice,
            title: "Chicken Rice",
            backgroundColor: "rgb(136 96 6)",
            borderStyle: "1px solid rgb(136 96 6)",
            checked: false,
        },
        {
            src: matcha,
            title: "Matcha Drink",
            backgroundColor: "rgb(255 148 148)",
            borderStyle: "1px solid rgb(255 148 148)",
            checked: false,
        },
        {
            src: curry,
            title: "Curry",
            backgroundColor: "rgb(189 166 82)",
            borderStyle: "1px solid rgb(189 166 82)",
            checked: false,
        },
        {
            src: hotpot,
            title: "Hotpot",
            backgroundColor: "rgb(226 143 58)",
            borderStyle: "1px solid rgb(226 143 58)",
            checked: false,
        },
    ];

    const [cards, setNewCards] = useState(images);

    // const shuffle = (newCards) => {
    //     for (let i = newCards.length - 1; i > 0; i--) {
    //         let randomIdx = Math.floor(Math.random() * i);
    //         [newCards[randomIdx], newCards[i]] = [
    //             newCards[i],
    //             newCards[randomIdx],
    //         ];
    //     }
    // };

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    useEffect(() => {
        const newCards = [...cards];
        shuffleArray(newCards);
        setNewCards(newCards);
    }, [score, highScore]);

    function makeCardChecked(card) {
        card.checked="true";
    }
    
    return (
        <div className="cardsContainer">
            {cards.map((card) => (
                <Card card={card} cards={cards} title={card.title} addScore={addScore} makeCardChecked={makeCardChecked} />
            ))}
        </div>
    );
}

export default CardsRender;
