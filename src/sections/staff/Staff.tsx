'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { DATA_STAFF, StaffMember } from '@/data/data_staff';
import StaffModal from './StaffModal';

const Staff: React.FC = () => {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (staff: StaffMember) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStaff(null), 300);
  };

  const currentStaff = DATA_STAFF.filter((staff) => !staff.isExStaff);
  const exStaff = DATA_STAFF.filter((staff) => staff.isExStaff);

  return (
    <Container maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 }, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: '32px',
              py: { xs: 6, md: 8 },
              px: { xs: 2, md: 2 },
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            <Typography
              variant='h2'
              sx={{
                mb: 2,
                color: 'black',
                fontWeight: 900,
                letterSpacing: '-0.03em',
              }}
            >
              Staff
            </Typography>
            <Typography
              sx={{
                color: '#666',
                fontWeight: 600,
                fontSize: '1.2rem',
                mb: 8,
              }}
            >
              Conoce a las personas que hacen posible JSChile.
            </Typography>

            <Box sx={{ mb: 8 }}>
              <Typography
                variant='h4'
                component='h3'
                fontWeight='bold' // I should keep matching subtitles for the categories
                textAlign='center'
                sx={{ mb: 4, color: 'black' }}
              >
                Staff Actual
              </Typography>
              <Grid container spacing={4} justifyContent='center'>
                {currentStaff.map((staff) => (
                  <Grid size={{ xs: 6, sm: 4, md: 3 }} key={staff.id}>
                    <Stack
                      alignItems='center'
                      spacing={2}
                      onClick={() => handleOpenModal(staff)}
                      sx={{
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.05)' },
                      }}
                    >
                      <Avatar
                        src={staff.imageUrl}
                        alt={staff.fullName}
                        sx={{
                          width: 100,
                          height: 100,
                          border: '4px solid',
                          borderColor: 'primary.main',
                        }}
                      />
                      <Typography
                        variant='body1'
                        fontWeight='medium'
                        textAlign='center'
                      >
                        {staff.fullName}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box>
              <Typography
                variant='h4'
                component='h3'
                fontWeight='bold'
                textAlign='center'
                sx={{ mb: 4, color: 'black' }}
              >
                Ex Staff
              </Typography>
              <Grid container spacing={4} justifyContent='center'>
                {exStaff.map((staff) => (
                  <Grid size={{ xs: 6, sm: 4, md: 3 }} key={staff.id}>
                    <Stack
                      alignItems='center'
                      spacing={2}
                      onClick={() => handleOpenModal(staff)}
                      sx={{
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.05)' },
                      }}
                    >
                      <Avatar
                        src={staff.imageUrl}
                        alt={staff.fullName}
                        sx={{
                          width: 80,
                          height: 80,
                          border: '4px solid',
                          borderColor: 'primary.main',
                        }}
                      />
                      <Typography
                        variant='body2'
                        fontWeight='medium'
                        textAlign='center'
                        color='text.secondary'
                      >
                        {staff.fullName}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <StaffModal
              open={isModalOpen}
              onClose={handleCloseModal}
              staff={selectedStaff}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Staff;
