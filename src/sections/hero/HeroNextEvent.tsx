import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BoltIcon from '@mui/icons-material/Bolt';

const DATA_NEXT_EVENT = {
  title: 'Workshop: React Server Components',
  date: '28 Feb 2026',
  time: '19:00 hrs',
  location: 'Seelie Cafeteria',
  address: 'Av. Apoquindo 5500, Las Condes, Santiago',
  link: 'https://luma.com/p4vpjvw1',
};

export const HeroNextEvent = () => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant='overline'
          sx={{
            fontWeight: 800,
            color: '#000',
            mb: 1.5,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            letterSpacing: '0.1em',
            fontSize: '0.8rem',
          }}
        >
          <Box
            component='span'
            sx={{ color: 'primary.main', fontSize: '1.2rem' }}
          >
            <BoltIcon />
          </Box>{' '}
          PRÓXIMO EVENTO
        </Typography>
        <Typography
          variant='h5'
          sx={{
            mb: 3,
            fontWeight: 800,
            fontSize: '1.8rem',
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
          }}
        >
          {DATA_NEXT_EVENT.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mb: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component='span'
              sx={{
                fontSize: '1.3rem',
                color: 'primary.main',
              }}
            >
              <CalendarTodayIcon />
            </Box>
            <Typography
              variant='body2'
              sx={{ fontWeight: 700, fontSize: '1rem' }}
            >
              {DATA_NEXT_EVENT.date}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component='span'
              sx={{
                fontSize: '1.3rem',
                color: 'primary.main',
              }}
            >
              <QueryBuilderIcon />
            </Box>
            <Typography
              variant='body2'
              sx={{ fontWeight: 700, fontSize: '1rem' }}
            >
              {DATA_NEXT_EVENT.time}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component='span'
              sx={{
                fontSize: '1.3rem',
                color: 'primary.main',
              }}
            >
              <HomeWorkIcon />
            </Box>
            <Typography
              variant='body2'
              sx={{ fontWeight: 700, fontSize: '1rem' }}
            >
              {DATA_NEXT_EVENT.location}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component='span'
              sx={{
                fontSize: '1.3rem',
                color: 'primary.main',
              }}
            >
              <LocationOnIcon />
            </Box>
            <Typography
              variant='body2'
              sx={{ fontWeight: 700, fontSize: '1rem' }}
            >
              {DATA_NEXT_EVENT.address}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          color='secondary'
          fullWidth
          href={DATA_NEXT_EVENT.link}
          target='_blank'
        >
          Inscríbete →
        </Button>
      </CardActions>
    </Card>
  );
};
