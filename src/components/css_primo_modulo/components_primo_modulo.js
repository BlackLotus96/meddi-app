import styled from "styled-components";
import {Row, Col, Modal, Collapse, Divider, Button, Result, Radio, Checkbox} from 'antd';

/**
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 150px  150px  150px;
  grid-template-rows: 50px 50px 50px 50px;
`
 **/


export const StyledDivider = styled(Divider)`
  color: black;
.ant-divider-inner-text{
  font-family: OpenDyslexic-Regular;
  font-size: 30px;
}
.ant-divider-horizontal.ant-divider-with-text-left&::before, 
.ant-divider-horizontal.ant-divider-with-text-left&::after,
.ant-divider-horizontal.ant-divider-with-text-center&::before, 
.ant-divider-horizontal.ant-divider-with-text-center&::after{
    
    border-width: 2px;
    border-color: ${({color}) => {
      if (color) return color
          
      else return "black"
    
}};
    

    
    } 

`
export const StyledResult = styled(Result)`

`
export const StyledModal = styled(Modal)`
  margin-top: ${({answer}) => {
      if (answer === "true") return "400px"
          
      else return ""
    
}};
  .ant-modal-footer{
      text-align: left;
      background-color: burlywood;
      border-radius: 30px;
  }
 
  .ant-modal-header{
    border-radius: 30px;
    background-color: lightgoldenrodyellow;
  }
  .ant-modal-content{
      border-radius: 30px;
      background-color: lightgoldenrodyellow;
      font-family: OpenDyslexic-Regular;
      color: black
      
  }
`
export const ContainerGrid = styled.div`
  display: flex;
  justify-content: space-between;
`


export const StyledCollapse = styled(Collapse)`
  .ant-collapse-header{
    color: red;
  }

`
export const StyledPanel = styled(Collapse.Panel)
` 
    .ant-collapse-item{
    color: red;
    }
    .ant-collapse-content-box{
    color: red;
  }
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-size: larger;
margin-bottom: 50px;
`

export const DivRow = styled.div`
color: ${({color, isColored}) => {
    if (isColored)
        return color
    
}};

`
export const RigaTabella = styled(Row)`

    font-family: OpenDyslexic-Regular;
    
    background: ${({header, caso, parola, traduzione, showErrorZero}) => {
            if (showErrorZero) return "orangered"
            else if (header) return "lightgray"
            else if(caso) return "lightgray"    
            else if (parola) return "navajowhite"
            else if (traduzione) return "lightgoldenrodyellow"
        else return ""
    }};
 
  margin-bottom: ${({header, blank, preposizione}) => {
      if (blank) return "40px"
          
      else return "40px"
    
}};
  height: ${({blank, header, complemento}) => {
      if (header || complemento || blank) return "50px"
      else return "30px"
    
}};
  right: ${({seconda}) => {
      if (seconda) return "60px"
        else return ""
}};
  left: ${({terza}) => {
      if (terza) return "60px"
        else return ""
}};
  font-weight: ${({header}) => {
      if(header) return "bold"
        else return "bolder"
}};
color: ${({blu, verde, rosso, sostantivo, declinazione, aggettivo}) => {               
            if (rosso || sostantivo) return "red"
            else if(blu || aggettivo) return "blue"
            else if(verde || declinazione) return "green"    
            else return "black"
          }};
display: flex;
justify-content: center;
align-items: center;
width: 100%;
border-radius: 10px;
font-size: larger;
`

export const CheckboxModal = styled(Checkbox)`
border-color: black;
.ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: black;
}

.ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({color}) => {               
            return color
          }};
  border: 1px solid black
    
}
`
export const ColonnaTabella = styled(Col)`
   opacity: ${({hide}) => {               
            if (hide==="true") return 0   
            else return 1
          }};
   color: ${({rosso, blu, verde}) => {               
            if (rosso) return "red"
            else if(blu) return "blue"
            else if(verde) return "green"    
            else return "black"
          }};
`
  


export const ButtonIniziaEsercizio = styled(Button)`
    border-radius: 10px;
    margin-top: 50px;
    border-color: green;
    font-family: OpenDyslexic-Regular;
    margin-bottom: 50px;
    color: black;
    &:hover{
      background-color: green;
      border-color: white;
      color: white;
    }
    &:focus{
      border-color: green;
      color: black;
    }
    `;

export const Domanda = styled.div`
    font-family: OpenDyslexic-Regular;
    font-size: 40px;
    color: black;
    display: flex;
    justify-content: center;
    width: auto;
    flex-direction: column;
    align-items: center;
    
    margin-bottom: ${({showErroreTre}) => {
        if(showErroreTre) return "100px"
}};
   `;

export const ParolaStyle = styled.h5`
    font-size: 50px;
    color: black;  
`;

export const StyledContainerCheckboxQuestion = styled.div`
      display: ${({showQuestion}) => {
        if(showQuestion===false) return "none"
}};
`;



export const TextOption = styled.span`
   position: relative;
   z-index: 2;
   color: white;
   font-family: OpenDyslexic-Regular;
   color: ${({color}) => {
        return color
        
}};
   
`;
export const Opzione = styled.button`
    overflow: hidden;
    position:relative;
    font-size: x-large;
    background-color: salmon;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    padding: 15px 30px;
    transition: 1s linear all;
    text-align: center;
    width: 230px;
    height: 100px;
 &:hover, &:focus, &:active{
  
    &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0,0,0, 0.3);
  }
}
    `;

export const ContenitoreOpzioni = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    width: 510px;
    height: 100%;
    margin: 0 auto;
    `;

export const BoxQuiz = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SottoFraseTerzo = styled.div`
   width: 800px; 
   display: flex;
   text-align: center;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 30px;
   margin-top: 30px;
   
`;
export const ParolaTerzoErrore = styled.h4`;
   color: ${({value}) => {               
            if (value==="sta") return "red"
            else return "black"
          }};
   
`;

export const RadioButtonSwap = styled(Radio.Button)`
&:hover, &:focus, &:active{
  
    &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0,0,0, 0.3);
  }
`



