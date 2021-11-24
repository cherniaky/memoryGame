import react, { useState } from "react";
import CardsRender from "./components/CardsRender";
import './styles/App.css'

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function addScore(card,cards) {
        if (card.checked) {
          addHighScore();
          resetScore();
          resetCards(cards);
        } else {
          let newScore=score+1;
            setScore(newScore);
       }
    }

    function addHighScore() {
        setHighScore(score);
    }

    function resetScore() {
      let newScore = 0;
        setScore(newScore);
    }
    function resetCards(cards) {
      cards.forEach(card => {
        card.checked=false;
      });
    }
    return (
        <div>
            <h1 id="header">Memory Game</h1>
            <div id="scoreTable">
                Score:{score} High Score:{highScore}
            </div>
            <CardsRender
                score={score}
                highScore={highScore}
                addScore={addScore}
            />
            <footer>
                <a target="_blank" href="https://github.com/CherniakYura">My GitHub</a>
               
            </footer>
        </div>
    );
}

export default App;
