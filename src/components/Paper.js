import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Paper({ courseCode, paper}) {
  const [pdfData, setPdfData] = useState("");
  useEffect(() => {
      const data = {"courseCode" : courseCode, "paperCode": paper};
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
}
