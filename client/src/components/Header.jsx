import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Header() {
  return (
<AppBar position="static"
sx={{
  background: "linear-gradient(0deg, rgba(235,251,97,1) 0%, rgba(4,152,255,1) 100%)"
}}>
  <Toolbar>
    <Typography variant="h6">Project Management App</Typography>
    <Box display="flex" marginLeft="auto">
       <Button variant='contained' sx={{margin:1, borderRadius:10}} color="warning">Login</Button>
        <Button variant='contained' sx={{margin:1, borderRadius:10}} color="warning">Signup</Button>
       <Button variant='contained' sx={{margin:1, borderRadius:10}} color="warning">Logout</Button>
      </Box>
  </Toolbar>
</AppBar>

  );
}