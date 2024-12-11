import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({error,selectedNumber, setSelectedNumber}) => {
  
  const arrNumber = [1, 2, 3, 4, 5, 6];
  

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display:flex;
flex-direction:column;
align-items:end;
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-weight:700px;
    font-size: 24px;
    
    
  }
  .error{
  color:red;
}
`;



const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  &:hover {
    border-color: gray; /* Optional: Add hover effect for better UI */
  }
`;

