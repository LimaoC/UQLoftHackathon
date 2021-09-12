import React from 'react';
import styled from 'styled-components';

export default function Aboutpage() {
    return (
        <AboutPageStyled>
            <div>
                <img className="logo" src={process.env.PUBLIC_URL + '/assets/logocolour.svg'} alt="UQLoft" />
                <div className="body">
                    <h2>About Us</h2>            
                    <p>UQLoft is a student-led platform that collects, organises, reviews and presents crowd-sourced
                        solutions to past exams for any course offered at the University of Queensland. Students can
                        access The Loft anytime to access past exam papers, enter their own answers into the database,
                        or participate in discussions of tough questions in the Sky Parlour.</p>
                    <h2>Our Logo</h2>
                    <p>As UQLoft is made for the students, we would like the students to think of us as ann extension
                        of their homes. This is shown in the roof-shape, which represents The Loft where all the papers
                        are stored and available for the students to access. The "o" and the "f" are joined to form a 
                        paperclip - embodying our endeavour to present our crowd-sourced data in an orgaised manner.</p>
                    <h2>User Guide</h2>
                    <h3>asd</h3>
                </div>
            </div>
        </AboutPageStyled>
    );
}

const AboutPageStyled = styled.div`
    .logo {
        display: block;
        height: 10rem;
        margin: auto auto;
        margin-top: 4rem;
    }
    .body {
        width: 80%;
        margin: auto;
        h1 {
            text-align: left;
            font-size: 3rem;
            margin-top: 2rem;
        }

        h2 {
            font-size: 3rem;
            font-weight: 800;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }
        p {
            font-size: 1.2rem;
            font-weight: 400;
        }
    }   
`;