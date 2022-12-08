import React, {useState} from 'react';
import styled from 'styled-components';
import Rightnav from './RightNav';

const Styledburger = styled.div`
 width: 2rem;
 height: 2rem;
 position: fixed;
 top: 15px;
 right: 20px;
 border-radius : 10px;
 z-index: 20;
 display:none;
 
 @media (max-width:700px){
    display: flex;
    justify-content : space-around;
    flex-flow: column nowrap; 
 }
 div{
    width: 2rem;
    height: 0.25rem;
    border-radius:10px;
    transform-original: 1px;
    background-color:${({open})=>open?'black':'black'};
    transform-origin:1px;
    transition:all 0.3s linear;

    &:nth-child(1) {
        transform:${({open})=> open? 'rotate(45deg)':'rotate(0deg)'};
    }
    &:nth-child(2) {
        transform:${({open})=> open? 'translateX(100%)':'translateX(0)'};
        opacity:${({open})=> open? 0:1};
    }
    &:nth-child(3) {
        transform:${({open})=> open? 'rotate(-45deg)':'rotate(0deg)'};
    }
        
 }


`;
const Burger = () =>{
    const [open, setOpen] = useState(false);
    return(
        <>
            <Styledburger open={open} onClick ={()=> setOpen(!open)} >
             <div/>
             <div/>
             <div/>
            </Styledburger>
            <Rightnav open={open}/>
        </>
    )
}
export default Burger