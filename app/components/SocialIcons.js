// app/components/SocialIcons.js
"use client";

import { IconButton, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function SocialIcons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <IconButton
        aria-label="Instagram"
        href="https://instagram.com"
        target="_blank"
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#D4AF37',
            transform: 'scale(1.1)'
          }
        }}
      >
        <InstagramIcon fontSize="medium" />
      </IconButton>
      <IconButton
        aria-label="Twitter"
        href="https://twitter.com"
        target="_blank"
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#D4AF37',
            transform: 'scale(1.1)'
          }
        }}
      >
        <TwitterIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
}