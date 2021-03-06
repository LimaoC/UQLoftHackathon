import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import paperData from "./data.json";
console.log(paperData);




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


      function getMax(arr){
          var max = 0;
          for (var i=0; i<arr.length; i++){
            if (max < arr[i]){
                max = arr[i]
            }
    }
    return max;
      }

      function getAns(max, val){
          if (max == val) {
              return 'bestAnswer';
          }
      }
      function getSum(ansArr){
        var sum;
        for (let i = 0; i < ansArr.length; i++){
            sum = sum + parseInt(ansArr[i], 10);
        console.log(sum)
        } return {sum}
    }


    return (

        <PaperStyled>
            {/* <iframe
                src={"https://docs.google.com/gview?url=" + pdfData + "&embedded=true"}
                frameBorder="0" /> */}
                <h1>
                    CSSE1001 / Sem 2 2019
                </h1>
                <div className="toggleButtons">
                    <span className="toggleBtn" style={{'background-color': '#E62645'}}>
                        View Paper
                    </span>
                    <span className="toggleBtn" style={{'background-color': '#EB602B'}}>
                        View Solutions
                    </span>

                </div>
                <div className="main_cont">
                    <div className="grid-el">
                        <iframe src="https://drive.google.com/file/d/1Trt72QK0zBZUGVjB0qF7H8--xai72RNH/preview" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="grid-el">
                        <h2>
                            Solutions
                        </h2>
                        <div style={{'max-height': '550px', 'overflow': 'scroll'}}>
                        <table className="ansTbl">
                            {
                                paperData.answers.map(ans => {
                                    const ansArr = [ans.aTally, ans.bTally, ans.cTally, ans.dTally, ans.eTally];
                                    const bestAns = getMax(ansArr);


                                    function showDistribution() {
                                        const sum = ansArr.reduce((a,b) => a + b, 0);
                                        var fracs = [];
                                        for (let i = 0; i<ansArr.length; i++){
                                            var num = (ansArr[i]/sum);
                                            fracs.push(num);
                                            console.log(fracs);
                                        }
                                        for (let i = 0; i<fracs.length; i++){

                                        }
                                        console.log(sum);
                                        console.log('show distribution')

                                        return fracs;
                                        }


                                    function showDiscussion(ansArr){
                                        console.log('show discussion')
                                    }

                                    return (<tr className="solCont">
                                        <td>Q{ans.questionID}</td>
                                        <td className={getAns(bestAns, ans.aTally)}>A </td>
                                        <td className={getAns(bestAns, ans.bTally)}>B</td>
                                        <td className={getAns(bestAns, ans.cTally)}>C </td>
                                        <td className={getAns(bestAns, ans.dTally)}>D </td>
                                        <td className={getAns(bestAns, ans.eTally)}>E</td>
                                        <td className="blank">
                                            </td>
                                        <td style={{padding: "0.5rem"}} onClick={showDistribution}><span><img src={process.env.PUBLIC_URL + '/assets/bar_graph.svg'} alt="" /></span></td>
                                        <td style={{padding: "0.5rem"}} onClick={showDiscussion}><span><img src={process.env.PUBLIC_URL + '/assets/discussion.svg'} alt="" /></span></td>
                                    </tr>);
                            })
                        }



                        </table>
                        </div>


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


    .ansTbl {
        width: 100%;
    }

    .ansTbl tr {
        background-color: #F1EBE0;
        height: 3.5rem;
    }

    .ansTbl tr:nth-of-type(even){
        background-color:#E4D8C1;
    }
    .ansTbl td{
        margin: 10%;
        padding: 1.25rem;
    }

    .bestAnswer {
        background-color: #2EA836;
        color: black;
    }

    .ansTbl img {
        width: 2rem;
    }

    .toggleButtons {
        display: 'inline-block';
        margin-top: 2%;
        margin-left: 5%;
        margin-right: 5%;
    }


    .toggleButtons span {
        color: white;
        padding: 1rem;
        font-size: 20px;
    }

`;
