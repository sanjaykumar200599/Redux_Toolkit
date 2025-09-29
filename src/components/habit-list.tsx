import React from 'react'
import { useSelector } from 'react-redux'

import { Box, Grid, Paper, Typography } from '@mui/material'
import type { RootState } from '../store/store';

const HabitList:React.FC = () => {
   const {habits}=useSelector((state:RootState)=>state.habits);

  return (
    <Box sx={{display:"flex", flexDirection: "column", gap:2, mt:2}}>
        {habits.map((habit)=>{
            return(
            <Paper key={habit.id} elevation={2} sx={{p:2}}>
                <Grid container alignItems="center">
                    <Grid>
                        <Typography variant="h6">{habit.name}</Typography>
                        <Typography variant="body2" color='secondary' sx={{textTransform:"capitalize"}}>{habit.frequency}</Typography>
                    </Grid>
                </Grid>

            </Paper>
        )
        })}
    </Box>
  )
}


export default HabitList;
