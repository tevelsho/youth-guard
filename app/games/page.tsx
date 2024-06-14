import React from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material';
import './styles.css';
import { Height } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

const gamepage = () =>{
  return (
    <Container style={{width: '100%'}}>
      <Container style={{width: '100%', height: '200px', backgroundColor: 'pink'}}></Container>
      <Typography variant="h4" component="h1" gutterBottom className="text">
        Quizzes
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
          <img src="car_insurance.jpg" className="top"></img>
          <Typography className="bottom">Car Insurance</Typography>
          </Paper>

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
            <Typography>Item 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
            <Typography>Item 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default gamepage