import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
<AppBar position="static"
sx={{
  background: "linear-gradient(0deg, rgba(235,251,97,1) 0%, rgba(4,152,255,1) 100%)"
}}>
  <Toolbar>
    <Typography variant="h6">Project Management App</Typography>
  </Toolbar>
</AppBar>

  );
}