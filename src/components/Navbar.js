import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';


export default function Navbar() {
    return (
        <NavbarStyled>
            <div className="left">
                <NavLink to="/about">
                    <span>
                        <InfoIcon className="about" />
                        ABOUT
                    </span>
                </NavLink>
            </div>
            <div className="middle">
                <NavLink to="/">
                    <span>
                        <img className="logo" src={process.env.PUBLIC_URL + '/assets/logowhite.svg'} alt="UQLoft" />
                    </span>
                </NavLink>
            </div>
            <div className="right">
                <NavLink to="/login">
                    <span>
                        <PersonIcon className="login" />
                        LOGIN
                    </span>
                </NavLink>
            </div>
        </NavbarStyled>
    );
}


const NavbarStyled = styled.nav`
    // positioning
    position: sticky;
    z-index: 999;
    // display
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 3rem;
    // colour
    background-color: var(--purple);

    div {
        span {
            // display
            display: flex;
            align-items: center;
            // colour
            color: var(--white);
            // text
            font-size: 1.5rem;
            font-weight: 300;

            > * {
                margin-right: 0.5rem;
            }
        }

        .about, .login {
            color: var(--white);
        }

        .logo {
            height: 4.5rem;
            width: auto;
        }
    }
`;