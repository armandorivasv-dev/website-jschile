'use client';

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CardActions } from '@mui/material';
import { OurStoryModal } from './OurStoryModal';

const DATA_OUR_STORY = [
  { year: '2015', text: 'Nace la comunidad' },
  { year: '2018', text: 'Primera JSConf' },
  { year: '2026', text: '10 Años' },
];

export const OurStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant='h6'
            sx={{ mb: 2, fontWeight: 800, fontSize: '1.3rem' }}
          >
            Nuestra Historia
          </Typography>
          <Box>
            {DATA_OUR_STORY.map((item) => (
              <Box
                key={item.year}
                sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}
              >
                <Box
                  component='span'
                  sx={{
                    fontWeight: 900,
                    fontSize: '1rem',
                    color: 'black',
                  }}
                >
                  •
                </Box>
                <Box>
                  <Typography
                    variant='subtitle2'
                    sx={{ fontWeight: 800, lineHeight: 1.2 }}
                  >
                    {item.year}
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{ color: '#555', fontWeight: 600 }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            color='secondary'
            fullWidth
            onClick={() => setIsModalOpen(true)}
          >
            Ver Historia →
          </Button>
        </CardActions>
      </Card>

      <OurStoryModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
