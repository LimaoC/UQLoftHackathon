import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Course({ courseCode }) {
    const [info, setInfo] = useState(null);
    const data = { "courseCode": courseCode };
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
    return (
        <CourseStyled>
            {/* {info !== undefined && info.length > 0 && (<><h1>{courseCode.toUpperCase()}</h1>
                {info.course_name}
                {info.papers.map((paper) =>
                    <div>{paper.year} - {paper.sem}</div>
            )}</>)} */}
            {info ? (
                <>
                <div className="body">
                    <h1>{courseCode}</h1><h2>{info.course_name}</h2>
                    <p>{info.course_description}</p>
                    <a href={info.ecp_link}> View ECP here </a>
                    {<p> {info.papers.map((paper) =>
                        <div>{paper.year} - {paper.semester}</div>
                    )}</p>}
                </div>
                    
                </>
            ) : ''}


        </CourseStyled>
    );
}


const CourseStyled = styled.div`
    h1 {
        font-size: 3rem;
        text-align: center;
        margin-top: 3rem;
        text-transform: uppercase;
    }
    h2 {
        font-size: 2.5rem;
        color: var(--aqua);
    }
    .body {
        width: 70%;
        margin: auto;
        text-align: center;
    }
`;
