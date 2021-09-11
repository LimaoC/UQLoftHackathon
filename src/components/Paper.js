import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Document } from 'react-pdf';

export default function Paper({courseCode, paper}) {
  const [pdfData, setPdfData] = useState("");
  useEffect(() => {
      const data = {"courseCode" : courseCode, "paper": paper};
      console.log(data);
      fetch('https://lewisjluck.pythonanywhere.com/get_paper', {
          method: "POST",
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify(data),
      })
          .then(response => response.json())
          .then(response => {
              console.log(response)
              setPdfData(response)
          })
      }, []);

    return (
        <PaperStyled>
            {/* <h1>{pdfData}</h1> */}
            <Document file="https://www.clickdimensions.com/links/TestPDFfile.pdf" />
            hello
        </PaperStyled>
    )
}

const PaperStyled = styled.div`
    
`;
