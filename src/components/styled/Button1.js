import styled from "styled-components";

 export const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 10px 18px;
   gap: 10px;
   min-width: 220px;
   height: 44px;
   background-color: black;
   color: white;
   border: none;
   border-radius: 5px;
   font-size: 16px;
   cursor: pointer;
   font-size: 16px;

   &:hover {
     background-color: white;
     color: black;
     border: 1px solid black;
   }
 `;
