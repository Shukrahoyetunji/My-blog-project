import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
   @media (max-width:700px){
    transform:${({open})=> open? 'translateX(0)':'translateX(100%)'};
    transition:transform 0.3s ease-in-out;
   }
`;

const Rightnav = ({open}) =>{
    return(
    <div className="links">
        <Ul open={open}>
            <li><a href='/'>Courses</a></li>
            <li><a href='/'>Career</a></li>
            <li><a href='/'>Organization</a></li>
            <li><a href='/' style={{
                color: "rgb(10,109,216)"
             }}>Blog</a>
            </li>
            <li><a href='/'>Community</a></li>
            <i className="fa-solid fa-face-grin-wide" style={{
                    color:"rgb(234,150,0)",
                    // fontSize: "40px",
                    marginRight: "140px"
                }}>

            </i> 
        </Ul>
    </div>
    )
}

export default Rightnav