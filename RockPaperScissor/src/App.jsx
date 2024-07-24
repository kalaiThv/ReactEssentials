
import { useState } from 'react';
import './index.css';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
// import TabButton from './components/TabButton';

const choices = ['Rock', 'Paper', 'Scissors'];

function App(){

  //------------STATE-------------------

  const  [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [result, setResult] = useState("");

  // -----------STATE----------------

  function handleClick(onSelect){
    setUserChoice(onSelect);
     const randomChoice = choices[Math.floor(Math.random() * choices.length)];
     setComputerChoice(randomChoice);
     winner(onSelect, randomChoice);
   
 };
 
 function winner(UserIp,ComputerChoice){
 console.log(ComputerChoice);

 
  // if(UserIp === ComputerChoice){
  //   setResult('Tie');
  // }
  // else if(((UserIp === 'Rock' && ComputerChoice === 'Scissors') ||
  // (UserIp === 'Paper' && ComputerChoice === 'Rock') ||
  // (UserIp === 'Scissors' && ComputerChoice === 'Paper')))
  // {
  //   setResult('You win!');
  // }

  // else
  // {
  //   setResult('You lose!');
  // }


  // -------------CONDITIONAL CONTENT-------------------

   {UserIp===ComputerChoice && setResult('Tie 🙅🏻‍♀️')};
   {((UserIp === 'Rock' && ComputerChoice === 'Scissors') ||
     (UserIp === 'Paper' && ComputerChoice === 'Rock') ||
     (UserIp === 'Scissors' && ComputerChoice === 'Paper')) && setResult('You win!🏅')};
   
   {((UserIp === 'Scissors' && ComputerChoice === 'Rock') ||
     (UserIp === 'Rock' && ComputerChoice === 'Paper') ||
     (UserIp === 'Paper' && ComputerChoice === 'Scissors')) && setResult('You lose!👎🏻')}

        // -------------CONDITIONAL CONTENT-------------------
 
      
 
 };

 

  return (
    <div className="game">
      <Header />
      <div className="choices">
        <main>
        <section id="examples">
          <menu>
          {/* ----------------MAP------------ */}

            {choices.map((c)=><TabButton onSelect={()=>handleClick(c)} choice={c}/>)}

            {/* ----------------MAP------------ */}  
             {/* <TabButton onSelect={"Papper"}/>
             <TabButton onSelect={"Scissor"}/> */}
             
          </menu>
        </section>
        </main>
      </div>

     
      <div id="tab-content">
        <h3> <code>YourChoice: {userChoice}</code></h3>
        <h3><code>ComputerChoice: {computerChoice}</code></h3>
        <h3><code>Result: {result}</code></h3>
      </div>
       
    </div>
  );
};

export default App;
