"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Container, Box, Typography, Button, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, memo, useCallback } from 'react';
import { throttle } from 'lodash';
import Navbar from '../app/components/Navbar';
import Productdetail from "../app/components/Productdetail";
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import Footer from '../app/components/Footer';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  preload: true
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  style: ['italic', 'normal'],
  preload: true
});

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GoldButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #C5A330 0%, #E6CF6F 100%)',
  backgroundSize: '200% 200%',
  color: '#1a1a1a',
  padding: theme.spacing(2, 6),
  borderRadius: '30px',
  fontSize: '1.1rem',
  fontFamily: cormorant.style.fontFamily,
  fontWeight: 700,
  letterSpacing: '1.5px',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  border: '2px solid rgba(255, 215, 0, 0.3)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 30px rgba(198, 168, 50, 0.4)',
  },
  animation: `${gradientFlow} 6s ease infinite`,
}));

const MemoNavbar = memo(Navbar);
const MemoFooter = memo(Footer);
const MemoProductdetail = memo(Productdetail);

function Home() {
  const scrollRef = useRef(0);
  const bgRef = useRef(null);

  const handleScroll = useCallback(
    throttle(() => {
      if (typeof window !== 'undefined' && bgRef.current) {
        scrollRef.current = window.pageYOffset;
        bgRef.current.style.transform = `scale(${1 + scrollRef.current * 0.0005})`;
      }
    }, 100),
    []
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box ref={bgRef} sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        transition: 'transform 0.3s ease-out',
        willChange: 'transform'
      }}>
        <Image
          src="/paterna.jpg"
          alt="Luxury background pattern"
          fill
          priority
          quality={80}
          style={{ 
            objectFit: 'cover',
            opacity: 0.7,
            mixBlendMode: 'multiply',
            filter: 'contrast(1.1) brightness(0.9)'
          }}
        />
      </Box>

      <MemoNavbar />

      <Box sx={{ flex: 1, position: 'relative' }}>
        <Container maxWidth="xl">
          <Box sx={{
            textAlign: 'center',
            py: { xs: 8, md: 15 },
            px: { xs: 2, md: 0 },
            color: '#fff',
            position: 'relative',
            zIndex: 1
          }}>
            <Typography
              variant="h1"
              component="h1"
              className={playfair.className}
              sx={{
                background: 'linear-gradient(45deg, #C5A330 20%, #E6CF6F 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                mb: 3,
                letterSpacing: { xs: '1.5px', md: '3px' },
                textShadow: '2px 2px 8px rgba(197, 163, 48, 0.5)',
                animation: `${fadeIn} 1s ease-out`,
                lineHeight: 1.1
              }}
            >
              Elegance Redefined
            </Typography>
            
            <Link href="/shop" legacyBehavior passHref>
              <GoldButton
                component="a"
                aria-label="Explore our luxury collection"
                sx={{
                  animation: `${fadeIn} 1s ease-out 0.6s forwards`,
                  '&:hover': { 
                    transform: 'scale(1.03) rotate(-1deg)',
                    transition: 'all 0.3s ease-in-out'
                  }
                }}
              >
                Explore Collection
              </GoldButton>
            </Link>
          </Box>
          <MemoProductdetail />
        </Container>
      </Box>

      <MemoFooter />
    </Box>
  );
}

export default Home;