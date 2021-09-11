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
                <div className="grid">
                    <div>
                        <h1>{courseCode}</h1>
                    </div>
                    <div>
                        <h2>{info.course_name}</h2>
                    </div>
                </div>
                <div className="body">
                    <p>{info.course_description}</p>
                    <a href={info.ecp_link}> View ECP here </a>
                    {info.papers.map((paper) =>
                    <div><a href="courses/paper" onClick={handlePaperClick}>{paper.year} - {paper.semester}</a> </div>
                    
                )}
                </div>

                </>
            ) : ''}


        </CourseStyled>
    );
}


const CourseStyled = styled.div`
    .grid {
        display: grid;
        margin-top: 3rem;
        grid-template-columns: auto auto;
    }
    h1 {     
        text-align: right;
        font-size: 3rem;
        text-transform: uppercase;
    }
    h2 {
        font-size: 2rem;
        font-weight: 400;
        color: var(--aqua);
        padding-top: 14px;
    }
    .body {
        clear: both;
        width: 60%;
        margin: auto;
        padding-top: 2rem;
    }
`;
