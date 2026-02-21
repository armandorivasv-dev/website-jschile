'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const FOOTER_ITEMS = [
  {
    title: 'Navegación',
    items: [
      { label: 'Info', href: '#info' },
      { label: 'Hall of Fame', href: '#hall-of-fame' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Staff', href: '#staff' },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { label: 'Código de Conducta', href: '#' },
      { label: 'Ser Charlista', href: '#' },
      { label: 'GitHub', href: 'https://github.com/jschile' },
    ],
  },
  {
    title: 'Contacto',
    items: [
      { label: 'Twitter', href: 'https://twitter.com/jscriptchile' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/jscriptchile' },
      { label: 'Email', href: 'mailto:contacto@jschile.org' },
    ],
  },
];

const Footer = () => {
  return (
    <Box
      id='contacto'
      component='footer'
      sx={{
        bgcolor: '#FFFFFF',
        color: 'black',
        py: { xs: 8, md: 10 },
        px: { xs: 4, md: 10 },
        borderRadius: '32px',
      }}
    >
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <Typography
              sx={{
                fontWeight: 950,
                color: '#F0DB4F',
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '-0.04em',
              }}
            >
              JavaScript
            </Typography>
            <Typography
              sx={{
                fontWeight: 950,
                color: 'black',
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '-0.04em',
                ml: 1,
              }}
            >
              Chile
            </Typography>
          </Box>
          <Typography
            variant='body2'
            sx={{
              fontWeight: 600,
              color: '#666',
              maxWidth: '350px',
              lineHeight: 1.6,
            }}
          >
            La comunidad de JavaScript más grande de Chile. Conectando
            desarrolladores desde 2013.
          </Typography>
        </Grid>

        {FOOTER_ITEMS.map((section, index) => (
          <Grid size={{ xs: 6, md: index === 2 ? 3 : 2 }} key={section.title}>
            <Typography
              variant='subtitle1'
              sx={{ fontWeight: 900, mb: 3, fontSize: '0.9rem' }}
            >
              {section.title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  color='inherit'
                  underline='none'
                  sx={{
                    fontWeight: 600,
                    color: '#444',
                    fontSize: '0.85rem',
                    '&:hover': { color: '#000' },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          borderTop: '1px solid #EEE',
          mt: 8,
          pt: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='caption' sx={{ fontWeight: 600, color: '#888' }}>
          Copyright © JavaScript Chile 2026. Design by SamuelAngulo & Develop by{' '}
          <Link
            href='https://www.armandorivasv.dev/'
            target='_blank'
            rel='noopener noreferrer'
            color='inherit'
            underline='hover'
          >
            ArmandoRivasV
          </Link>{' '}
          - JavaScript Chile
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size='small'>
            <GitHubIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton size='small'>
            <LinkedInIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
