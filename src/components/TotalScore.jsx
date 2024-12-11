import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  font-weight:500;
  
  
  


 h1 {
    font-size: 80px;
     line-height: 20px;
  }

p {
    font-size: 24px;
    font-weight: 500px;
    padding-left:20px;
  }
`;

