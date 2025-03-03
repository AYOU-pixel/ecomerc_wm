// MobileMenu.js
'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Drawer, List, ListItem, Divider, Collapse, Box, Typography, IconButton, InputBase } from '@mui/material';
import { Search, Close, ExpandMore, ExpandLess } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

export default function MobileMenu({ open, onClose, navLinks, searchQuery, onSearchChange }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleSubmenuToggle = useCallback((index) => {
    setExpandedMenu((prev) => (prev === index ? null : index));
  }, []);

  const handleSearchChange = useCallback((e) => {
    onSearchChange(e.target.value);
  }, [onSearchChange]);

  const clearSearch = useCallback(() => {
    onSearchChange('');
  }, [onSearchChange]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      transitionDuration={300}
      PaperProps={{
        sx: {
          width: { xs: '85vw', sm: '400px' },
          background: 'linear-gradient(to bottom, #222, #111)',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <Close />
          </IconButton>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'rgba(255,255,255,0.1)',
            borderRadius: 1,
            px: 2,
            py: 1,
            mb: 3,
            border: '1px solid transparent',
            transition: 'border-color 0.3s',
            '&:focus-within': {
              borderColor: alpha('#ffd700', 0.5),
            },
          }}
        >
          <Search sx={{ mr: 1, color: 'rgba(255,255,255,0.7)' }} />
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            fullWidth
            sx={{ color: 'white' }}
            inputProps={{ 'aria-label': 'Search products' }}
          />
          {searchQuery && (
            <IconButton onClick={clearSearch} size="small" sx={{ color: 'rgba(255,255,255,0.7)', ml: 1 }}>
              <Close fontSize="small" />
            </IconButton>
          )}
        </Box>

        {/* Navigation */}
        <List component="nav" sx={{ '& .MuiListItem-root': { borderRadius: 1 } }}>
          {navLinks.map((link, index) => (
            <div key={link.path}>
              {link.subLinks ? (
                <>
                  <ListItem
                    button
                    onClick={() => handleSubmenuToggle(index)}
                    sx={{
                      py: 1.5,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' },
                    }}
                    TouchRippleProps={{ style: { color: '#ffd700' } }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      {link.icon}
                      <Typography sx={{ ml: 1.5, flexGrow: 1 }}>{link.name}</Typography>
                      {expandedMenu === index ? <ExpandLess /> : <ExpandMore />}
                    </Box>
                  </ListItem>

                  <Collapse in={expandedMenu === index}>
                    <List component="div" disablePadding sx={{ bgcolor: 'rgba(255,215,0,0.05)' }}>
                      {link.subLinks.map((subLink) => (
                        <ListItem
                          key={subLink.path}
                          component={Link}
                          href={subLink.path}
                          onClick={onClose}
                          sx={{
                            pl: 4,
                            py: 1.5,
                            color: 'rgba(255,255,255,0.8)',
                            '&:hover': {
                              bgcolor: 'rgba(255,215,0,0.1)',
                              color: '#ffd700',
                            },
                            textDecoration: 'none',
                          }}
                        >
                          {subLink.name}
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem
                  button
                  component={Link}
                  href={link.path}
                  onClick={onClose}
                  sx={{
                    py: 1.5,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' },
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  TouchRippleProps={{ style: { color: '#ffd700' } }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    {link.icon}
                    <Typography sx={{ ml: 1.5, flexGrow: 1 }}>{link.name}</Typography>
                  </Box>
                </ListItem>
              )}
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 1 }} />
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}