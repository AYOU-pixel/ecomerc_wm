// app/components/Footer.js
import Link from 'next/link';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';

// Load custom fonts
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
});

// Social Icons (Client Component)
import SocialIcons from './SocialIcons';

// Navigation items with unique IDs
const navItems = [
  { id: 1, name: 'Shop', path: '/shop' },
  { id: 3, name: 'About', path: '/about' },
  { id: 4, name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{
      backgroundColor: '#0a0a0a',
      color: '#e0e0e0',
      py: 8,
      position: 'relative',
      borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      zIndex: 2,
    }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} justifyContent="space-between">
          {/* About Section */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              className={playfair.className}
              sx={{ 
                fontSize: '1.8rem',
                mb: 2,
                background: 'linear-gradient(45deg, #D4AF37 30%, #FFDF73 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              LuxeCraft
            </Typography>
            <Typography 
              variant="body2" 
              className={cormorant.className}
              sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              Crafting timeless elegance through meticulous design and unparalleled quality.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={6} md={2}>
            <Typography 
              variant="h6" 
              className={playfair.className}
              sx={{ fontSize: '1.2rem', mb: 2 }}
            >
              Explore
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navItems.map((item) => (
                <Link key={item.id} href={item.path} passHlegacyBehavior>
                  <Typography 
                    component="a" 
                    className={cormorant.className}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#D4AF37',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Connect Section */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              className={playfair.className}
              sx={{ fontSize: '1.2rem', mb: 2 }}
            >
              Connect With Us
            </Typography>
            
            {/* Social Icons (Client Component) */}
            <SocialIcons />

            <Typography 
              variant="body2" 
              className={cormorant.className}
              sx={{ 
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                mt: 2
              }}
            >
              Get exclusive updates and styling tips
              <Box 
                component="span" 
                sx={{ 
                  display: 'block', 
                  width: '60px', 
                  height: '2px', 
                  backgroundColor: '#D4AF37', 
                  my: 1 
                }}
              />
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Copyright Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="body2" 
            className={cormorant.className}
            sx={{ 
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.5)',
              letterSpacing: '0.5px'
            }}
          >
            &copy; {new Date().getFullYear()} LuxeCraft. All rights reserved.
            <br />
            Crafted with excellence in Paris
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}