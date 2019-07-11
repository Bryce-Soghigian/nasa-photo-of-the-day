import React,{useState} from 'react';
import styled from 'styled-components';

const Button = styled.button`
height:20px;
width 20%;
background-color:coral;
`

 var Explanation = props => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div >
            
            <Button className ="button" onClick = {toggle}> Toggle explanation</Button>
       {
           open ? props.explanation: undefined
       }
        </div>
    )
}

export default Explanation;