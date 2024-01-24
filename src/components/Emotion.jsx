import React from 'react'
import styled from '@emotion/styled'

function Emotion() {
  
const MyButton = styled.button`
padding: 10px;
background-color: lightblue;
font-size: 24px;
border-radius: 4px;
color: black;
font-weight: bold;
&:hover {
  color: white;
}
`
const MyParagraph = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: green
`;

  return (
    <div>
        <MyParagraph>Text inside a pragraph</MyParagraph>
        <MyButton>Button</MyButton>
    </div>
  )
}

export default Emotion