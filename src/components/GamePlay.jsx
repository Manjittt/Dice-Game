import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button } from "./styled/Button1";
import Rules from "./Rules";


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error ,setError] = useState("");
  const [showRules , setShowRules] = useState (false);

  
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  
  const rollDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev)=>randomNumber);

   

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore=() => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector 
        error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber} 
        />
      </div>
      <RoleDice 
        currentDice={currentDice}  rollDice={rollDice} />
        <div className="btns">
          <Button onClick={resetScore}>Reset</Button>
          <Button onClick={() => setShowRules(prev => !prev)}>
        {showRules ? "Hide" : "Show" } Rules</Button>
        </div>
     {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    
    display: flex;
    justify-content: space-between;
    align-items: flex-end; /* Corrected alignment property for better readability */
  }
  .btns{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:10px;

  }
`;

