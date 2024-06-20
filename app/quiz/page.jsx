"use client";
import React, { useRef, useState } from "react"
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import "./styles.css";
import { BorderColor, Height } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

const data = [
  {
    question: "How many continents in Asia",
    option1: "100",
    option2: "83",
    option3: "1",
    ans: 3,
  },
  {
    question: "Which continent has the most people",
    option1: "Europe",
    option2: "Oceania",
    option3: "Africa",
    ans: 1,
  },
  {
    question: "When did running become a sport?",
    option1: "888 BC",
    option2: "776 BC",
    option3: "5000 BC",
    ans: 2,
  },
  {
    question: "How often are roller coasters serviced?",
    option1: "every day",
    option2: "every month",
    option3: "every year",
    ans: 1,
  },
  {
    question: "How many universities in singapore?",
    option1: "3",
    option2: "6",
    option3: "9",
    ans: 2,
  },
];

const gamepage = () =>{

    let [index,setIndex] = useState(0); //on the first question
    let [question,setQuestion] = useState(data[index]);
    let [lock,setLock] = useState(false);
    let [score,setScore] = useState(0);
    let [result,setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);

    let option_array = [Option1, Option2, Option3]

    const next = () => {
      if (lock == true) {
        if (index == data.length -1){
          setResult(true);
          return 0;
        }
        setIndex(++index);
        setQuestion(data[index]);
        setLock(false);
        option_array.map((option)=>{
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
          return null;
        })
      }
    }
  
    const checkAns = (e, ans) => {
      if (!lock){
          if (question.ans === ans){
            e.target.classList.add("correct");
            setScore(++score);
          }
          else{
            e.target.classList.add("wrong");
            option_array[question.ans-1].current.classList.add("correct");
          }
          setLock(true);

      }
      
    }
    const reset = () => {
      setIndex(0);
      setQuestion(data[0]);
      setScore(0);
      setLock(false);
      setResult(false);
    }
  return (
    <Container style={{width: "100%", height: "500px", backgroundColor: "pink", transform: "translateY(200px)"}} className = "nospace">
      <Typography variant="h3"style={{height: "80px", textAlign: "center",}} className="centered">Prudential Quiz</Typography>
      <Grid container direction="column" spacing={2} sx = {{width: "50%", margin: "0 auto"}}>

      {result?<></>:<>
      <Grid item xs={12}>
        <Typography id="question" variant="h5" style={{height: "75px", textAlign: "left", display: "flex", alignItems: "end"}} >{index+1}. {question.question}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          ref = {Option1}
          onClick={(e)=>{checkAns(e, 1)}}
          className="option"
          sx={{ color: "black", textAlign: "left", }}
        >
          {question.option1}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          ref = {Option2}
          onClick={(e)=>{checkAns(e, 2)}}
          className="option"
          sx={{ color: "black", textAlign: "left", }}
        >
          {question.option2}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          ref = {Option3}
          onClick={(e)=>{checkAns(e, 3)}}
          className="option"
          sx={{ color: "black", textAlign: "left", }}
        >
          {question.option3}
        </Box>
      </Grid>
      <Grid container item spacing={2} direction="row">
      <Grid item xs={3}>
      <button onClick={next} className="button-19" role="button" display="flex">Next</button>
      </Grid>
      <Grid item xs={9}>
        <Box
          sx={{
            width: "100%",
            height: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            position: "relative",
            display: "flex", 
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: `${((index) * (100/data.length)) % 100}%`,
              height: "100%",
              backgroundColor: "lightblue",
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "10px"
            }}
          />
        </Box>
      
      </Grid>
      </Grid>
      
    </>}
    {result?<>
      <Grid item xs={12}>
        <div display = "flex" justifyContent = "center" textAlign="center">You scored {score} out of {data.length}</div>
      </Grid>    
      <button onClick={reset} className="button-19" role="button" display="flex">Reset</button></>:<></>}
    </Grid>
    


    </Container>
      
  )
}

export default gamepage