import Box from '@mui/material/Box';
import HomeHallOfFame from '@/sections/HomeHallOfFame';
import HomeGallery from '@/sections/HomeGallery';
import Staff from '@/sections/staff/Staff';
import { HeroContainer } from '@/sections/hero/HeroContainer';
import { CardsContainer } from '@/sections/cards/CardsContainer';

export default function Home() {
  return (
    <Box component='main'>
      <Box id='hero'>
        <HeroContainer />
      </Box>
      <Box id='info'>
        <CardsContainer />
      </Box>
      <Box id='hall-of-fame'>
        <HomeHallOfFame />
      </Box>
      <Box id='galeria'>
        <HomeGallery />
      </Box>
      <Box id='staff'>
        <Staff />
      </Box>
    </Box>
  );
}
