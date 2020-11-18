import styled from "styled-components";
import {Tag, Button, Card} from 'antd';
import {useSelector} from "react-redux";
import {selectIsTranslated} from "../../features/sentenceSlice";

export const DivDroppable = styled.div`
    padding: 10px;
    min-width: 250px;
    border-radius: 10px;
    
    min-height: ${({translatePlace}) => {
        if (translatePlace === false)
            return 'auto'
        else
            return '60px'
}};
  background: ${(props) => {
      const isTranslated = useSelector(selectIsTranslated)
        if(props.translatePlace && isTranslated)
            return 'green'
        else if(props.translatePlace && props.snapshot.isDraggingOver) 
            return 'blue'
        else if (props.translatePlace && isTranslated===false)
             return 'darkred'
        else 
            return 'grey'
        
}};
    
`
export const ButtonIndietro = styled(Button)`
    border-radius: 10px;
    margin-right: 400px;
    border-color: black;
    margin-top: 100px;
    color: black;
    &:focus{
        border-color: black;
        color: black;
    }
    &:hover{
      background-color: black;
      border-color: white;
      color: white;
    }
    `;
export const ButtonPrecSucc = styled(Button)`
    border-radius: 10px;
    margin-top: 50px;
    border-color: green;
    margin-bottom: 50px;
    color: black;
    &:focus{
        border-color: green;
        color: black;
    }
    &:hover{
      background-color: green;
      border-color: white;
      color: white;
    }
    `;
export const ParolaTag = styled.div`
  justify-content: center;
`
export const ContainerTag = styled.div`
  display: inline-flex;
  flex-direction: column;
`
export const SentenceDragAndDrop = styled.div`
  background-color: lightgoldenrodyellow;
  color: black;
  border-radius: 30px;
  max-width: 800px;
  padding: 20px 20px;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  flex-wrap: wrap;
`
export const StyledTextButton = styled.span` 
color: ${({color}) => {
         return "white"
}};
position: relative;
z-index: 2;
font-family: OpenDyslexic-Regular;
`

export const ContainerSentenceClickable = styled.div` 
width: 100%;
display: flex;
text-align: center;
justify-content: space-around;

`
export const ContainerDroppable = styled.div` 
margin-top: 100px;
display: flex;

`

export const StyledCard = styled(Card)`
.ant-card-body {
  display: flex;
  flex-direction: column;
  
}
`
export const StyledButton = styled(Button)` 
position:relative;
overflow: hidden;
margin-bottom: 20px;
margin-left: ${({rightPart}) => {
        if(rightPart === true) return "100px"
}};
display: ${({visible}) => {
        if(visible === false) return "none"
}};
background: ${({color}) => {
        if (color === "sintattica") return "red"
        if (color === "POS") return "blue"
        if (color === "morfologica") return "green" 
}};

&:hover, &:focus, &:active{
  
background: ${({color}) => {
        if (color === "sintattica") return "red"
        if (color === "POS") return "blue"
        if (color === "morfologica") return "green" 
}};

&:after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0,0,0, 0.4);
}
}
`


export const StyledTag = styled(Tag.CheckableTag)`     
  size: 10px;
  color: white;
  background-color: ${({color}) => {
        return color
}};
  display: ${({visible}) => {
        if(visible === false) return "none"
}};
`
export const StyledPrimoEsercizio = styled.div `
  font-family: OpenDyslexic-Regular;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledFrase = styled.div `
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding-bottom: 50px;
`

export const StyledContainerFrase = styled.div `
  font-family: OpenDyslexic-Regular;
  background-color: lightgoldenrodyellow;
  color: black;
  border-radius: 30px;
  min-width: 800px;
  max-width: 1200px;
  padding: 40px 40px;
  display: flex;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
`

