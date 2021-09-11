import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
            <iframe
                src={"https://docs.google.com/gview?url=" + pdfData + "&embedded=true"}
                frameborder="0" />
        </PaperStyled>
    );
}

const PaperStyled = styled.div`
    iframe {
        margin: 10px;
        width: 50%;
        height: 80vh;
    }
`;
