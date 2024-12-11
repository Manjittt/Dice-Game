import styled from "styled-components";
import { Button } from "./styled/Button1";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="/images/dices.png" alt="Dice" />
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height:100vh;
  margin: 0 auto; 
  text-align: center; 
  display: flex;
  align-items: center;
 .content{
    h1{
        font-size:96px;
        white-space:nowrap;
    }
 }
`;



