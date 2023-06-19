import * as React from 'react';
import { useKeycloak } from "@react-keycloak/web";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemText from '@mui/material/ListItemText';

const homepages = ['Home', 'Zeub', 'Blog'];
const pages = ['Home', 'Patrimoine', 'Import', 'Investissement'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function NavBar() {
  const { keycloak } = useKeycloak()

  const logout = () => {
    keycloak.logout()
  }

  const account = () => {
    keycloak.accountManagement()
  }
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="Home">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <img src="TCArgent_Logo.png" height="50hv" alt="Logo" />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
              key="Home"
              sx={{ my: 2, color: 'white', display: 'block' }}
              href="/"
            >
              Home
            </Button>

            <Button
              key="Patrimoine"
              sx={{ my: 2, color: 'white', display: 'block' }}
              href="/Patrimoine"
            >
              Patrimoine
            </Button>

            <Button
              key="Investissement"
              sx={{ my: 2, color: 'white', display: 'block' }}
              href="/Investissement"
            >
              Investissement
            </Button>

            <Button
              key="Imports"
              sx={{ my: 2, color: 'white', display: 'block' }}
              href="/Import"
            >
              Imports
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" onClick={account} />
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem key="Account">
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Button color="inherit" variant="outlined" startIcon={<ExitToAppIcon />}
            onClick={logout}>
            Log out</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export function HomeNavBar() {
  const { keycloak } = useKeycloak()

  const login = () => {
    keycloak.login()
  }

  const register = () => {
    keycloak.register()
  }
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {/* <MenuItem key="Home">
                <ListItemText>Bonsoir</ListItemText>
                <Typography textAlign="center">Home</Typography>
              </MenuItem> */}
            </Menu>
          </Box>
          <img src="TCArgent_Logo.png" height="50hv" alt="Logo" />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} href="#Patrimoine">

            <Button
              key="HomePage"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Homepage
            </Button>
          </Box>
          <Button color="inherit" variant="outlined" startIcon={<LoginIcon />}
            onClick={login}>
            Sign in</Button>
          <Button color="inherit" variant="outlined" startIcon={<AppRegistrationIcon />}
            onClick={register}>
            Register</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
