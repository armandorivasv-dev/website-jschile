'use client';

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CardActions } from '@mui/material';
import { CallForSpeakerModalForm } from './CallForSpeakerModal';

export const CallForSpeaker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant='h6'
            sx={{ mb: 2, fontWeight: 800, fontSize: '1.3rem' }}
          >
            Call for Speakers
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
              ¿Tienes una charla sobre JavaScript, React, Node.js o tecnologías
              web? Postula para ser speaker en nuestros próximos eventos.
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
            Postular →
          </Button>
        </CardActions>
      </Card>

      <CallForSpeakerModalForm
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
