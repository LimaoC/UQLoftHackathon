import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Homepage({redirect}) {
    const [code, setCode] = useState("");
    const [valid, setValid] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if (valid) {
            console.log(code);
            redirect(code);
            history.push("/courses/");
        } else {
            console.log("Error");
        }
    }, [valid])

    function handleSubmit(e) {
        e.preventDefault();
        const data = { courseCode: code };
        fetch('https://lewisjluck.pythonanywhere.com/is_course_valid', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => setValid(res));
    }

    function handleValue(e) {
        setCode(e.target.value);
    }

    return (
        <HomepageStyled>
            <img className="logo" src={process.env.PUBLIC_URL + '/assets/logocolour.svg'} alt="UQLoft" />
            <h2>Crowd-sourced solutions for all your papers.</h2>
            <form action="" onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <input name="name" type="text" placeholder="Find your course..." onChange={handleValue}/>
                    </label>
                </fieldset>
            </form>
            <div className="wrapper">
                <div className="left">
                    <h3>Popular right now</h3>
                    <div className="grid">
                        <div className="item">
                            CSSE2010
                        </div>
                        <div className="item">
                            ENGG1300
                        </div>
                        <div className="item">
                            SCIE1000
                        </div>
                        <div className="item">
                            MATH1051
                        </div>
                        <div className="item">
                            CSSE1001
                        </div>
                        <div className="item">
                            STAT1301
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h3>Top contributors</h3>
                    <ul className="list">
                        <li>
                            <div className="left">
                                Richard Thomas
                            </div>
                            <div className="right">
                                325 posts
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                Poh
                            </div>
                            <div className="right">
                                323 posts
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                Sam Kault
                            </div>
                            <div className="right">
                                258 posts
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                Chamith the madlad
                            </div>
                            <div className="right">
                                200 posts
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                Sam Kault's alt account
                            </div>
                            <div className="right">
                                193 posts
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </HomepageStyled>
    );
}


const HomepageStyled = styled.header`
    form {
        margin-top: 1.5rem;
        }
        input {
            border: none;
            padding: 0.3rem 0.5rem;
            align-items: center;
            width: 100%;
            background-color: white;
        }

        input:focus, textarea:focus {
            outline:none;
            background-color: white;
            background: white;
        }
        
        input::selection {
            text-shadow: white;
        }

        fieldset {
            margin: auto;
            width: 80%;
            padding: 0.5rem 0rem;
            border-width: 3px;
            border-radius: 6px;
            border-color: black;
        }
    }

    .logo {
        display: block;
        margin: auto auto;
        height: 10rem;
        margin-top: 1rem;
    }

    h2 {
        // display
        padding-top: 2rem;
        // text
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
    }

    h3 {
        // text
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
    }

    .wrapper {
        /* margin-top: 8rem; // temporary */
        display: flex;
        justify-content: center;
        width: 100%;

        > * {
            width: 50%;
            margin: 0 auto;
            padding: 2rem;

            .grid {
                display: grid;
                width: 100%;
                grid-template-columns: auto auto auto;

                .item {
                    background-color: var(--purple2);
                    text-align: center;
                    font-size: 1.5rem;
                    color: var(--white);
                    border-radius: 1rem;
                    padding: 0.5rem 0rem 0.5rem 0rem;
                    margin: 1rem;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            .list {
                list-style-type: none;

                > * {
                    margin: 1rem;
                    display: flex;
                    justify-content: space-between;

                    > * {
                        font-size: 1.1rem;
                    }
                }
            }
        }
    }
`;