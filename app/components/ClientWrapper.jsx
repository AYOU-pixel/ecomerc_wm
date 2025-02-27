"use client";

import { Container, Box, Typography, Button, keyframes } from "@mui/material";

export default function ClientWrapper({ children }) {
  return (
    <Container>
      {/* You can use other MUI components here as needed */}
      {children}
    </Container>
  );
}