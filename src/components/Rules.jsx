import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesConatiner>
        <h2>How to Play Dice Game</h2>
        <div className="text">
            <p>1. Selected any number</p>
            <p>2. Click on dice image</p>
            <p>3. After click on dice if selected number is equal to dice number you will get same point as dice{""} </p>
            <p>4. If you wrong guess then 2 point will be dedcuted</p>
        </div>
      
    </RulesConatiner>
  )
}

export default Rules

const RulesConatiner = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;

 h2{
    font-size: 24px;
 }

.text{
margin-top: 18px;
 }

`;