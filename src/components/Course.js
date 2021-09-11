import React from 'react';
import styled from 'styled-components';

export default function Course({courseCode}) {
    return (
        <CourseStyled>
            <h1>{courseCode.toUpperCase()}</h1>
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
