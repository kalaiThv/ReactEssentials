import { useState } from "react";
import { riddlesData,Quote } from "./data";
import Header from "./components/Header.jsx";
import "./index.css";


export default function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState("No");
    const [gameStarted, setGameStarted] = useState(false);

    function handleClick(choice) {
        if (choice === riddlesData[currentQuestion].correctAnswer) {
            setScore(score + 10);
        }
        if (currentQuestion === riddlesData.length - 1) {
            setGameOver("Yes");
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function handleNext() {
        if (currentQuestion < riddlesData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setGameOver("Yes");
        }
    }

    function handlePrevious() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function getQuote(score){
      switch(score)
      {
        case 0:return 0;
        case 10:return 1;
        case 20:return 2;
        case 30:return 3;
        case 40:return 4;
        case 50:return 5;
        case 60:return 6;
        case 70:return 7;
        case 80:return 8;
        case 90:return 9;
        case 100:return 10;
        

      }
       
    }

    function handleStart() {
        setGameStarted(true);
    }

    function handleRetry(){
        setCurrentQuestion(0);
        setScore(0);
        setGameOver("No");
        setGameStarted(false);


    }

    return (
        <>
            <div id={gameStarted ? "game-screen" : "start-screen"}>
                {!gameStarted ? (
                    <Header onStart={handleStart} gameStarted={gameStarted} />
                ) : (
                    <>
                      
                        <section id="question-container">
                            
                                <div id="question-box">
                                    {gameOver === "No" &&<> <h1>{riddlesData[currentQuestion].question}</h1><br /><br /></>}
                                    {gameOver === "Yes" && (
                                        <div id="score-container">
                                            <h1>Your Score: {score}</h1>
                                            <div className="quote-container">
                                                {/* {[Quote(getStars(score))].map((_, i) => (
                                                    <img key={i} src={starImages[i]} alt="star" className="star" />
                                                ))} */}
                                                <br /><br/><h1 id="quote">{Quote[getQuote(score)]}</h1><br /><br/>
                                            </div>

                                            <button id="retry-btn" onClick={handleRetry}>Retry</button>
                                            
                                        </div>
                                    )}
                                
                                <div id="option-container">
                                    {gameOver === "No" && 
                                        riddlesData[currentQuestion].options.map((choice) => (
                                            <button
                                                onClick={() => handleClick(choice)}
                                                className="option-button"
                                            >
                                                {choice}
                                            </button>
                                        ))
                                    }
                                </div>
                                {gameOver === "No" && (
                                    <>
                                    <button className="previous-button" onClick={handlePrevious}  hidden={currentQuestion === 0}>
                                            Previous
                                   </button>
                                        <button className="next-button" onClick={handleNext}>
                                        Next
                                    </button>
                                    </>
                                    
                                )}
                            </div>
                        </section>
                    </>
                )}
            </div>
        </>
    );
}