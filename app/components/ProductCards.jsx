"use client";
import { useState, useCallback, memo, useEffect } from 'react';
import { Grid, Box, Typography, Button, styled, IconButton, Tooltip, Chip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Styled Components
const StyledCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[2],
  transition: 'box-shadow 0.25s ease',
  '&:hover': {
    boxShadow: theme.shadows[6],
    '& .action-buttons': { opacity: 1 },
  },
  [`@media (prefers-reduced-motion: reduce)`]: {
    transition: 'none',
  },
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  aspectRatio: '3/4',
  overflow: 'hidden',
  backgroundColor: '#f5f5f5',
  '& img': {
    transition: 'opacity 0.5s ease',
  },
});

const ThumbnailContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '12px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '8px',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    gap: '4px',
    bottom: '8px',
  },
}));

const ThumbnailButton = styled(IconButton)(({ active, theme }) => ({
  width: 40,
  height: 40,
  padding: 0,
  border: `2px solid ${active ? theme.palette.primary.main : 'transparent'}`,
  borderRadius: '4px',
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  [theme.breakpoints.down('sm')]: {
    width: 32,
    height: 32,
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  '&:hover': {
    backgroundColor: '#ffffff',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ActionBar = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '12px',
  right: '12px',
  display: 'flex',
  gap: '8px',
  opacity: 0,
  transition: 'opacity 0.2s ease',
  [theme.breakpoints.down('sm')]: {
    opacity: 1,
    gap: '4px',
    top: '8px',
    right: '8px',
  },
}));

const ProductDetails = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: theme.palette.grey[50],
}));

const PriceTag = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: 700,
  fontSize: '1.25rem',
  margin: theme.spacing(1, 0),
}));

const ProductCard = memo(({ product, priority = false }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const images = product.images || [product.image];

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isHovering && images.length > 1) {
      const interval = setInterval(handleNextImage, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovering, handleNextImage, images.length]);

  return (
    <StyledCard onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <ImageContainer className="product-image">
        {images.map((img, index) => (
          <Image
            key={img}
            src={img}
            alt={`${product.name} - View ${index + 1}`}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority && index === 0}
            quality={85}
            style={{
              objectFit: 'cover',
              objectPosition: 'top center',
              opacity: index === currentImageIndex ? 1 : 0,
              position: 'absolute',
              cursor: 'pointer',
            }}
          />
        ))}

        {images.length > 1 && (
          <>
            <NavigationButton onClick={handlePrevImage} sx={{ left: '12px' }} aria-label="Previous image">
              <ChevronLeftIcon />
            </NavigationButton>
            <NavigationButton onClick={handleNextImage} sx={{ right: '12px' }} aria-label="Next image">
              <ChevronRightIcon />
            </NavigationButton>
            <ThumbnailContainer>
              {images.map((img, index) => (
                <ThumbnailButton
                  key={img}
                  active={index === currentImageIndex}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={40}
                    height={40}
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </ThumbnailButton>
              ))}
            </ThumbnailContainer>
          </>
        )}

        <ActionBar className="action-buttons">
          <Tooltip title="Add to favorites" arrow>
            <IconButton aria-label="Add to favorites" sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Quick view" arrow>
            <IconButton aria-label="Quick view" sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
              <VisibilityIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </ActionBar>
      </ImageContainer>

      <ProductDetails>
        <Link href={`/products/${product.slug}`} passHref>
          <Typography
            variant="h6"
            component="a"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              lineHeight: 1.2,
              mb: 1,
              fontSize: '1.1rem',
              minHeight: '3em',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'text.primary',
              '&:hover': { color: 'primary.main', textDecoration: 'underline' },
            }}
          >
            {product.name}
          </Typography>
        </Link>

        {product.sizes?.length > 0 && (
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {product.sizes.map((size) => (
              <Chip
                key={size}
                label={size}
                onClick={() => setSelectedSize(size)}
                variant={selectedSize === size ? 'filled' : 'outlined'}
                color="primary"
                sx={{ minWidth: 40, height: 32, fontWeight: 500 }}
              />
            ))}
          </Box>
        )}

        <PriceTag>
          ${product.price.toFixed(2)}
        </PriceTag>

        <Button
          variant="contained"
          fullWidth
          startIcon={<AddShoppingCartIcon />}
          sx={{ py: 1.25 }}
        >
          Add to Cart
        </Button>
      </ProductDetails>
    </StyledCard>
  );
});

ProductCard.displayName = 'ProductCard';

export default function EnhancedProductGrid({ products }) {
  return (
    <Grid container spacing={3} sx={{ px: { xs: 2, md: 4 }, py: 6 }}>
      {products.map((product, index) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} priority={index < 4} />
        </Grid>
      ))}
    </Grid>
  );
}