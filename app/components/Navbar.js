// navbar.js
"use client";
import Image from 'next/image';
import { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Box,
  ClickAwayListener,
} from "@mui/material";
import { Search, Info, Description, Email, ShoppingBag, Menu as MenuIcon, ExpandMore } from "@mui/icons-material";
import { alpha } from '@mui/material/styles';

const NAV_LINKS = [
  { 
    name: "Shop",
    path: "/shop",
    icon: <ShoppingBag fontSize="medium" />,
    subLinks: [
      { name: "Men's", path: "/men" },
      { name: "Women's", path: "/women" },
      { name: "Children's", path: "/children" },
    ],
  },
  { name: "Contact", path: "/contact", icon: <Email fontSize="medium" /> },
  { name: "About", path: "/about", icon: <Info fontSize="medium" /> },
  { name: "Terms", path: "/terms", icon: <Description fontSize="medium" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = useCallback((event, index) => {
    setActiveMenu(index);
  }, []);

  const handleMenuClose = useCallback(() => {
    setActiveMenu(null);
  }, []);

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const sharedMenuProps = useMemo(() => ({
    onClose: handleMenuClose,
    PaperProps: {
      sx: {
        backgroundColor: '#2a2a2a',
        color: 'white',
        minWidth: '200px',
        borderRadius: 2,
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        '& .MuiMenuItem-root': {
          transition: 'all 0.2s',
        }
      }
    },
    MenuListProps: { 
      sx: { py: 0.5 } 
    }
  }), [handleMenuClose]);

  const renderSubMenu = (link, index) => (
    <Menu
      {...sharedMenuProps}
      key={link.path}
      anchorEl={isClient ? document.getElementById(`nav-link-${index}`) : null}
      open={activeMenu === index}
      transitionDuration={150}
    >
      {link.subLinks.map((subLink) => (
        <MenuItem 
          key={subLink.path} 
          onClick={handleMenuClose}
          sx={{
            '&:hover': { 
              backgroundColor: 'rgba(255,215,0,0.1)',
              '& a': { color: '#ffd700' }
            }
          }}
        >
          <Link href={subLink.path} passHref legacyBehavior>
            <Typography component="a" sx={{
              width: '100%',
              px: 2,
              py: 1,
              textDecoration: 'none',
              color: pathname === subLink.path ? '#ffd700' : 'inherit',
              borderBottom: pathname === subLink.path ? '2px solid #ffd700' : 'none'
            }}>
              {subLink.name}
            </Typography>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <ClickAwayListener onClickAway={handleMenuClose}>
      <AppBar 
        position="sticky" 
        component="nav"
        sx={{ 
          backgroundColor: "#1a1a1a",
          boxShadow: scrolled ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          mx: 'auto',
          width: '100%',
          py: { xs: 1, md: 2 },
          px: { xs: 1.5, md: 4 },
          minHeight: { xs: 56, md: 64 }
        }}>
          <Image
            src="/storino.png" 
            alt="Fashion Store Logo"
            width={90} 
            height={40} 
            style={{ 
              width: 'clamp(70px, 15vw, 90px)', 
              height: 'auto' 
            }} 
          />

          <Box sx={{ 
            flexGrow: 1,
            display: { xs: "none", md: "flex" }, 
            justifyContent: 'center',
            maxWidth: '600px',
            mx: 4
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 2,
              px: 2,
              py: 0.8,
              width: '100%',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.25)'
              },
              '&:focus-within': {
                borderColor: alpha('#ffd700', 0.5),
              }
            }}>
              <Search sx={{ color: "white", mr: 1, fontSize: '1.3rem' }} />
              <InputBase
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                sx={{ 
                  color: "white", 
                  width: '100%',
                  '& .MuiInputBase-input': {
                    py: 0.5,
                    fontSize: '0.95rem'
                  }
                }}
                inputProps={{ 'aria-label': 'Search products' }}
              />
            </Box>
          </Box>

          <Box sx={{ 
            display: { xs: "none", md: "flex" }, 
            gap: 3,
            alignItems: 'center'
          }}>
            {NAV_LINKS.map((link, index) => (
              <Box key={link.path} sx={{ position: 'relative' }}>
                {link.subLinks ? (
                  <>
                    <Box
                      id={`nav-link-${index}`}
                      aria-haspopup="true"
                      aria-expanded={activeMenu === index ? 'true' : undefined}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        '&:hover': { color: '#ffd700' },
                        transition: 'all 0.3s',
                        py: 1,
                        px: 1.5,
                        borderRadius: 1,
                      }}
                      onClick={(e) => handleMenuOpen(e, index)}
                    >
                      {link.icon}
                      <Typography sx={{ mx: 1 }}>{link.name}</Typography>
                      <ExpandMore sx={{
                        fontSize: '1.2rem',
                        transform: activeMenu === index ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s'
                      }} />
                    </Box>
                    {renderSubMenu(link, index)}
                  </>
                ) : (
                  <Link href={link.path} passHref legacyBehavior>
                    <Box
                      component="a"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: pathname === link.path ? '#ffd700' : 'white',
                        textDecoration: 'none',
                        '&:hover': { color: '#ffd700' },
                        transition: 'color 0.2s',
                        py: 1,
                        px: 1.5,
                        borderRadius: 1,
                        borderBottom: pathname === link.path ? '2px solid #ffd700' : 'none'
                      }}
                      aria-label={link.name}
                    >
                      {link.icon}
                      <Typography sx={{ ml: 1 }}>{link.name}</Typography>
                    </Box>
                  </Link>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: 'center' }}>
            <IconButton 
              color="inherit" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open mobile menu"
              sx={{ 
                color: 'white',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
            
            <MobileMenu 
              open={mobileOpen} 
              onClose={() => setMobileOpen(false)}
              navLinks={NAV_LINKS}
              searchQuery={searchQuery}
              onSearchChange={handleSearch}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </ClickAwayListener>
  );
}