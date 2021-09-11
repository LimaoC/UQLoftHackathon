import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Homepage({redirect}) {
    const [code, setCode] = useState("");
    const [valid, setValid] = useState(false);
    const popularCourses = [
        "csse2010", "engg1300", "scie1000", "math1051", "csse1001", "stat1301"
    ];
    const topContributors = [
        { Name: "Richard Thomas", Posts: 325 },
        { Name: "Sam Kault", Posts: 323 },
        { Name: "Sam Kault's alt account", Posts: 258 },
        { Name: "Chamith", Posts: 137 }
    ];
    let history = useHistory();

    useEffect(() => {
        if (valid) {
            console.log(code);
            redirect(code);
            history.push("/courses/" + code);
        } else {
            console.log("Invalid course");
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
                        {popularCourses.map((course) =>
                            <div className="course">
                                {course.toUpperCase()}
                            </div>
                        )}
                    </div>
                </div>
                <div className="right">
                    <h3>Top contributors</h3>
                    <ul className="list">
                        {topContributors.map((contributor) =>
                            <li>
                                <div className="name">
                                    {contributor.Name}
                                </div>
                                <div className="posts">
                                    {contributor.Posts}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </HomepageStyled>
    );
}


const HomepageStyled = styled.header`
    .logo {
        display: block;
        margin: auto auto;
        height: 10rem;
        margin-top: 1rem;
    }

    form {
        margin-top: 1.5rem;

        input {
            border: none;
            padding: 0.3rem 0.5rem;
            width: 100%;
        }

        input:focus, textarea:focus {
                outline:none;
            }

        fieldset {
            margin: auto;
            width: 40%;
            padding: 0.5rem 0rem;
            border-radius: 0.5rem;
            border-color: var(--black);
        }
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 3%;
        text-align: center;
        font-weight: 500;
    }

    h3 {
        font-size: 1.5rem;
        margin-top: 5%;
        text-align: center;
        font-weight: 500;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        width: 100%;

        > * {
            width: 50%;
            margin: 0 auto;
            padding: 2rem;
        }

        .left {
            .grid {
                display: grid;
                width: 100%;
                grid-template-columns: auto auto auto;

                .course {
                    background-color: var(--purple2);
                    text-align: center;
                    font-size: 1.5rem;
                    color: var(--white);
                    border-radius: 1rem;
                    padding: 0.5rem 0rem 0.5rem 0rem;
                    margin: 1rem;

                    &:hover {
                        cursor: pointer;
                        filter: brightness(120%);
                        transition: filter 0.5s;
                    }
                }
            }
        }

        .right {
            .list {
                list-style-type: none;

                li {
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