import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function Course({ courseCode, redirect}) {
    const [info, setInfo] = useState(null);
    const data = { "courseCode": courseCode };
    let history = useHistory();
    useEffect(() => {
        fetch('https://lewisjluck.pythonanywhere.com/get_course_info', {
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
      
      history.push("/courses/paper");
    }

    return (
        <CourseStyled>
            {/* {info !== undefined && info.length > 0 && (<><h1>{courseCode.toUpperCase()}</h1>
                {info.course_name}
                {info.papers.map((paper) =>
                    <div>{paper.year} - {paper.sem}</div>
            )}</>)} */}
            {info ? (
                <>
                <div className="grid1">
                    <div>
                        <h1>{courseCode}</h1>
                    </div>
                    <div>
                        <h2>{info.course_name}</h2>
                    </div>
                </div>
                <div className="body">
                    <div>
                        <h3>Course Summary: </h3>
                        <h4>{info.course_description}</h4>
                    </div>
                    <a className="ecp" href={info.ecp_link}>View ECP here</a>
                    <div>
                        <h3>Exams: </h3>
                        <div className="grid2">
                            {info.papers.map((paper) =>
                            <a className="paper" href="courses/paper" onClick={handlePaperClick}>{paper.year} - {paper.semester}</a>)}
                        </div>
                    </div>
                    
                </div>

                </>
            ) : ''}


        </CourseStyled>
    );
}


const CourseStyled = styled.div`
    .grid1 {
        display: grid;
        margin-top: 3rem;
        grid-template-columns: 30% auto;
    }
    h1 {     
        text-align: right;
        font-size: 3rem;
        text-transform: uppercase;
    }
    h2 {
        font-size: 3rem;
        font-weight: 300;
        color: var(--black);
    }
    h3 {
        font-size: 2rem;
        font-weight: 800;
        margin-top: 3rem;
    }
    h4 {
        font-size: 1.2rem;
        font-weight: 400;
        margin-top: 2rem;
        margin-bottom: 3rem;
    }
    .body {
        clear: both;
        width: 70%;
        margin: auto;
        padding-top: 2rem;
    }
    a.ecp {
        background-color: var(--red);
        color: white;
        padding: 1rem 1rem;
        text-align: center;
        border-radius: 0.7rem;
        margin: 0px 0px 0px 40%;
    }
    a.paper {
        background-color: var(--gold);
        color: white;
        padding: 0.5rem 2rem;
        font-size: 1.5rem;
        text-align: center;
        border-radius: 0.7rem;
        width: 60%;
    }
    a.ecp:hover, a.ecp:active {
        background-color: var(--orange);
    }
    a.paper:hover, align-self.paper:active {
        background-color: var(--green);
    }
    .grid2 {
        display: grid;
        margin-top: 1.5rem;
        grid-template-columns: auto auto auto auto;
        width: 100%;
    }
`;
