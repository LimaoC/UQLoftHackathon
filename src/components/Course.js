import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function Course({ courseCode, redirect }) {
    const [info, setInfo] = useState(null);
    const data = { "courseCode": courseCode };
    let history = useHistory();

    useEffect(() => {
        fetch('https://uq-loft.herokuapp.com/get_course_info', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setInfo(response)
            })
        }, []);

    function handlePaperClick(e) {
      e.preventDefault();
      let paper = e.target.text;
      console.log(paper);
      redirect(paper);
      
      history.push("/courses/" + courseCode + "/papers");
    }

    return (
        <CourseStyled>
            {info ? (
                <>
                <div className="grid1">
                    <h1>{courseCode.toUpperCase()}</h1>
                    <h2>{info.course_name}</h2>
                </div>
                <div className="grid2">
                    <h3><a href={info.ecp_link}>View ECP here</a></h3>
                    <h4>{info.course_description}</h4>
                </div>
                <div className="body">
                    <h3>Exams</h3>
                    <div className="grid3">
                        {info.papers.map((paper) =>
                            <a className="paper" onClick={handlePaperClick}>{paper.year} Semester {paper.semester}</a>    
                        )}
                    </div>
                </div>
                </>
            ) : ''}
        </CourseStyled>
    );
}


const CourseStyled = styled.div`
    width: 80%;
    margin: auto;

    .grid1 {
        display: grid;
        margin-top: 3rem;
        grid-template-columns: 30% auto;

        h1 {
            text-align: right;
            font-size: 3rem;
        }

        h2 {
            font-size: 3rem;
            font-weight: 400;
            color: var(--black);
        }
    }

    .grid2 {
        display: grid;
        margin-top: 3rem;
        grid-template-columns: 30% auto;

        h3 {
            text-align: right;
            font-size: 2rem;
            float: right;
            padding: 10px;
            font-weight: 400;

            &:active {
                    transform: translateY(3px);
                }
            
            a {
                padding: 10px;
                background-color: var(--purple2);
                border-radius: 0.3rem;
                color: white;

                &:hover {
                    filter: brightness(120%);
                    transition: 0.5s filter;
                }
            }
        }

        h4 {
            font-size: 1.2rem;
            font-weight: 400;
            text-align: justify;
            width: 80%;
        }
    }

    .body {
        margin: auto;

        h3 {
            font-size: 2rem;
            font-weight: 400;
            margin-top: 4rem;
        }

        .grid3 {
            display: grid;
            margin-top: 1.5rem;
            grid-template-columns: auto auto auto auto;
            width: 100%;
            justify-content: space-between;

            .paper {
                background-color: var(--gold);
                color: white;
                padding: 0.5rem 2rem;
                font-size: 1rem;
                text-align: center;
                border-radius: 0.3rem;
                width: 100%;
                margin: 5px 0 5px 0;

                &:hover {
                    filter: brightness(120%);
                    transition: filter 0.5s;
                    cursor: pointer;
                }

                &:active {
                    transform: translateY(3px);
                }
            }
        }
    }
`;
