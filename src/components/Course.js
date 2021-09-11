import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Course({ courseCode }) {
    const [info, setInfo] = useState([]);

    useEffect(() => fetch('https://lewisjluck.pythonanywhere.com/get_course_info')
        .then(response => response.json())
        .then(response => console.log(response))
        .then(data => console.log(data))
        .then(data => setInfo(data))
    , []);
    return (
        <CourseStyled>
            {info.course_name}
            {/* {info !== undefined && info.length > 0 && (<><h1>{courseCode.toUpperCase()}</h1>
                {info.course_name}
                {info.papers.map((paper) =>
                    <div>{paper.year} - {paper.sem}</div>
            )}</>)} */}
        </CourseStyled>
    );
}


const CourseStyled = styled.div`
    h1 {
        font-size: 3rem;
        text-align: center;
        margin-top: 3rem;
    }
`;
