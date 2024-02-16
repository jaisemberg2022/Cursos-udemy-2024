import React from 'react'
import { Stack,Typography,Toolbar,Box,AppBar,Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export const NavBar = () => {

  const navigate = useNavigate();
  const onLogout = ()=>{
    navigate('/Login',{
      replace:true
    })
  }
  return (
    <AppBar component="nav" position={'fixed'} elevation={1} color='primary' >
      <Toolbar >
        <Stack  width={'100%'} flexBasis={'100%'} display={'inline-flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="h6" >Rutas</Typography>
          <Box display={'inline-flex'} gap={1} flexWrap={'nowrap'}>
            <Button component={Link} to="/marvel" variant="text" color="inherit">Marvel</Button>
            <Button component={Link} to="/dc" variant="text" color="inherit">Dc</Button>
            <Button variant="text" onClick={onLogout} color="inherit">Logut</Button>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

