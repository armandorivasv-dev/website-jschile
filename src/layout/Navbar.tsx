'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const navItems = [
  { label: 'Info', href: '#info' },
  { label: 'Hall of Fame', href: '#hall-of-fame' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Staff', href: '#staff' },
  { label: 'Contacto', href: '#contacto' },
];

const DRAWER_WIDTH = 250;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        bgcolor: '#0B0B0B',
        height: '100%',
        color: 'white',
        pt: 4,
      }}
    >
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <img
          src='/assets/javascript-chile-logo.png'
          alt='JS Chile'
          style={{ height: 40, width: 'auto' }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 4 }}>
        <Button
          href='https://chat.whatsapp.com/GXBnfGrTbfvBo8KxOtMOZL?mode=gi_t'
          target='_blank'
          rel='noopener noreferrer'
          variant='contained'
          color='primary'
          disableElevation
          sx={{
            fontWeight: 800,
            px: 4,
            py: 1,
            borderRadius: 100,
            bgcolor: '#F0DB4F',
            color: 'black',
            '&:hover': { bgcolor: '#d9c547' },
          }}
        >
          Unirse a la Comunidad
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position='sticky'
        color='transparent'
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1100,
          borderBottom: '2px solid rgba(255,255,255,0.15)',
          bgcolor: 'rgba(25, 25, 25, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          py: 1,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component='img'
                  src='/assets/javascript-chile-logo.png'
                  alt='JS Chile'
                  sx={{ height: 40, width: 'auto' }}
                />
              </Link>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#F0DB4F',
                      bgcolor: 'transparent',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Action Buttons & Mobile Menu Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                href='https://chat.whatsapp.com/GXBnfGrTbfvBo8KxOtMOZL?mode=gi_t'
                target='_blank'
                rel='noopener noreferrer'
                variant='contained'
                color='primary'
                disableElevation
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  fontWeight: 950,
                  px: 4,
                  py: 1.5,
                  borderRadius: 100,
                  fontSize: '1rem',
                  bgcolor: '#F0DB4F',
                  color: 'black',
                  '&:hover': { bgcolor: '#d9c547' },
                }}
              >
                Unirse a la Comunidad
              </Button>

              <IconButton
                color='inherit'
                aria-label='abrir menú'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              bgcolor: '#0B0B0B',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
