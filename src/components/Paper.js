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
            {/* <iframe
                src={"https://docs.google.com/gview?url=" + pdfData + "&embedded=true"}
                frameBorder="0" /> */}
                <h1>
                    CSSE1001 / Sem 2 2019
                </h1>
                <div className="main_cont">
                    <div className="grid-el">
                        <iframe src="https://drive.google.com/file/d/1Trt72QK0zBZUGVjB0qF7H8--xai72RNH/preview" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="grid-el">
                        <h2>
                            Solutions
                        </h2>
                    </div>
                </div>

        </PaperStyled>
    );
}


const PaperStyled = styled.div`
    iframe {
        margin-top: 2%;
        margin-left: 5%;
        width: 100%;
        height: 80vh;
    }

    h1 {
        font-size: 2rem;
        margin-top: 2%;
        margin-left: 5%;
    }

    h2 {
        font-size: 1.5rem;

    }

    .main_cont {
        display: grid;
        grid-template-columns: 50% 50%;
        background-color: white;

    }

    .grid-el {
        grid-row-start: 1;
        grid-row-end: 2;
        padding: 5%;
    }
`;
