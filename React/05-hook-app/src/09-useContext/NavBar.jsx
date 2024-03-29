import React from 'react'
import { Stack,Typography,Toolbar,Box,AppBar,Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar component="nav" position={'fixed'} elevation={1} color='primary' >
      <Toolbar >
        <Stack  width={'100%'} flexBasis={'100%'} display={'inline-flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="h6" >Rutas</Typography>
          <Box display={'inline-flex'} gap={1} flexWrap={'nowrap'}>
            <Button component={Link} to="/" variant="text" color="inherit">Home</Button>
            <Button component={Link} to="/About" variant="text" color="inherit">About</Button>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar