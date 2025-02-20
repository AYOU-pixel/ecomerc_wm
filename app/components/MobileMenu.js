'use client';

import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem, Divider, Collapse, Box, Typography, IconButton, InputBase } from '@mui/material';
import { Search, Close, ExpandMore, ExpandLess } from '@mui/icons-material';

export default function MobileMenu({ open, onClose, navLinks, searchQuery, onSearchChange }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleSubmenuToggle = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  console.log('navLinks:', navLinks); // Debugging

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '400px',
          bgcolor: '#1a1a1a',
          color: 'white',
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <Close />
          </IconButton>
        </Box>

        {/* Mobile Search Bar */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'rgba(255,255,255,0.1)',
          borderRadius: 1,
          px: 2,
          py: 1,
          mb: 3
        }}>
          <Search sx={{ mr: 1 }} />
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={onSearchChange}
            fullWidth
            sx={{ color: 'white' }}
          />
        </Box>

        <List component="nav">
          {navLinks.map((link, index) => (
            <div key={link.path}>
              <ListItem 
                button 
                onClick={() => link.subLinks ? handleSubmenuToggle(index) : onClose()}
                sx={{
                  py: 1.5,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  {link.icon}
                  <Typography sx={{ ml: 1.5, flexGrow: 1 }}>{link.name}</Typography>
                  {link.subLinks && (
                    expandedMenu === index ? <ExpandLess /> : <ExpandMore />
                  )}
                </Box>
              </ListItem>

              {link.subLinks && (
                <Collapse in={expandedMenu === index}>
                  <List component="div" disablePadding>
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
                            color: '#ffd700'
                          }
                        }}
                      >
                        {subLink.name}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 1 }} />
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

// Default props
MobileMenu.defaultProps = {
  navLinks: [],
};

// Prop validation
MobileMenu.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.node,
      subLinks: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func,
};