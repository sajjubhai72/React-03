import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutLineButton } from "../styled/Button";
import Rules from "./Rules";


const GamePlay = () => {
    const [score, setScore] = useState(0); 
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
      };
  
      const roleDice = () => {
        if(!selectedNumber){
          
          setError("You have not selected any number")
          
          return
        }



          const randomNumber = generateRandomNumber(1, 7);
          setCurrentDice ((prev) => randomNumber);

          if(selectedNumber == randomNumber){
            setScore((prev) => prev + randomNumber);
          }
          else{
            setScore((prev) => prev - 1);
          }


          setSelectedNumber(undefined);

      };

      const resetScore = () => {
        setScore(0);
      }

  return (
    <MainContainer>
        
    <div className="Top-selector">
      <TotalScore score={score}/>
      <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>

    <RoleDice currentDice={currentDice} roleDice={roleDice}/>

    <div className="btns">
      <OutLineButton onClick={resetScore}>Reset</OutLineButton>
      <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
    </div>

      {showRules && <Rules/>}

    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
padding-top: 72px;
.Top-selector{
  margin-top: -30px;
    display: flex;
    justify-content: space-around;
    align-items: end;
}

.btns{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

`;
