'use client';

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CardActions } from '@mui/material';
import { CodeOfConductModal } from './CodeOfConductModal';

export const CodeOfConduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant='h6'
            sx={{ mb: 2, fontWeight: 800, fontSize: '1.3rem' }}
          >
            Código de Conducta
          </Typography>
          <Box>
            <Typography
              variant='body2'
              sx={{
                color: '#444',
                fontWeight: 600,
                fontSize: '0.9rem',
                lineHeight: 1.6,
              }}
            >
              Todos los participantes deben seguir nuestro código de conducta
              para garantizar un ambiente respetuoso y seguro.
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            color='secondary'
            fullWidth
            onClick={() => setIsModalOpen(true)}
          >
            Ver Código de Conducta →
          </Button>
        </CardActions>
      </Card>

      <CodeOfConductModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
