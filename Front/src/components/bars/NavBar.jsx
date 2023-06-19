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
import Drawer from '@mui/material/Drawer';

export function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

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
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='left'
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              PaperProps={{
                sx: {
                  background: '#1976d2'
                }
              }}>
              <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography textAlign="center" variant="h5">
                  TCArgent
                </Typography>
              </Box>

              <Box p={2}
                width='250px'
                textAlign='center'
                display="flex"
                justifyContent="center"
                alignItems="center"
                role='presentation'>
                <Tooltip title="Open settings">
                  <Avatar alt="Remy Sharp" src="PP.png" onClick={account} />
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

              <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Box>
                  <Button
                    fullWidth={true}
                    key="HomePage"
                    sx={{ my: 2, color: 'black', background: '#1051a5', display: 'block' }}
                    href="/">
                    Homepage
                  </Button>
                  <Button
                    fullWidth={true}
                    key="Patrimoine"
                    sx={{ my: 2, color: 'black', background: '#1051a5', display: 'block' }}
                    href="/patrimoine">
                    Patrimoine
                  </Button>
                  <Button
                    fullWidth={true}
                    key="Investissement"
                    sx={{ my: 2, color: 'black', background: '#1051a5', display: 'block' }}
                    href="/investissement">
                    Investissement
                  </Button>
                  <Button
                    fullWidth={true}
                    key="Imports"
                    sx={{ my: 2, color: 'black', background: '#1051a5', display: 'block' }}
                    href="/imports">
                    Imports
                  </Button>
                  <Button
                    fullWidth={true}
                    color="inherit"
                    variant="outlined"
                    startIcon={<ExitToAppIcon />}
                    onClick={logout}
                    sx={{ my: 2 }}>
                    Deconnexion
                  </Button>
                </Box>
              </Box>
            </Drawer>
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
            </Menu>
          </Box>
          <a href="/">
            <img src="TCArgent_Logo.png" height="50hv" alt="Logo" />
          </a>
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
              href="/patrimoine"
            >
              Patrimoine
            </Button>

            <Button
              key="Investissement"
              sx={{ my: 2, color: 'white', display: 'block' }}
              href="/investissement"
            >
              Investissement
            </Button>

            <Button
              key="Imports"
              sx={{ my: 2, color: 'white', display: 'block' }}
              href="/imports"
            >
              Imports
            </Button>

          </Box>

          <Box
            sx={{
              flexGrow: 10,
              display: { xs: 'none', md: 'flex' }
            }}
            container
            justifyContent="flex-end">

            <Box
              sx={{
                flexGrow: 0,
              }}>
              <Tooltip title="Open settings">
                <Avatar alt="Remy Sharp" src="PP.png" onClick={account} />
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
            <span className='mx-2'/>
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<ExitToAppIcon />}
              onClick={logout}>
              Deconnexion
            </Button>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export function HomeNavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

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
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'none'
              }
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='left'
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              PaperProps={{
                sx: {
                  background: '#1976d2'
                }
              }}>
              <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography textAlign="center" variant="h5">
                  TCArgent
                </Typography>
              </Box>
              <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Box>
                  <Button
                    fullWidth={true}
                    key="HomePage"
                    sx={{ my: 2, color: 'black', background: '#1051a5', display: 'block' }}
                    href="/">
                    Homepage
                  </Button>
                </Box>
                <Box>
                  <Button
                    fullWidth={true}
                    color="inherit"
                    variant="outlined"
                    startIcon={<LoginIcon />}
                    onClick={login}>
                    Connexion
                  </Button>
                  <Button
                    fullWidth={true}
                    color="inherit"
                    variant="outlined"
                    startIcon={<AppRegistrationIcon />}
                    onClick={register}>
                    Enregistrement
                  </Button>
                </Box>
              </Box>
            </Drawer>
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
            </Menu>
          </Box>
          <a href="/">
            <img src="TCArgent_Logo.png" height="50hv" alt="Logo" />
          </a>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} href="#Patrimoine">
            <Button
              key="HomePage"
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Homepage
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 10,
              display: { xs: 'none', md: 'flex' }
            }}
            container
            justifyContent="flex-end">
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<LoginIcon />}
              onClick={login}>
              Connexion
            </Button>
            <Button color="inherit"
              variant="outlined"
              startIcon={<AppRegistrationIcon />}
              onClick={register}>
              Enregistrement
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}