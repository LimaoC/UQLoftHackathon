import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function Navbar() {
    return (
        <NavbarStyled>
            <div className="left">
                <NavLink to="/about">
                    <h1>ABOUT</h1>
                </NavLink>
            </div>
            <div className="middle">
                <NavLink to="/">
                    <h1>UQLoft</h1>
                </NavLink>
            </div>
            <div className="right">
                <NavLink to="/login">
                    <h1>LOGIN</h1>
                </NavLink>
            </div>
        </NavbarStyled>
    );
}


const NavbarStyled = styled.nav`
    // positioning
    position: fixed;
    z-index: 999;
    // display
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 3rem;
    // colour
    background-color: var(--purple);

    div {
        h1 {
            // colour
            color: var(--white);
            // text
            font-size: 1.5rem;
            font-weight: 300;
        }
    }
`;